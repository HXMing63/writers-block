package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.StoryChar;

public interface StoryCharService {

    StoryChar createStoryChar(StoryChar place);

    List<StoryChar> getAllStoryChars();

    StoryChar updateStoryChar(Long id, StoryChar storyChar);

    boolean deleteStoryChar(Long id);
    
}
