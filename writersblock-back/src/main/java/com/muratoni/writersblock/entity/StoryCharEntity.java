package com.muratoni.writersblock.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="story_char")
public class StoryCharEntity {
    @Id
    @Column(name="story_char_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    private String charSong;
    private String img;

    @ManyToMany(mappedBy = "storyCharEntities")
    private List<ChapterEntity> chapters;
}
