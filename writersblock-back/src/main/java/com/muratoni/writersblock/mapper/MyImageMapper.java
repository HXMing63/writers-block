package com.muratoni.writersblock.mapper;

import org.springframework.beans.BeanUtils;

import com.muratoni.writersblock.entity.MyImageEntity;
import com.muratoni.writersblock.model.MyImage;

public class MyImageMapper {
    public static MyImage toDto(MyImageEntity imageEntity){
        if (imageEntity == null){
            return null;
        }

        MyImage img = new MyImage();
        BeanUtils.copyProperties(imageEntity, img);

        return img;
    }

    public static MyImageEntity toEntity(MyImage image){
        if (image == null){
            return null;
        }

        MyImageEntity imageEntity = new MyImageEntity();
        BeanUtils.copyProperties(image, imageEntity);

        return imageEntity;
    }
}
