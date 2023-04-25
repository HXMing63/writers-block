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

import com.muratoni.writersblock.model.Place;
import com.muratoni.writersblock.service.PlaceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class PlaceController {
    @Autowired
    private PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @PostMapping("/place")
    public Place createPlace(@RequestBody Place place){
        return placeService.createPlace(place);
    }

    @GetMapping("/place/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable String id){
        Place place = null;
        Long tId = Long.parseLong(id);
        place = placeService.getPlaceById(tId);

        return ResponseEntity.ok(place);
    }

    @GetMapping("/places")
    public List<Place> getAllPlaces(){
        return placeService.getAllPlaces();
    }

    @GetMapping("/places/{name}")
    public ResponseEntity<List<Place>> getPlacesByName(@PathVariable String name){
        List<Place> places = null;
        places = placeService.getPlacesByName(name);

        return ResponseEntity.ok(places);
    }

    @DeleteMapping("/place/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePlace(@PathVariable Long id){
        boolean isDeleted = false;
        isDeleted = placeService.deletePlace(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("isDeleted", isDeleted);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/place/{id}")
    public ResponseEntity<Place> updatePlace(@PathVariable Long id, @RequestBody Place place){
        place = placeService.updatePlace(id, place);
        
        return ResponseEntity.ok(place);
    }
}
