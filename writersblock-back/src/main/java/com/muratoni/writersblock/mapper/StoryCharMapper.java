package com.muratoni.writersblock.mapper;

import org.springframework.beans.BeanUtils;

import com.muratoni.writersblock.entity.StoryCharEntity;
import com.muratoni.writersblock.model.StoryChar;

public class StoryCharMapper {
    public static StoryChar toDto(StoryCharEntity storyCharEntity){
        if (storyCharEntity == null){
            return null;
        }

        StoryChar storyChar = new StoryChar();
        BeanUtils.copyProperties(storyCharEntity, storyChar);

        if (storyCharEntity.getImg() != null){
            storyChar.setImg(MyImageMapper.toDto(storyCharEntity.getImg()));
        }

        return storyChar;
    }

    public static StoryCharEntity toEntity(StoryChar storyChar){
        if (storyChar == null){
            return null;
        }

        StoryCharEntity storyCharEntity = new StoryCharEntity();
        BeanUtils.copyProperties(storyChar, storyCharEntity);

        if (storyChar.getImg() != null){
            storyCharEntity.setImg(MyImageMapper.toEntity(storyChar.getImg()));
        }

        return storyCharEntity;
    }
}
