import { NextSeo } from "next-seo";
import Head from "next/head";

function Index() {
  return (
    <>
      <div>12312323</div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  <>
    <NextSeo
      title="캐롯손해보험 스쿨가드보험"
      description="즐거운 학교생활이 안전장치, 학교폭력발생 시 치료비 및 행정사 변호사비용보장"
      openGraph={{
        type: "website",
        url: "https://www.carrotins.com/mobile/calculation/general/schoolguard/intro",
        title: "캐롯손해보험 스쿨가드보험",
        description: "캐롯손해보험 스쿨가드보험",
        images: [
          {
            url: "https://www.carrotins.com/static/images/calculation/contents/schoolguard/seo.jpg",
            width: 800,
            height: 400,
            alt: "캐롯손해보험 스쿨가드보험 이미지",
          },
        ],
      }}
    />
    <Head>
      <meta
        name="keywords"
        content="학교폭력, 학폭, 학폭피해, 집단따돌림, 사이버폭력, 변호사, 행정사, 학교폭력피해치료, 학폭위, 학교폭력사안처리, 학교폭력대책심의위원회,심리상담센터, 심리상담, 소년법, 청소년심리상담센터, 왕따, 청소년상담"
      />
    </Head>
  </>;

  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
