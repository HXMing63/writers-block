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

import com.muratoni.writersblock.model.StoryChar;
import com.muratoni.writersblock.service.StoryCharService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class StoryCharController {
    @Autowired
    private StoryCharService storyCharService;

    public StoryCharController(StoryCharService storyCharService) {
        this.storyCharService = storyCharService;
    }

    @PostMapping("/storychar")
    public StoryChar createStoryChar(@RequestBody StoryChar storyChar){
        return storyCharService.createStoryChar(storyChar);
    }

    @GetMapping("/storychars")
    public List<StoryChar> getAllStoryChars(){
        return storyCharService.getAllStoryChars();
    }

    @GetMapping("/storychars/{name}")
    public List<StoryChar> getStoryCharsByName(@PathVariable("name") String name){
        return storyCharService.getStoryCharsByName(name);
    }

    @GetMapping("/storychars/except/{ids}")
    public List<StoryChar> getStoryCharsExcept(@PathVariable("ids") String ids){
        List<Long> tIds = Arrays.stream(ids.split(",")).map(Long::parseLong).collect(Collectors.toList());
        return storyCharService.getStoryCharsExcept(tIds);
    }

    @GetMapping("/storychars/name_except")
    public List<StoryChar> getStoryCharsByNameExcept(@RequestParam("name") String name, @RequestParam("ids") String ids){
        List<Long> tIds = null;

        if (ids.length() == 0){
            return this.getStoryCharsByName(name);
        } else {
            tIds = Arrays.stream(ids.split(",")).map(Long::parseLong).collect(Collectors.toList());
        }

        return storyCharService.getStoryCharsByNameExcept(name, tIds);
    }

    @PutMapping("/storychar/{id}")
    public ResponseEntity<StoryChar> updateStoryChar(@PathVariable Long id, @RequestBody StoryChar storyChar){
        storyChar = storyCharService.updateStoryChar(id, storyChar);
        
        return ResponseEntity.ok(storyChar);
    }

    @DeleteMapping("/storychar/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStoryChar(@PathVariable Long id){
        boolean isDeleted = false;
        isDeleted = storyCharService.deleteStoryChar(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("isDeleted", isDeleted);

        return ResponseEntity.ok(response);
    }
}
