import { ImgHTMLAttributes } from 'react';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement>;

const LazyImage = (props: LazyImageProps) => {
  return <img {...props} loading="lazy" />;
};

export default LazyImage;
