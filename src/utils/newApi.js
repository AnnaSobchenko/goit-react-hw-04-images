import axios from 'axios';
// import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const setParams = ({ q, page }) => {
  axios.defaults.params = {
    q,
    page,
    key: '25300151-6154e4a76e8e82454cce4100c',
    per_page: 12,
    safeserach: true,
    // "photo&orientation": 'horizontal',
    totalHits: 500,
  };
};
export const getImages = (q = 'light', page = 1) => {
  setParams({ q, page });
  return axios
    .get(`?image_type=photo`)
    .then((res) =>{if(!res.data.hits.length)
    {throw new Error("Not found")}
return res.data.hits})
    .catch(err => {
      throw err;
    });
};

export default getImages;

//  export const getImages = (query = 'happy', page) => {
//   if (
//     !query ||
//     !query.trim() ||
//     page > Math.floor(setParams.totalHits / setParams.perPage) + 1
//   ) {
//     return Promise.resolve('');
//   }
//   return axios
//     .get(
//       `?image_type=photo&orientation=${setParams.photoOrientation}&safeserach=true&page=${page}&per_page=${setParams.perPage}&key=${setParams.apiKey}&q=${query}`
//     )
//     .then(response => {
//       console.log('total', Number(response.data.total));
//       if (Number(response.status) !== 200) {
//         throw new Error(Notify.failure(`Error ${response.status}`));
//       }
//       if (Number(response.data.total) !== 0 && page === 1) {
//         Notify.success(`Hooray! We found ${response.data.totalHits} images`);
//       }

//       if (Number(response.data.total) === 0) {
//         Notify.failure(
//           '❌ Sorry, there are no images matching your search query. Please try again.'
//         );
//         return;
//       }
//       return response.data;
//     })
//     .catch(() =>
//       Notify.failure(
//         '❌ Sorry, there are no images matching your search query. Please try again.'
//       )
//     );
// };

// // https://pixabay.com/api/?image_type=photo&orientation=horizontal&safeserach=true&page=1&per_page=12&key=25300151-6154e4a76e8e82454cce4100c&q=happy
