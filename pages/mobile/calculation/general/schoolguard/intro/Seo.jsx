import { NextSeo } from "next-seo";

export default function Seo() {
  //   const { title, excerpt, slug, coverImage } = post;
  return (
    <>
      <NextSeo
        title={"titles"}
        description={"expect"}
        canonical={`https://carrotins.com`}
        openGraph={{
          type: "website",
          url: "https://myawesomewebsite.com",
          title: ` | originally posted on myawesomewebsite.com`,
          description: "awdawda",
          locale: "en_EN",
          images: [
            {
              url: "https://www.carrotins.com/static/images/calculation/contents/overseas/seo.jpg",
              width: 800,
              height: 600,
              alt: `hero image for `,
            },
          ],
          site_name: "myawesomewebsite.com",
        }}
        twitter={{
          handle: "@myawesometwittername",
          site: "myawesomewebsite.com",
          cardType: "summary",
        }}
      />
    </>
  );
}
