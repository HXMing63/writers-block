package com.muratoni.writersblock.service;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.StoryCharEntity;
import com.muratoni.writersblock.model.StoryChar;
import com.muratoni.writersblock.repository.StoryCharRepository;

@Service
public class StoryCharServiceImpl implements StoryCharService{
    private StoryCharRepository storyCharRepository;

    public StoryCharServiceImpl(StoryCharRepository storyCharRepository){
        this.storyCharRepository = storyCharRepository;
    }

    @Override
    public StoryChar createStoryChar(StoryChar storyChar) {
        StoryCharEntity storyCharEntity = new StoryCharEntity();
        BeanUtils.copyProperties(storyChar, storyCharEntity);

        storyCharRepository.save(storyCharEntity);

        return storyChar;
    }
}
