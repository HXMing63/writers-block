package com.muratoni.writersblock.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.StorySettingEntity;
import com.muratoni.writersblock.mapper.PlaceMapper;
import com.muratoni.writersblock.model.StorySetting;
import com.muratoni.writersblock.repository.StorySettingRepository;

@Service
public class StorySettingServiceImpl implements StorySettingService {
    private StorySettingRepository storySettingRepository;
    private PlaceMapper placeMapper;

    public StorySettingServiceImpl(StorySettingRepository storySettingRepository, PlaceMapper placeMapper) {
        this.storySettingRepository = storySettingRepository;
        this.placeMapper = placeMapper;
    }

    @Override
    public StorySetting createStorySetting(StorySetting storySetting) {
        StorySettingEntity storySettingEntity = new StorySettingEntity();
        BeanUtils.copyProperties(storySetting, storySettingEntity);
        storySettingEntity.setPlaceEntity(placeMapper.toEntity(storySetting.getPlace()));

        storySettingRepository.save(storySettingEntity);
        return storySetting;
    }

}
