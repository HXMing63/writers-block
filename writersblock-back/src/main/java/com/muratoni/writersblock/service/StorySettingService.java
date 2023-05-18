package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.StorySetting;

public interface StorySettingService {

    StorySetting createStorySetting(StorySetting storySetting);

    List<StorySetting> getAllStorySettings();

    StorySetting updateStorySetting(Long id, StorySetting storySetting);
    
}
