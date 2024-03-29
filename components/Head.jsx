import Head from "next/head";
export default function CustomHead({ name }) {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="Hello, I'm Palentier, a front-end developer based in the United States"
        />
        <meta property="og:title" content="Palentier - Front-end developer" />
        <meta
          property="og:description"
          content="Hello, I'm Palentier, a front-end developer based in the United States"
        />
        <meta property="og:url" content="https://palentier.xyz" />
        <meta property="og:type" content="website" />
        <meta property="theme-color" content="#ccccff" />
      </Head>
    </>
  );
}
