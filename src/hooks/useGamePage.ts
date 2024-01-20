import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import news1Png from 'assets/image/png/news1.png';
import news2Png from 'assets/image/png/news2.png';
import news3Png from 'assets/image/png/news3.png';
import news1Webp from 'assets/image/webp/news1.webp';
import news2Webp from 'assets/image/webp/news2.webp';
import news3Webp from 'assets/image/webp/news3.webp';

function useGamePage() {
  const { t } = useTranslation();

  const news = [
    {
      id: nanoid(),
      category: t('newsTile.news1.tag'),
      text: t('newsTile.news1.text'),
      background: {
        webp: news1Webp,
        png: news1Png
      }
    },
    {
      id: nanoid(),
      category: t('newsTile.news2.tag'),
      text: t('newsTile.news2.text'),
      background: {
        webp: news2Webp,
        png: news2Png
      }
    },
    {
      id: nanoid(),
      category: t('newsTile.news3.tag'),
      text: t('newsTile.news3.text'),
      background: {
        webp: news3Webp,
        png: news3Png
      }
    }
  ];

  return { news };
}

export default useGamePage;
