package com.muratoni.writersblock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.PlaceEntity;

@Repository
public interface PlaceRepository extends JpaRepository<PlaceEntity, Long>{
    @Query(value = "SELECT * FROM PLACES P WHERE P.NAME LIKE :name%", nativeQuery = true)
    List<PlaceEntity> findLikeName(@Param("name") String name);
    
}
