package com.muratoni.writersblock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.PlaceEntity;

@Repository
public interface PlaceRepository extends JpaRepository<PlaceEntity, Long>{
    
}
