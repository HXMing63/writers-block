package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.Place;

public interface PlaceService {

    Place createPlace(Place place);

    List<Place> getAllPlaces();

    boolean deletePlace(Long id);

    Place getPlaceById(Long id);

    Place updatePlace(Long id, Place place);
    
}
