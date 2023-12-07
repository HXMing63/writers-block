package com.muratoni.writersblock.mapper;

import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;

import com.muratoni.writersblock.entity.ChapterEntity;
import com.muratoni.writersblock.model.Chapter;

public class ChapterMapper {
    public static Chapter toDto(ChapterEntity chapterEntity) {
        if (chapterEntity == null) {
            return null;
        }

        Chapter chapter = new Chapter();
        BeanUtils.copyProperties(chapterEntity, chapter);

        chapter.setStoryChars(chapterEntity.getStoryCharEntities()
                .stream()
                .map(tStoryChar -> StoryCharMapper.toDto(tStoryChar))
                .collect(Collectors.toList()));
        chapter.setStorySettings(chapterEntity.getStorySettingEntities()
                .stream()
                .map(tStorySetting -> StorySettingMapper.toDto(tStorySetting))
                .collect(Collectors.toList()));  

        return chapter;
    }

    public static ChapterEntity toEntity(Chapter chapter) {
        if (chapter == null) {
            return null;
        }

        ChapterEntity chapterEntity = new ChapterEntity();
        BeanUtils.copyProperties(chapter, chapterEntity);

        chapterEntity.setStoryCharEntities(chapter.getStoryChars()
                .stream()
                .map(tStoryChar -> StoryCharMapper.toEntity(tStoryChar))
                .collect(Collectors.toList()));  
        chapterEntity.setStorySettingEntities(chapter.getStorySettings()
                .stream()
                .map(tStorySetting -> StorySettingMapper.toEntity(tStorySetting))
                .collect(Collectors.toList()));                  

        return chapterEntity;
    }
}
