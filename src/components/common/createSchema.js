import { homePage } from 'Data/pageHeadInfo.json';
import { baseUrl } from 'Constants';

export default function createSchema(type, url, title, description) {
  return [
    { "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      "name": "Learning is the Solution",
      "url": baseUrl,
      "sameAs": ["https://www.facebook.com/learningisthesolution", "https://www.instagram.com/learning_is_the_solution/", "https://www.pinterest.com/learningisthesolution/", "https://twitter.com/LearnistheSol"],
      "logo": {
        "@type": "ImageObject",
        "@id": `${baseUrl}#logo`,
        "inLanguage": "en-US",
        "url": `${baseUrl}assets/logo-white-small.png`,
        "width": "170",
        "height": "50",
        "caption": "Learning is the Solution"
      },
      "image": {
        "@id": `${baseUrl}#logo`
      }
    }, {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      "url": baseUrl,
      "name": "Learning is the Solution",
      "inLanguage": "en-US",
      "description": homePage.title,
      "publisher": {
        "@id": `${baseUrl}#organization`
      }
    },
    {
      "@type": [type],
      "@id": `${url}#webpage`,
      "url": url,
      "name": title,
      "isPartOf": {
        "@id": `${url}#website`
      },
      "inLanguage": "en-US",
      "about": {
        "@id": `${url}#organization`
      },
      "description": description
    }];
}
