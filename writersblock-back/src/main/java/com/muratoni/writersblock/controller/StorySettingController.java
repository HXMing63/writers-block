package com.muratoni.writersblock.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping("/storysettings/{name}")
    public List<StorySetting> getStorySettingsByName(@PathVariable("name") String name){
        return storySettingService.getStorySettingsByName(name);
    }

    @GetMapping("/storysettings/except/{ids}")
    public List<StorySetting> getStorySettingsExcept(@PathVariable("ids") String ids){
        List<Long> tIds = Arrays.stream(ids.split(",")).map(Long::parseLong).collect(Collectors.toList());
        return storySettingService.getStorySettingsExcept(tIds);
    }

    @GetMapping("/storysettings/name_except")
    public List<StorySetting> getStorySettingsByNameExcept(@RequestParam("name") String name, @RequestParam("ids") String ids){
        List<Long> tIds = null;

        if (ids.length() == 0){
            return this.getStorySettingsByName(name);
        } else {
            tIds = Arrays.stream(ids.split(",")).map(Long::parseLong).collect(Collectors.toList());
        }

        return storySettingService.getStorySettingsByNameExcept(name, tIds);
    }

    @PutMapping("/storysetting/{id}")
    public ResponseEntity<StorySetting> updateStorySetting(@PathVariable Long id, @RequestBody StorySetting storySetting){
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
