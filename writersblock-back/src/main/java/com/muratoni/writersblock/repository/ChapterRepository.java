package com.muratoni.writersblock.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.ChapterEntity;

@Repository
public interface ChapterRepository extends JpaRepository<ChapterEntity, Long> {
    @Query(value = "SELECT DISTINCT c FROM ChapterEntity c WHERE c.bookEntity.id = :bookId")
    public List<ChapterEntity> findByBookId(@Param("bookId") Long bookId);
}
