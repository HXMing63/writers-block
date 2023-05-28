package com.muratoni.writersblock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.muratoni.writersblock.model.StoryChar;
import com.muratoni.writersblock.service.StoryCharService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class StoryCharContoller {
    @Autowired
    private StoryCharService storyCharService;

    public StoryCharContoller(StoryCharService storyCharService) {
        this.storyCharService = storyCharService;
    }

    @PostMapping("/storychar")
    public StoryChar createStoryChar(@RequestBody StoryChar place){
        return storyCharService.createStoryChar(place);
    }

    @GetMapping("/storychars")
    public List<StoryChar> getAllStoryChars(){
        return storyCharService.getAllStoryChars();
    }
}
