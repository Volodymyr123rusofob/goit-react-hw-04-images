import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ items, showModal }) => {
  const listImg = items.map(img => {
    const { id, webformatURL, user, largeImageURL } = img;

    return (
      <li
        key={id}
        className={style.imageGalleryItem}
        onClick={() => showModal({ largeImageURL })}
      >
        <img
          className={style.imageGalleryItemImage}
          src={webformatURL}
          alt={user}
        />
      </li>
    );
  });
  return listImg;
};

export default ImageGalleryItem;
