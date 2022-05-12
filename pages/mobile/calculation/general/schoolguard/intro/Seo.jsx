import { NextSeo } from "next-seo";

export default function Seo({ title, description, images }) {
  //   const { title, excerpt, slug, coverImage } = post;
  return (
    <>
      {/* <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "website",
          //   이 두놈
          url: "https://myawesomewebsite.com",
          title: title,
          description: description,
          locale: "en_EN",
          images: [
            {
              url: images,
              width: 800,
              height: 600,
              alt: "hero image for ",
            },
          ],
          //   이 두놈
          site_name: "carrotins.com",
        }}
      /> */}
      <NextSeo
        title={"awdawdawdawdawda"}
        description={"zxczxczxczxczxczxcz"}
        openGraph={{
          type: "website",
          //   이 두놈
          url: "https://myawesomewebsite.com",
          title: "this is title",
          description: "this is desc.",
          locale: "en_EN",
          images: [
            {
              url: "https://www.carrotins.com/static/images/calculation/contents/overseas/seo.jpg",
              width: 800,
              height: 600,
              alt: "hero image for ",
            },
          ],
          //   이 두놈
          site_name: "carrotins.com",
        }}
      />
    </>
  );
}
