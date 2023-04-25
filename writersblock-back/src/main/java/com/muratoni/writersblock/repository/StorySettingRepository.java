package com.muratoni.writersblock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.StorySettingEntity;

@Repository
public interface StorySettingRepository extends JpaRepository<StorySettingEntity, Long>{
    
}
