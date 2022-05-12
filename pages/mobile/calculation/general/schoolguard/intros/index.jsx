import { NextSeo } from "next-seo";
import Head from "next/head";
import Seo from "./Seo";

function Index() {
  return (
    <>
      <Seo
        title={"타이틀입니다"}
        description={"디스크립션입니다."}
        images="https://www.carrotins.com/static/images/calculation/contents/overseas/seo.jpg"
      />

      <div>12312323</div>
    </>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   <>
//     <NextSeo
//       title={title}
//       description={excerpt}
//       canonical={`https://myawesomewebsite.com/blog/${slug}`}
//       openGraph={{
//         type: "website",
//         url: "https://myawesomewebsite.com",
//         title: `${title} | originally posted on myawesomewebsite.com`,
//         description: excerpt,
//         locale: "en_EN",
//         images: [
//           {
//             url: coverImage,
//             width: 800,
//             height: 600,
//             alt: `hero image for ${title}`,
//           },
//         ],
//         site_name: "myawesomewebsite.com",
//       }}
//       twitter={{
//         handle: "@myawesometwittername",
//         site: "myawesomewebsite.com",
//         cardType: "summary",
//       }}
//     />
//   </>;

//   // Pass data to the page via props
//   return { props: { data: "" } };
// }

export default Index;
