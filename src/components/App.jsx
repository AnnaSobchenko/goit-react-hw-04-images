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
    currImg: 0,
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
      .then(data =>
        this.setState(prev => ({
          dataGallery: [...prev.dataGallery, ...data],
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

  handleLargeImageURL = e => {
    const { dataGallery } = this.state;
    const img = dataGallery.filter(
      item => item.webformatURL === e.target.attributes.src.nodeValue
    );
    this.setState({
      currImg: dataGallery.indexOf(img[0]),
    });
    this.toggleModal();
  };

  render() {
    const { dataGallery, isLoading, search, error, showModal, currImg } =
      this.state;
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
          <Modal onClose={this.toggleModal}>
            <img
              src={dataGallery[currImg].largeImageURL}
              alt={dataGallery[currImg].tags}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
