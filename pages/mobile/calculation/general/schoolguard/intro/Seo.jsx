import { NextSeo } from "next-seo";

export default function Seo({ title, description, images }) {
  //   const { title, excerpt, slug, coverImage } = post;
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
          locale: "ko-KR",
          images: [
            {
              url: images,
              width: 800,
              height: 600,
              alt: `이미지`,
            },
          ],
          site_name: "https://carrotins.com",
        }}
      />
    </>
  );
}
