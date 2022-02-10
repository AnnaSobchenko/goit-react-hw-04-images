const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li key={item.id} className="ImageGalleryItem" onClick={onClick}>
      <img
        className="ImageGalleryItem-Image"
        src={item.webformatURL}
        alt={item.tag}
        value={item.id}
      />
    </li>
  );
};

export default ImageGalleryItem;
