const { Rings } = require('react-loader-spinner');

const Loader = () => {
  return (
    <div className='loader'>
            <div className="svg">
        <Rings heigth="34" width="100%" color="#3f51b5" />
        <Rings heigth="34" width="100%" color="#3f51b5" />
        <Rings heigth="34" width="100%" color="#3f51b5" />
      </div>
    
    </div>
  );
};

export default Loader;
