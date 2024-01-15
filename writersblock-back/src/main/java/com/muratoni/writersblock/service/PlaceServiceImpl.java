package com.muratoni.writersblock.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.PlaceEntity;
import com.muratoni.writersblock.mapper.MyImageMapper;
import com.muratoni.writersblock.mapper.PlaceMapper;
import com.muratoni.writersblock.model.Place;
import com.muratoni.writersblock.repository.PlaceRepository;

@Service
public class PlaceServiceImpl implements PlaceService {
    private PlaceRepository placeRepository;

    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public Place createPlace(Place place) {
        PlaceEntity placeEntity = PlaceMapper.toEntity(place);        

        placeRepository.save(placeEntity);

        return place;
    }

    @Override
    public List<Place> getAllPlaces() {
        List<PlaceEntity> placeEntities = placeRepository.findAll();
        List<Place> places = placeEntities
                .stream()
                .map(tPlace -> new Place(
                        tPlace.getId(),
                        tPlace.getName(),
                        tPlace.getDescription(),
                        MyImageMapper.toDto(tPlace.getImg())))
                .collect(Collectors.toList());
        return places;
    }

    @Override
    public Place getPlaceById(Long id) {
        PlaceEntity placeEntity = placeRepository.findById(id).get();
        Place place = new Place();
        BeanUtils.copyProperties(placeEntity, place);
        return place;
    }

    @Override
    public List<Place> getPlacesByName(String name) {
        List<PlaceEntity> placeEntities = placeRepository.findLikeName(name);
        List<Place> places = new ArrayList<Place>();

        for (PlaceEntity placeEntity : placeEntities) {
            Place place = new Place();
            BeanUtils.copyProperties(placeEntity, place);
            places.add(place);
        }

        return places;
    }

    @Override
    public Place updatePlace(Long id, Place place) {
        PlaceEntity placeEntity = placeRepository.findById(id).get();
        placeEntity.setName(place.getName());
        placeEntity.setDescription(place.getDescription());
        placeEntity.setImg(MyImageMapper.toEntity(place.getImg()));
        placeRepository.save(placeEntity);
        return place;
    }

    @Override
    public boolean deletePlace(Long id) {
        PlaceEntity placeEntity = placeRepository.findById(id).get();
        placeRepository.delete(placeEntity);
        return true;
    }

}
