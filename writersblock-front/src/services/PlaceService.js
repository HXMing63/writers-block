import axios from "axios";

const PLACE_API_BASE_URL = "http://localhost:8080/api/v1/place";

class PlaceService {
  savePlace(place) {
    return axios.post(PLACE_API_BASE_URL, place);
  }

  getPlaces() {
    return axios.get(PLACE_API_BASE_URL + "s");
  }

  getPlaceById(id){
    return axios.get(PLACE_API_BASE_URL + "/" + id);
  }

  getPlacesByName(name){
    return axios.get(PLACE_API_BASE_URL + "s/" + name);
  }

  deletePlace(id) {
    return axios.delete(PLACE_API_BASE_URL + "/" + id);
  }

  updatePlace(id, place){
    return axios.put(PLACE_API_BASE_URL + "/" + id, place);
  }
}

export default new PlaceService();