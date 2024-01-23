import { useState, useEffect } from 'react';
import { searchImg } from './api/getAllImg';

import Searchbar from './searchbar/Searchbar';
import Button from './button/Button';
import Loader from './loader/Loader';
import ImageGallery from './imageGallery/ImageGallery';
import style from './app.module.css';
import Modal from './modal/Modal';

const App = () => {
  const [search, setSearch] = useState('');
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [imgDetails, setImgDetails] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isItem, setIsItem] = useState(false);

  useEffect(() => {
    if (search === '') return;
    fetchImage();
  }, [search, page]);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const { data } = await searchImg(search, page);
      setIsItem(true);
      const array = data.hits;
      setItem(prevItems => [...prevItems, ...array]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const showModal = ({ largeImageURL }) => {
    setModalOpen(true);
    setImgDetails({ largeImageURL });
  };

  const closeModal = () => {
    setModalOpen(false);
    setImgDetails({});
  };

  const hendleSearch = search => {
    setSearch((search = `${search}`));
    setItem([]);
    setPage(1);
  };
  return (
    <div className={style.box}>
      <Searchbar onSubmit={hendleSearch} />
      {isItem && <ImageGallery items={item} showModal={showModal} />}
      <Loader loading={loading} />
      {isItem && (
        <Button onClick={loadMore} type="button">
          Load More
        </Button>
      )}
      {modalOpen && <Modal close={closeModal} img={imgDetails}></Modal>}
    </div>
  );
};

export default App;
