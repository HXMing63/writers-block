package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.Chapter;

public interface ChapterService {

    Chapter createChapter(Chapter chapter);

    Chapter createChapter(Chapter chapter, Long id);

    List<Chapter> getAllChapters();

    boolean deleteChapter(Long id);

    List<Chapter> getAllChaptersByBookId(Long bookId);

    Chapter updateChapter(Chapter chapter, Long id);
    
}
