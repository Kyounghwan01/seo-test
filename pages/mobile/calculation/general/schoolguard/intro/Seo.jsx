import { NextSeo } from "next-seo";

export default function Seo({ title, description, images }) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://carrotins.com"
        openGraph={{
          type: "website",
          url: "https://carrotins.com",
          title: title,
          description: description,
          locale: "en_EN",
          images: [
            {
              url: images,
              width: 800,
              height: 600,
              alt: "이미지",
            },
          ],
          site_name: "carrotins.com",
        }}
      />
    </>
  );
}
