package com.muratoni.writersblock.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.muratoni.writersblock.model.StorySetting;
import com.muratoni.writersblock.service.StorySettingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class StorySettingController {
    @Autowired
    private StorySettingService storySettingService;

    public StorySettingController(StorySettingService storySettingService) {
        this.storySettingService = storySettingService;
    }

    @PostMapping("/storysetting")
    public StorySetting createStorySetting(@RequestBody StorySetting storySetting){        
        return storySettingService.createStorySetting(storySetting);
    }
}
