package com.muratoni.writersblock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.ChapterEntity;

@Repository
public interface ChapterRepository extends JpaRepository<ChapterEntity, Long> {
}
