package com.muratoni.writersblock.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.muratoni.writersblock.entity.ChapterEntity;
import com.muratoni.writersblock.entity.StoryCharEntity;
import com.muratoni.writersblock.entity.StorySettingEntity;
import com.muratoni.writersblock.mapper.ChapterMapper;
import com.muratoni.writersblock.mapper.StoryCharMapper;
import com.muratoni.writersblock.mapper.StorySettingMapper;
import com.muratoni.writersblock.model.Chapter;
import com.muratoni.writersblock.repository.ChapterRepository;

@Service
public class ChapterServiceImpl implements ChapterService {
    private ChapterRepository chapterRepository;

    public ChapterServiceImpl(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    @Override
    public Chapter createChapter(Chapter chapter) {
        ChapterEntity chapterEntity = new ChapterEntity();
        BeanUtils.copyProperties(chapter, chapterEntity);

        List<StoryCharEntity> storyCharEntities = chapter.getStoryChars()
                .stream()
                .map(tStoryChar -> StoryCharMapper.toEntity(tStoryChar))
                .collect(Collectors.toList());

        chapterEntity.setStoryCharEntities(storyCharEntities);

        List<StorySettingEntity> storySettingEntities = chapter.getStorySettings()
                .stream()
                .map(tStorySetting -> StorySettingMapper.toEntity(tStorySetting))
                .collect(Collectors.toList());

        chapterEntity.setStorySettingEntities(storySettingEntities);

        ChapterEntity tRes = chapterRepository.save(chapterEntity);

        return ChapterMapper.toDto(tRes);
    }

}
