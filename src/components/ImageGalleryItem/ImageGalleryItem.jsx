const ImageGalleryItem = ({item}) => {

  return (
    <li key={item.id} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-Image"
        src={item.webformatURL}
        alt={item.tag}
      />
    </li>
  );
};

export default ImageGalleryItem;
