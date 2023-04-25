package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.Place;

public interface PlaceService {

    Place createPlace(Place place);

    List<Place> getAllPlaces();

    Place getPlaceById(Long id);

    List<Place> getPlacesByName(String name);

    boolean deletePlace(Long id);

    Place updatePlace(Long id, Place place);
    
}
