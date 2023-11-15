import axios from "axios";

const CHAPTER_API_BASE_URL = "http://localhost:8080/api/v1/chapter";

class ChapterService {
  saveChapter(data, config) {
    return axios.post(CHAPTER_API_BASE_URL, data, config);
  }

  getChapters(){
    return axios.get(CHAPTER_API_BASE_URL + "s");
  }

  getChaptersByBookId(bookId){
    return axios.get(CHAPTER_API_BASE_URL + "s/" + bookId)
  }

  updateChapter(data, config){
    return axios.put(CHAPTER_API_BASE_URL, data, config);
  }

  deleteChapter(id){
    return axios.delete(CHAPTER_API_BASE_URL + "/" + id)
  }
}

export default new ChapterService();