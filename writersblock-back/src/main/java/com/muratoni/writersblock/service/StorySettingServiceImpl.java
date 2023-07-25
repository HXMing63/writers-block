package com.muratoni.writersblock.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.StoryCharEntity;
import com.muratoni.writersblock.entity.StorySettingEntity;
import com.muratoni.writersblock.mapper.ChapterMapper;
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

    @Override
    public List<StorySetting> getAllStorySettings() {
        List<StorySettingEntity> storySettingEntities = storySettingRepository.findAll();
        List<StorySetting> storySettings = storySettingEntities
                .stream()
                .map(tStorySetting -> new StorySetting(
                        tStorySetting.getId(),
                        placeMapper.toDto(tStorySetting.getPlaceEntity()),
                        tStorySetting.getTime(),
                        tStorySetting.getChapters()
                                .stream()
                                .map(tChapter -> ChapterMapper.toDto(tChapter))
                                .collect(Collectors.toList())))
                .collect(Collectors.toList());

        return storySettings;
    }

    @Override
    public List<StorySetting> getStorySettingsByName(String name) {
        List<StorySettingEntity> storySettingEntities = storySettingRepository.findLikeName(name);
        List<StorySetting> storySettings = storySettingEntities
                .stream()
                .map(tStorySetting -> new StorySetting(
                        tStorySetting.getId(),
                        placeMapper.toDto(tStorySetting.getPlaceEntity()),
                        tStorySetting.getTime(),
                        tStorySetting.getChapters()
                                .stream()
                                .map(tChapter -> ChapterMapper.toDto(tChapter))
                                .collect(Collectors.toList())))
                .collect(Collectors.toList());

        return storySettings;
    }

    @Override
    public List<StorySetting> getStorySettingsExcept(List<Long> tIds) {
        List<StorySettingEntity> storySettingEntities = storySettingRepository.findAllExcept(tIds);
        List<StorySetting> storySettings = storySettingEntities
                .stream()
                .map(tStorySetting -> new StorySetting(
                        tStorySetting.getId(),
                        placeMapper.toDto(tStorySetting.getPlaceEntity()),
                        tStorySetting.getTime(),
                        tStorySetting.getChapters()
                                .stream()
                                .map(tChapter -> ChapterMapper.toDto(tChapter))
                                .collect(Collectors.toList())))
                .collect(Collectors.toList());

        return storySettings;
    }

    @Override
    public List<StorySetting> getStorySettingsByNameExcept(String name, List<Long> tIds) {
        List<StorySettingEntity> storySettingEntities = storySettingRepository.findAllLikeNameExcept(name, tIds);
        List<StorySetting> storySettings = storySettingEntities
                .stream()
                .map(tStorySetting -> new StorySetting(
                        tStorySetting.getId(),
                        placeMapper.toDto(tStorySetting.getPlaceEntity()),
                        tStorySetting.getTime(),
                        tStorySetting.getChapters()
                                .stream()
                                .map(tChapter -> ChapterMapper.toDto(tChapter))
                                .collect(Collectors.toList())))
                .collect(Collectors.toList());

        return storySettings;
    }

    @Override
    public StorySetting updateStorySetting(Long id, StorySetting storySetting) {
        StorySettingEntity storySettingEntity = storySettingRepository.findById(id).get();
        storySettingEntity.setPlaceEntity(placeMapper.toEntity(storySetting.getPlace()));
        storySettingEntity.setTime(storySetting.getTime());
        storySettingRepository.save(storySettingEntity);

        return storySetting;
    }

    @Override
    public boolean deleteStorySetting(Long id) {
        StorySettingEntity storySettingEntity = storySettingRepository.findById(id).get();
        storySettingRepository.delete(storySettingEntity);
        return true;
    }

}
