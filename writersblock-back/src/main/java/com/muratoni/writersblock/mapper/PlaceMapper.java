package com.muratoni.writersblock.mapper;

import org.springframework.stereotype.Component;

import com.muratoni.writersblock.entity.PlaceEntity;
import com.muratoni.writersblock.model.Place;

@Component
public class PlaceMapper {
    public static PlaceEntity toEntity(Place place) {
        if (place == null) {
            return null;
        }

        PlaceEntity placeEntity = new PlaceEntity();
        placeEntity.setId(place.getId());
        placeEntity.setName(place.getName());
        placeEntity.setDescription(place.getDescription());
        placeEntity.setImg(place.getImg());

        return placeEntity;
    }

    public static Place toDto(PlaceEntity placeEntity) {
        if (placeEntity == null) {
            return null;
        }

        Place place = new Place();
        place.setId(placeEntity.getId());
        place.setName(placeEntity.getName());
        place.setDescription(placeEntity.getDescription());
        place.setImg(placeEntity.getImg());

        return place;
    }
}
