package com.muratoni.writersblock.mapper;

import org.springframework.beans.BeanUtils;

import com.muratoni.writersblock.entity.ChapterEntity;
import com.muratoni.writersblock.model.Chapter;

public class ChapterMapper {
    public static Chapter toDto(ChapterEntity chapterEntity){
        if (chapterEntity == null){
            return null;
        }

        Chapter chapter = new Chapter();
        BeanUtils.copyProperties(chapterEntity, chapter);

        return chapter;
    }

    public static ChapterEntity toEntity(Chapter chapter){
        if (chapter == null){
            return null;
        }

        ChapterEntity chapterEntity = new ChapterEntity();
        BeanUtils.copyProperties(chapter, chapterEntity);

        return chapterEntity;
    }
}
