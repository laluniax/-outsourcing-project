const compression = require("compression");
const cors = require("cors");
const { router } = require("./src/router");

const express = require("express");
const app = express();
const port = 5001;

// express 미들웨어 설정

// cors 설정
app.use(cors());

// body json 파싱
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// 라우터 분리
router(app);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
