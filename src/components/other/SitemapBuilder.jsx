/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Package dependencies
import React from 'react';
import builder from 'xmlbuilder';
import sitemapData from 'Data/sitemapData';
import bookInfo from 'Data/bookInfo.json';
import character from 'Data/character.json';

/** ********************************************* */
// Component for displaying the home page
/** ********************************************* */
export default function FeedbackPage() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  const date = `${yyyy}-${mm}-${dd}`;
  const freq = 'weekly';
  const url = 'https://learningisthesolution.com';


  const urlset = builder.create('urlset', { encoding: 'utf-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  for (let i = 0; i < sitemapData.length; i += 1) {
    const item = urlset.ele('url');
    const data = sitemapData[i];
    item.ele('loc', url + data.extension);
    item.ele('lastmod', date);
    item.ele('changefreq', freq);
    item.ele('priority', data.priority);
  }

  for (const book in bookInfo) {
    const item = urlset.ele('url');
    item.ele('loc', `${url}/book?${book}`);
    item.ele('lastmod', date);
    item.ele('changefreq', freq);
    item.ele('priority', 1);
  }


  for (const topic in character) {
    const temp = character[topic].title.replace(/\s+/g, '-').toLowerCase();
    const item1 = urlset.ele('url');
    item1.ele('loc', `${url}/book?parents-${temp}`);
    item1.ele('lastmod', date);
    item1.ele('changefreq', freq);
    item1.ele('priority', 1);

    const item2 = urlset.ele('url');
    item2.ele('loc', `${url}/book-recommendations?${temp}`);
    item2.ele('lastmod', date);
    item2.ele('changefreq', freq);
    item2.ele('priority', 0.5);
  }


  const xml = urlset.end({ pretty: true });

  // eslint-disable-next-line no-console
  console.log(xml);
  return (
    <div>
      {xml}
    </div>
  );
}
