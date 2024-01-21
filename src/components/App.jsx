import { Component } from 'react';
import { searchImg } from './api/getAllImg';

import Searchbar from './searchbar/Searchbar';
import Button from './button/Button';
import Loader from './loader/Loader';
import ImageGallery from './imageGallery/ImageGallery';
import style from './app.module.css';
import Modal from './modal/Modal';

class App extends Component {
  state = {
    search: '',
    item: [],
    loading: false,
    error: null,
    page: 1,
    imgDetails: {},
    modalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (search !== prevState.search || page !== prevState.page) {
      this.fetchImage();
    }
  }

  async fetchImage() {
    const { search, page } = this.state;
    this.setState({ loading: true });
    searchImg(search, page)
      .then(({ data }) => {
        const array = data.hits;
        this.setState(({ item }) => ({
          item: array?.length ? [...item, ...array] : item,
        }));
      })
      .catch(error => {
        this.setState({
          error: error.message,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showModal = ({ largeImageURL }) => {
    this.setState({
      modalOpen: true,
      imgDetails: { largeImageURL },
    });
  };

  closeModal = () =>
    this.setState({
      modalOpen: false,
      imgDetails: {},
    });

  hendleSearch = ({ search }) => {
    this.setState({
      search,
      item: [],
      page: 1,
    });
  };

  render() {
    const { loadMore, hendleSearch, showModal, closeModal } = this;
    const { item, loading, imgDetails, modalOpen } = this.state;

    const isItem = Boolean(item.length);

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
        {modalOpen && <Modal close={closeModal}>{imgDetails}</Modal>}
      </div>
    );
  }
}

export default App;
