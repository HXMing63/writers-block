package com.muratoni.writersblock.service;

import java.util.List;

import com.muratoni.writersblock.model.StoryChar;

public interface StoryCharService {

    StoryChar createStoryChar(StoryChar place);

    List<StoryChar> getAllStoryChars();

    List<StoryChar> getStoryCharsByName(String name);

    List<StoryChar> getStoryCharsExcept(List<Long> ids);

    List<StoryChar> getStoryCharsByNameExcept(String name, List<Long> tIds);

    StoryChar updateStoryChar(Long id, StoryChar storyChar);

    boolean deleteStoryChar(Long id);
    
}
