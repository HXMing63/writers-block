package com.muratoni.writersblock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.StorySettingEntity;

@Repository
public interface StorySettingRepository extends JpaRepository<StorySettingEntity, Long>{
    final String TABLE_NAME = "STORY_SETTING";

    @Query(value = "SELECT * FROM " + TABLE_NAME + " s WHERE s.place_id IN (SELECT place_id FROM PLACES p WHERE p.name LIKE :name%)", nativeQuery = true)
    List<StorySettingEntity> findLikeName(@Param("name") String name);

    @Query(value="SELECT * FROM " + TABLE_NAME + " s WHERE s.story_setting_id NOT IN :ids", nativeQuery=true)
    List<StorySettingEntity> findAllExcept(@Param("ids") List<Long> ids);
    
    @Query(value="SELECT * FROM " + TABLE_NAME + " s WHERE s.story_setting_id NOT IN :ids AND s.place_id IN (SELECT place_id FROM PLACES p WHERE p.name LIKE :name%)", nativeQuery=true)
    List<StorySettingEntity> findAllLikeNameExcept(@Param("name") String name, @Param("ids") List<Long> ids);
}
