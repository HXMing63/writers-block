package com.muratoni.writersblock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
        return chapterService.createChapter(chapter);
    }

    @GetMapping("/chapters")
    public List<Chapter> getAllChapters(){
        return chapterService.getAllChapters();
    }

    @PutMapping("/chapter")
    public Chapter updateChapter(@RequestBody Chapter chapter){
        return chapterService.updateChapter(chapter);
    }

    @DeleteMapping("/chapter/{id}")
    public boolean deleteChapter(@PathVariable Long id){
        System.out.println("--------------deleting:" + id);
        return chapterService.deleteChapter(id);
    }
}
