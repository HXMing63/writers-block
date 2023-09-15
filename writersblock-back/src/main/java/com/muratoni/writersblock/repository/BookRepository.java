package com.muratoni.writersblock.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.muratoni.writersblock.entity.BookEntity;

@Repository
public interface BookRepository extends JpaRepository<BookEntity, Long>{
    
}
