import React from 'react';

interface IImgWithFallback {
  src: string;
  fallback: string;
  type?: string;
}

function ImgWithFallback({
  src,
  fallback,
  type = 'image/webp',
  ...props
}: IImgWithFallback) {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...props} />
    </picture>
  );
}

export default ImgWithFallback;
