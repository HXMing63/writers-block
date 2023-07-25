package com.muratoni.writersblock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.muratoni.writersblock.model.Chapter;
import com.muratoni.writersblock.service.ChapterService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class ChapterController {
    @Autowired
    private ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @PostMapping("/chapter")
    public Chapter createPlace(@RequestBody Chapter chapter){
        // System.out.println(chapter.getStoryChars());
        // System.out.println(chapter.getStorySettings());
        return chapterService.createChapter(chapter);
    }
}
