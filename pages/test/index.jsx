import { NextSeo } from "next-seo";

const Index = () => {
  return (
    <>
      <NextSeo
        title="멀리오래갈땐, 캐롯장기체류보험"
        description="유학,워킹홀리데이,장기출장,주재원,어학연수 갈때는 온라인이라 합리적인 캐롯 장기체류보험"
        openGraph={{
          type: "website",
          url: "https://www.carrotins.com/common/url/calculation/general/overseasLongTerm",
          title: "멀리오래갈땐, 캐롯장기체류보험",
          description:
            "유학,워킹홀리데이,장기출장,주재원,어학연수 갈때는 온라인이라 합리적인 캐롯 장기체류보험",
          images: [
            {
              url: "https://www.carrotins.com/static/images/calculation/contents/overseasLongTerm/seo.jpg",
              width: 800,
              height: 400,
              alt: "캐롯 장기체류보험 이미지",
            },
          ],
        }}
      />
      <div>teststest</div>
    </>
  );
};

export default Index;
