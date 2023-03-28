import axios from "axios";

const PLACE_API_BASE_URL = "http://localhost:8080/api/v1/places";

class PlaceService {
  savePlace(place) {
    return axios.post(PLACE_API_BASE_URL, place);
  }

  getPlaces() {
    return axios.get(PLACE_API_BASE_URL);
  }

  deletePlace(id) {
    return axios.delete(PLACE_API_BASE_URL + "/" + id);
  }

  getPlaceById(id){
    return axios.get(PLACE_API_BASE_URL + "/" + id);
  }

  updatePlace(id, place){
    return axios.put(PLACE_API_BASE_URL + "/" + id, place);
  }
}

export default new PlaceService();
