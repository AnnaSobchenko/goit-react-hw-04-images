import { Component } from 'react';
import { getImages } from 'utils/newApi';
import ButtonBtn from './ButtonBtn/ButtonBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import './styles.css';

class App extends Component {
  state = {
    dataGallery: [],
    search: '',
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  componentDidMount() {
    getImages()
      .then(dataGallery => this.setState({ dataGallery }))
      .catch(error => this.setState({ error: error.message }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setImages();
    }
  }

  setImages = () => {
    this.setState({ isLoading: true, error: null });
    getImages(this.state.search, this.state.page)
      .then(dataGallery =>
        this.setState(prev => ({
          dataGallery: [...prev.dataGallery, ...dataGallery],
        }))
      )
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  changeSearch = search => {
    this.setState({ search, page: 1, dataGallery: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  // handleLargeImageURL = largeImageURL => {
  //   this.setState( largeImageURL);
  //   console.log( largeImageURL);
  //   this.toggleModal();
  // };
  handleLargeImageURL = e => {
    // this.setState( largeImageURL);
    console.log(e.target);
    console.log(e.target.largeImageURL);
    // this.toggleModal();
  };

  render() {
    const { dataGallery, isLoading, search, error, showModal, largeImageURL } =
      this.state;
      console.log(dataGallery);
    return (
      <>
        <div className="App">
          <Searchbar changeSearch={this.changeSearch} />
          <ImageGallery
            dataGallery={dataGallery}
            handleLargeImageURL={this.handleLargeImageURL}
          />
        </div>
        {error ? (
          <p>{error}</p>
        ) : isLoading ? (
          <Loader />
        ) : (
          search && <ButtonBtn handleLoadMore={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal  onClose={this.toggleModal}><img src={largeImageURL} alt="" /></Modal>
        )}
      </>
    );
  }
}

export default App;
