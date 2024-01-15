package com.muratoni.writersblock.mapper;

import org.springframework.beans.BeanUtils;

import com.muratoni.writersblock.entity.StorySettingEntity;
import com.muratoni.writersblock.model.StorySetting;

public class StorySettingMapper {
    public static StorySetting toDto(StorySettingEntity storySettingEntity){
        if (storySettingEntity == null){
            return null;
        }

        StorySetting storySetting = new StorySetting();
        BeanUtils.copyProperties(storySettingEntity, storySetting);
        storySetting.setPlace(PlaceMapper.toDto(storySettingEntity.getPlaceEntity()));

        return storySetting;
    }

    public static StorySettingEntity toEntity(StorySetting storySetting){
        if (storySetting == null){
            return null;
        }

        StorySettingEntity storySettingEntity = new StorySettingEntity();
        BeanUtils.copyProperties(storySetting, storySettingEntity);
        storySettingEntity.setPlaceEntity(PlaceMapper.toEntity(storySetting.getPlace()));

        return storySettingEntity;
    }
}
