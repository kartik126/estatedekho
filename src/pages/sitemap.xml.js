import { SitemapStream, streamToPromise } from 'sitemap';
import { getAllPages } from 'utils/pages';

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const pages = await getAllPages();

  const smStream = new SitemapStream({
    hostname: 'https://estatedekho.com',
  });

  pages.forEach(({ path, lastModified }) => {
    smStream.write({
      url: path,
      lastmod: lastModified,
    });
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap.toString());
  res.end();

  return {
    props: {},
  };
}
