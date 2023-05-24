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
    public StoryChar createStoryChar(@RequestBody StoryChar place){
        return storyCharService.createStoryChar(place);
    }

    @GetMapping("/storychars")
    public List<StoryChar> getAllStoryChars(){
        return storyCharService.getAllStoryChars();
    }

    @PutMapping("/storychar/{id}")
    public ResponseEntity<StoryChar> updateStoryChar(@PathVariable Long id, @RequestBody StoryChar storyChar){
        storyChar = storyCharService.updateStoryChar(id, storyChar);
        
        return ResponseEntity.ok(storyChar);
    }

    @DeleteMapping("/storychar/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePlace(@PathVariable Long id){
        boolean isDeleted = false;
        isDeleted = storyCharService.deleteStoryChar(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("isDeleted", isDeleted);

        return ResponseEntity.ok(response);
    }
}
