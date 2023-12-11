const puppeteer = require("puppeteer");

exports.crawling = async (req, res) => {
  const { query } = req.params;
  let data = {};
  // headless 브라우저 실행
  const browser = await puppeteer.launch({ headless: true, slowMo: 30 });
  // 새로운 페이지 열기
  const page = await browser.newPage();
  await page.goto("https://place.map.kakao.com/");

  // 대기 후에 검색 입력 필드와 버튼을 찾음
  await page.waitForSelector(".box_searchbar");
  await page.waitForSelector(".btn_search");

  // 찾은 요소에 값을 입력하고 Enter 키를 누름
  await page.type(".box_searchbar", query + " 산책로");
  await page.keyboard.press("Enter");

  // 대기 후에 검색 결과가 나타날 때까지 대기
  await page.waitForSelector(".placelist");

  // 장소 더보기 클릭 이벤트
  const click = await page.$("div.section.places a.more.HIDDEN");
  if (click == null) {
    await page.click("div.section.places a.more");
    await page.click("div.section.places a.more");
  }

  // 장소 총 갯수
  let totalEh = await page.$("div.section.places");
  let total = await totalEh.$eval(".sectiontitle .cnt", (el) => {
    return el.textContent;
  });

  // 페이지 변경 양 체크
  let listData = [];
  if (Number(total) > 15) {
    let j = 0;
    while (true) {
      if (j > 0) break;
      for (let i = 2; i < 7; i++) {
        const pageSelector = `.keywordSearch .pages .pageWrap a:nth-child(${i})`;
        const pageSelectorHidden = await page.$(
          `.keywordSearch .pages .pageWrap a.HIDDEN:nth-child(${i})`
        );
        if (pageSelectorHidden != null) continue;
        await page.click(pageSelector);
        // await page.waitForNavigation(); // 클릭 후 충분한 시간을 기다림
        // 여기에 리스트 담는거 추가
        const resultList = await page.$$eval(
          ".placelist .PlaceItem",
          (elements) => {
            return elements.map((element) => {
              const titleElement = element.querySelector(
                ".tit_name .link_name"
              );
              const subTitleElement = element.querySelector(".subcategory");
              const addressElement = element.querySelector(".info_item .addr");
              const linkElement = element.querySelector(".info_item .moreview");
              const scoreNumElement = element.querySelector(".rating .num");
              const scoreTxtElement = element.querySelector(
                ".rating .numberofscore"
              );
              const scoreReviewElement =
                element.querySelector(".rating .review em");

              // titleElement 또는 addressElement가 null이면 해당 값을 빈 문자열로 설정
              const title = titleElement ? titleElement.textContent.trim() : "";
              const subTitle = subTitleElement
                ? subTitleElement.textContent.trim()
                : "";
              const address = addressElement
                ? addressElement.textContent.trim()
                : "";
              const linkFilter = linkElement ? linkElement.href.split("/") : "";
              const link = linkFilter[3] ? linkFilter[3] : "";
              const scoreNum = scoreNumElement
                ? scoreNumElement.textContent.trim()
                : "";
              const scoreTxt = scoreTxtElement
                ? scoreTxtElement.textContent.trim()
                : "";
              const scoreReview = scoreReviewElement
                ? scoreReviewElement.textContent.trim()
                : "";

              return {
                title,
                subTitle,
                address,
                link,
                scoreNum,
                scoreTxt,
                scoreReview,
              };
            });
          }
        );
        listData.push(...resultList);
        // await page.waitForTimeout(1000); // 클릭 후 충분한 시간을 기다림
      }

      const next = await page.$(
        ".keywordSearch .pages .pageWrap .next.disabled"
      );
      if (next !== null) break;

      await page.click(".keywordSearch .pages .pageWrap .next");
      // await page.waitForTimeout(1000); // 클릭 후 충분한 시간을 기다림
      j++;
    }
  } else {
    const resultList = await page.$$eval(
      ".placelist .PlaceItem",
      (elements) => {
        return elements.map((element) => {
          const titleElement = element.querySelector(".tit_name .link_name");
          const subTitleElement = element.querySelector(".subcategory");
          const addressElement = element.querySelector(".info_item .addr");
          const linkElement = element.querySelector(".info_item .moreview");
          const scoreNumElement = element.querySelector(".rating .num");
          const scoreTxtElement = element.querySelector(
            ".rating .numberofscore"
          );
          const scoreReviewElement =
            element.querySelector(".rating .review em");

          // titleElement 또는 addressElement가 null이면 해당 값을 빈 문자열로 설정
          const title = titleElement ? titleElement.textContent.trim() : "";
          const subTitle = subTitleElement
            ? subTitleElement.textContent.trim()
            : "";
          const address = addressElement
            ? addressElement.textContent.trim()
            : "";
          const linkFilter = linkElement ? linkElement.href.split("/") : "";
          const link = linkFilter[3] ? linkFilter[3] : "";
          const scoreNum = scoreNumElement
            ? scoreNumElement.textContent.trim()
            : "";
          const scoreTxt = scoreTxtElement
            ? scoreTxtElement.textContent.trim()
            : "";
          const scoreReview = scoreReviewElement
            ? scoreReviewElement.textContent.trim()
            : "";

          return {
            title,
            subTitle,
            address,
            link,
            scoreNum,
            scoreTxt,
            scoreReview,
          };
        });
      }
    );
    listData.push(...resultList);
  }

  data.title = query;
  data.total = await total;
  data.list = await listData;

  console.log("resultList: ", data);

  await browser.close();

  if (!data.title) {
    return await res.send({
      isSuccess: false,
      code: 400,
      message: "크롤링 실패 에러. 관리자에게 문의하세요.",
    });
  }

  return await res.send({
    result: data,
    isSuccess: true,
    code: 200,
  });
};

//////////////////////////////////////////////

exports.crawlingDetail = async (req, res) => {
  const { query } = req.params;
  let data = {};
  // headless 브라우저 실행
  const browser = await puppeteer.launch({ headless: true, slowMo: 30 });
  // 새로운 페이지 열기
  const page = await browser.newPage();
  await page.goto(`https://place.map.kakao.com/${query}`);

  // 대기 후에 검색 결과가 나타날 때까지 대기
  await page.waitForSelector(".cont_mapdetail");

  // 타이틀
  let detailEh = await page.$(".place_details");
  let title = await detailEh.$eval(".tit_location", (el) => {
    return el.textContent;
  });

  // 대표이미지
  const bannerImgCheck = await page.$(
    `div.details_present > a.link_present span.bg_present`
  );
  let bannerImgEh = await page.$("div.details_present > a.link_present");
  let bannerImg = null;
  if (bannerImgCheck != null) {
    bannerImg = await bannerImgEh.$eval("span.bg_present", (el) => {
      return el.style.backgroundImage;
    });
  }

  // 평점
  let starPointEh = await page.$(".location_evaluation a:nth-child(3)");
  let starPoint = await starPointEh.$eval("span.color_b", (el) => {
    return el.textContent;
  });
  // 리뷰 개수
  let reivewPointEh = await page.$(".location_evaluation a:nth-child(5)");
  let reivewPoint = await reivewPointEh.$eval("span.color_b", (el) => {
    return el.textContent;
  });

  // 주소
  let addressEh = await page.$("div.placeinfo_default > div.location_detail");
  let address = await addressEh.$eval("span.txt_address", (el) => {
    return el.textContent;
  });
  // 코멘트 리스트
  const reivewListCheck = await page.$(`.list_evaluation li`);
  let reivewList = null;
  if (reivewListCheck != null) {
    reivewList = await page.$$eval(".list_evaluation li", (elements) => {
      return elements.map((element) => {
        const reviewUserNameElement = element.querySelector(
          ".unit_info .link_user"
        );
        const reviewUserTextElement =
          element.querySelector(".txt_comment span");
        const reviewUserDateElement = element.querySelector(".time_write");
        // titleElement 또는 addressElement가 null이면 해당 값을 빈 문자열로 설정
        const reviewUserName = reviewUserNameElement
          ? reviewUserNameElement.textContent.trim()
          : "";
        const reviewUserText = reviewUserTextElement
          ? reviewUserTextElement.textContent.trim()
          : "";
        const reviewUserDate = reviewUserDateElement
          ? reviewUserDateElement.textContent.trim()
          : "";
        return {
          reviewUserName,
          reviewUserText,
          reviewUserDate,
        };
      });
    });
  }

  // 사진 리스트
  const photoListCheck = await page.$(`.photo_area`);
  let photoList = null;
  if (photoListCheck) {
    photoList = await page.$$eval(".photo_area .list_photo li", (elements) => {
      return elements.map((element) => {
        const photoImgElemen = element.querySelector(".link_photo");
        // titleElement 또는 addressElement가 null이면 해당 값을 빈 문자열로 설정
        const photoImg = photoImgElemen
          ? photoImgElemen.style.backgroundImage
          : "";

        return {
          photoImg,
        };
      });
    });
  }

  data.title = title;
  data.address = address;
  data.bannerImg = bannerImg;
  data.starPoint = starPoint;
  data.reivewPoint = reivewPoint;
  data.reivewList = reivewList;
  data.photoList = photoList;

  console.log("resultList: ", data);

  await browser.close();

  if (!data.title) {
    return await res.send({
      isSuccess: false,
      code: 400,
      message: "크롤링 실패 에러. 관리자에게 문의하세요.",
    });
  }

  return await res.send({
    result: data,
    isSuccess: true,
    code: 200,
  });
};
