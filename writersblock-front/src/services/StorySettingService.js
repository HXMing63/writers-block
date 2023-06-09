import axios from "axios";

const SETTING_API_BASE_URL = "http://localhost:8080/api/v1/storysetting";

class StorySettingService {
  saveStorySetting(storySetting) {
    return axios.post(SETTING_API_BASE_URL, storySetting);
  }

  getStorySettings(){
    return axios.get(SETTING_API_BASE_URL + "s");
  }
}

export default new StorySettingService();