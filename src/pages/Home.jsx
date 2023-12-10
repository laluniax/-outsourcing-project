import Search from '../components/Search/Search';
import HeaderImage from 'components/Header/HeaderImage';
import MainContents from 'components/Main/MainContents';

export default function Home() {
  return (
    <>
      <section>
        <HeaderImage></HeaderImage>
        <Search />
        <MainContents />
      </section>
    </>
  );
}
