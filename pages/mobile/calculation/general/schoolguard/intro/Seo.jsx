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
          description: excerpt,
          locale: "en_EN",
          images: [
            {
              url: "https://cdn.carrotins.com/static/images/common/nav_sub01_img.png",
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
