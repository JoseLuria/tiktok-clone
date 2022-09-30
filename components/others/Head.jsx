import NextHead from "next/head";

export const Head = ({
  title,
  description = "Una aplicación que muestra videos interesantes sobre las mejores ciudades del mundo.",
  otg = "/others/otg.jpg",
}) => {
  return (
    <NextHead>
      <title>{`${title} - TikTok`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} - City`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={otg} />
    </NextHead>
  );
};
