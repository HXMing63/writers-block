package com.muratoni.writersblock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.StoryCharEntity;

@Repository
public interface StoryCharRepository extends JpaRepository<StoryCharEntity, Long>{
    final String TABLE_NAME = "STORY_CHAR";

    @Query(value = "SELECT * FROM " + TABLE_NAME + " c WHERE c.name LIKE :name%", nativeQuery = true)
    List<StoryCharEntity> findLikeName(@Param("name") String name);

    @Query(value="SELECT * FROM " + TABLE_NAME + " c WHERE c.story_char_id NOT IN :ids", nativeQuery=true)
    List<StoryCharEntity> findAllExceptArgs(@Param("ids") List<Long> ids);
    
    @Query(value="SELECT * FROM " + TABLE_NAME + " c WHERE c.name LIKE :name% AND c.story_char_id NOT IN :ids", nativeQuery=true)
    List<StoryCharEntity> findAllLikeNameExcept(@Param("name") String name, @Param("ids") List<Long> ids);
}
