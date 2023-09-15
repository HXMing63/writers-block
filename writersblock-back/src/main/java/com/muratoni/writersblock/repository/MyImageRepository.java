package com.muratoni.writersblock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.MyImageEntity;

@Repository
public interface MyImageRepository extends JpaRepository<MyImageEntity, Long>{
    
}
