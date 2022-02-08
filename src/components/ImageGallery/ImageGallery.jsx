import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ dataGallery }) => {
    //   const { dataGallery } = this.props;
  return (
    <ul className="ImageGallery">
       {dataGallery.map(item => (       
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
