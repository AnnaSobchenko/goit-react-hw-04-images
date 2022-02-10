const ImageGalleryItem = ({ item,onClick }) => {
  // console.log(item);
  return (
    <li
      key={item.id}
      className="ImageGalleryItem"
      onClick={onClick}
    >
      <img
        className="ImageGalleryItem-Image"
        src={item.webformatURL}
        alt={item.tag}
        value={item.id}
        largeImageURL={item.largeImageURL}
        // onClick={handleLargeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
