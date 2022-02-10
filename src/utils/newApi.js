import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const setParams = ({ q, page }) => {
  axios.defaults.params = {
    q,
    page,
    key: '25300151-6154e4a76e8e82454cce4100c',
    per_page: 12,
    safeserach: true,
    orientation: 'horizontal',
    totalHits: 500,
  };
};
export const getImages = (q = '', page = 1) => {
  setParams({ q, page });
  return axios
    .get(`?image_type=photo`)
    .then((res) =>{if(!res.data.hits.length)
    {throw new Error("Not found")}
return res.data.hits})
    .catch(err => {
      throw err;
    });};

    // export const getLargeImage = (id) => {
    //   setParams({id})
    //   return axios.get
    // }
     
    // export default getLargeImage;