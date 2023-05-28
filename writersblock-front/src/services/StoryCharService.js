import axios from "axios";

const CHARACTER_API_BASE_URL = "http://localhost:8080/api/v1/storychar"

class StoryCharService{
    saveStoryChar(storyChar){
        return axios.post(CHARACTER_API_BASE_URL, storyChar);
    }

    getStoryChars(){
        return axios.get(CHARACTER_API_BASE_URL + "s");
    }

    updateStoryChar(id, storyChar){
        return axios.put(CHARACTER_API_BASE_URL + "/" + id, storyChar);
    }
}

export default new StoryCharService();