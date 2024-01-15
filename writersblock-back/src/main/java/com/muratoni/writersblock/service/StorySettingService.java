package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.StorySetting;

public interface StorySettingService {

    StorySetting createStorySetting(StorySetting storySetting);

    List<StorySetting> getAllStorySettings();

    StorySetting updateStorySetting(Long id, StorySetting storySetting);

    boolean deleteStorySetting(Long id);

    List<StorySetting> getStorySettingsByName(String name);

    List<StorySetting> getStorySettingsExcept(List<Long> tIds);

    List<StorySetting> getStorySettingsByNameExcept(String name, List<Long> tIds);
    
}
