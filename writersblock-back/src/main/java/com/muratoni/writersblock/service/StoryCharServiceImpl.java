package com.muratoni.writersblock.service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<StoryChar> getAllStoryChars() {
        List<StoryCharEntity> storyCharEntities = storyCharRepository.findAll();
        List<StoryChar> storyChars = storyCharEntities
                .stream()
                .map(tStoryChar -> new StoryChar(
                    tStoryChar.getId(),
                    tStoryChar.getName(),
                    tStoryChar.getDescription(),
                    tStoryChar.getCharSong(),
                    tStoryChar.getImg()))
                .collect(Collectors.toList());
        return storyChars;
    }

    @Override
    public StoryChar updateStoryChar(Long id, StoryChar storyChar) {
        StoryCharEntity storyCharEntity = storyCharRepository.findById(id).get();
        storyCharEntity.setName(storyChar.getName());
        storyCharEntity.setDescription(storyChar.getDescription());
        storyCharEntity.setImg(storyChar.getImg());
        storyCharEntity.setCharSong(storyChar.getCharSong());
        storyCharRepository.save(storyCharEntity);
        return storyChar;
    }
}
