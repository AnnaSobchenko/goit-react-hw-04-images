import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';



const ImageGallery = ({ dataGallery, handleLargeImageURL }) => {
  return (
    <ul className="ImageGallery">
      {dataGallery.map(item => (
        <ImageGalleryItem
          key={item.id}
          item={item}
         onClick={handleLargeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
