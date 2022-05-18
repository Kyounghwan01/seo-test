import { DefaultSeo } from "next-seo";
import App from "next/app";
import "../styles/globals.css";

const DEFAULT_SEO = {
  title: "하하하하 새로운 기준 캐롯손해보험",
  description:
    "캐롯손해보험 공식 홈페이지, 퍼마일 자동차보험, 운전자보험, 해외여행보험 등 편리한 보험 계산, 가입",
  canonical: "https://www.carrotins.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.carrotins.com",
    title: "test 보험의 새로운 기준 캐롯손해보험",
    site_name: "캐롯손해보험",
    images: [
      {
        url: "https://cdn.carrotins.com/static/images/common/nav_sub01_img.png",
        width: 285,
        height: 167,
        alt: "캐롯손해보험",
      },
    ],
  },
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSeo {...DEFAULT_SEO} />
        {process.env.NODE_ENV}
        <Component {...pageProps} />
      </>
    );
  }
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp;
