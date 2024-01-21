import style from './imageGallery.module.css';

import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, showModal }) => {
  return (
    <ul className={style.imageGallery}>
      <ImageGalleryItem items={items} showModal={showModal} />
    </ul>
  );
};

export default ImageGallery;
