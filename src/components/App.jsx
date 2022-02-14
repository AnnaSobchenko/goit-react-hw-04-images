import { useEffect, useState } from 'react';
import { getImages } from 'utils/newApi';
import ButtonBtn from './ButtonBtn/ButtonBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import './styles.css';

const App = () => {
  const [dataGallery, setDataGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);  
  const [currImg, setcurrImg] = useState(0);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    if (search === '') {
      getImages()
        .then(res => setDataGallery(res))
        .catch(error => setError(error.message));
        return;
    } 
    setIsLoading(true);
    setError(null);

    getImages(search, page)
      .then(data => setDataGallery(prev => [...prev, ...data]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [search, page]); 

  const changeSearch = search => {
    setSearch(search);
    setPage(1);
    setDataGallery([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleLargeImageURL = e => {
    const img = dataGallery.filter(
      item => item.webformatURL === e.target.attributes.src.nodeValue
    );
    setcurrImg(dataGallery.indexOf(img[0]));
    toggleModal();
  };

  return (
    <>
      <div className="App">
        <Searchbar changeSearch={changeSearch} />
        <ImageGallery
          dataGallery={dataGallery}
          handleLargeImageURL={handleLargeImageURL}
        />
      </div>
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        search && <ButtonBtn handleLoadMore={handleLoadMore} />
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img
            src={dataGallery[currImg].largeImageURL}
            alt={dataGallery[currImg].tags}
          />
        </Modal>
      )}
    </>
  );
};

export default App;
