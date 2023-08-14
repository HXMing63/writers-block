package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.Chapter;

public interface ChapterService {

    Chapter createChapter(Chapter chapter);

    List<Chapter> getAllChapters();

    Chapter updateChapter(Chapter chapter);

    boolean deleteChapter(Long id);
    
}
