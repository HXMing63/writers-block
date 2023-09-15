package com.muratoni.writersblock.service;

import org.springframework.stereotype.Service;

import com.muratoni.writersblock.entity.MyImageEntity;
import com.muratoni.writersblock.mapper.MyImageMapper;
import com.muratoni.writersblock.model.MyImage;
import com.muratoni.writersblock.repository.MyImageRepository;

@Service
public class MyImageServiceImpl implements MyImageService{
    private MyImageRepository myImageRepository;

    public MyImageServiceImpl(MyImageRepository myImageRepository){
        this.myImageRepository = myImageRepository;
    }

    @Override
    public MyImage createMyImage(MyImage image) {
        MyImageEntity imageEntity = MyImageMapper.toEntity(image);

        MyImageEntity res = myImageRepository.save(imageEntity);

        return MyImageMapper.toDto(res);
    }
    
}
