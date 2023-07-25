import axios from "axios";

const CHARACTER_API_BASE_URL = "http://localhost:8080/api/v1/storychar"

class StoryCharService{
    saveStoryChar(storyChar){
        return axios.post(CHARACTER_API_BASE_URL, storyChar);
    }

    getStoryChars(){
        return axios.get(CHARACTER_API_BASE_URL + "s");
    }

    getStoryCharsByName(name){
        return axios.get(CHARACTER_API_BASE_URL + "s/" + name);
    }

    getStoryCharsExcept(ids){
        const newIds = ids.join(",");
        return axios.get(CHARACTER_API_BASE_URL + "s/except/" + newIds);
    }

    getStoryCharsByNameExcept(name, ids){
        const newIds = ids.join(",");
        return axios.get(CHARACTER_API_BASE_URL + "s/name_except", {params: {
            name: name,
            ids: newIds
        }});
    }

    updateStoryChar(id, storyChar){
        return axios.put(CHARACTER_API_BASE_URL + "/" + id, storyChar);
    }

    deleteStoryChar(id){
        return axios.delete(CHARACTER_API_BASE_URL + "/" + id);
    }
}

export default new StoryCharService();