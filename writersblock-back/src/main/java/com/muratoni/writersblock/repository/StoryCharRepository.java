package com.muratoni.writersblock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.StoryCharEntity;

@Repository
public interface StoryCharRepository extends JpaRepository<StoryCharEntity, Long>{
    
}
