package com.muratoni.writersblock.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "books")
public class BookEntity {
    @Id
    @Column(name = "book_id")
    private long id;

    private String name;
    private String synopsis;
    private String theme;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "my_image_id")
    private MyImageEntity cover;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "bookEntity")
    private List<ChapterEntity> chapterEntities;
}
