import axios from "axios";

const CHAPTER_API_BASE_URL = "http://localhost:8080/api/v1/chapter";

class ChapterService {
  saveChapter(chapter) {
    return axios.post(CHAPTER_API_BASE_URL, chapter);
  }

  getChapters(){
    return axios.get(CHAPTER_API_BASE_URL + "s");
  }
}

export default new ChapterService();