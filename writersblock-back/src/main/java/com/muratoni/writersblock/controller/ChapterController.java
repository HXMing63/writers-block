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
import org.springframework.web.bind.annotation.RequestParam;
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
    public Chapter createChapter(@RequestBody Chapter chapter, @RequestParam Long id){
        return chapterService.createChapter(chapter, id);
    }

    @GetMapping("/chapters")
    public List<Chapter> getAllChapters(){
        return chapterService.getAllChapters();
    }

    @GetMapping("/chapters/{id}")
    public List<Chapter> getAllChaptersByBookId(@PathVariable Long id){
        return chapterService.getAllChaptersByBookId(id);
    }

    @PutMapping("/chapter")
    public Chapter updateChapter(@RequestBody Chapter chapter, @RequestParam Long id){
        return chapterService.updateChapter(chapter, id);
    }

    @DeleteMapping("/chapter/{id}")
    public boolean deleteChapter(@PathVariable Long id){
        return chapterService.deleteChapter(id);
    }
}
