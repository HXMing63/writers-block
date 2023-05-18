package com.muratoni.writersblock.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/storysettings")
    public List<StorySetting> getAllStorySettings(){        
        return storySettingService.getAllStorySettings();
    }

    @PutMapping("/storysetting/{id}")
    public ResponseEntity<StorySetting> updatePlace(@PathVariable Long id, @RequestBody StorySetting storySetting){
        storySetting = storySettingService.updateStorySetting(id, storySetting);
        
        return ResponseEntity.ok(storySetting);
    }

    @DeleteMapping("/storysetting/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStorySetting(@PathVariable Long id){
        boolean isDeleted = false;
        isDeleted = storySettingService.deleteStorySetting(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("isDeleted", isDeleted);

        return ResponseEntity.ok(response);
    }
}
