import axios from 'axios';
import * as galleryActions from '_actions/gallery/gallery_actions';
import constants from '_constants/app_constants';

const { api } = constants;
const fetchAlbumPhotos = albumId => {
  return dispatch => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${api.flickr.key}&photoset_id=${albumId}&format=json&nojsoncallback=1`;
    dispatch(galleryActions.fetchAlbumPhotos(axios.get(url)));
  };
}
export default {
  fetchAlbumPhotos
};