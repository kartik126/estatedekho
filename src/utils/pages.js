import apiClient from './apiClient';
import path from 'path';
import fs from 'fs';

export async function getAllPages() {
  const pages = [];

  // get static pages from the 'pages' directory in the 'src' folder
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const pageFiles = fs.readdirSync(pagesDir);
  pageFiles.forEach((file) => {
    const extname = path.extname(file);
    if (extname === '.js' || extname === '.tsx') {
      // check for supported extensions
      const pageName =
        file === 'index.js' ? '/' : '/' + path.basename(file, extname);
      pages.push({ path: pageName, lastModified: new Date().toISOString() });
    }
  });

  // get property pages from API
  const properties = await apiClient.post(
    `${apiClient.Urls.searchListing}`,
    {
      city: 'Hyderabad',
      property_type: [],
      property: 'null',
      records: 10000,
    },
    true
  );
  if (properties.success) {
    console.log('====================================================>jkkjhkj');
    // add property pages
    properties.data.forEach((property) => {
      pages.push({
        path: `/PropertyDetails/${property.slug}`,
        lastModified: property.updated_at,
      });
    });
  }

  return pages;
}
