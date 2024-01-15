import axios from "axios";

const SETTING_API_BASE_URL = "http://localhost:8080/api/v1/storysetting";

class StorySettingService {
  saveStorySetting(storySetting) {
    return axios.post(SETTING_API_BASE_URL, storySetting);
  }

  getStorySettings(){
    return axios.get(SETTING_API_BASE_URL + "s");
  }

  getStorySettingsExcept(ids){
      const newIds = ids.join(",");
      return axios.get(SETTING_API_BASE_URL + "s/except/" + newIds);
  }

  getStorySettingsByNameExcept(name, ids){
      const newIds = ids.join(",");
      return axios.get(SETTING_API_BASE_URL + "s/name_except", {params: {
          name: name,
          ids: newIds
      }});
  }

  updateStorySetting(id, storySetting){
    return axios.put(SETTING_API_BASE_URL + "/" + id, storySetting);    
  }

  deleteStorySetting(id) {
    return axios.delete(SETTING_API_BASE_URL + "/" + id);
  }
}

export default new StorySettingService();