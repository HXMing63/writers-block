package com.muratoni.writersblock.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "chapters")
public class ChapterEntity {
    @Id
    @Column(name="chapter_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name = null;
    private String content = null;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "chapter_characters",
        joinColumns = {@JoinColumn(name = "chapter_id", referencedColumnName = "chapter_id")},
        inverseJoinColumns = {@JoinColumn(name = "story_char_id", referencedColumnName = "story_char_id")}
    )
    private List<StoryCharEntity> storyCharEntities = null;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "chapter_setting",
        joinColumns = {@JoinColumn(name = "chapter_id", referencedColumnName = "chapter_id")},
        inverseJoinColumns = {@JoinColumn(name = "story_setting_id", referencedColumnName = "story_setting_id")}
    )
    private List<StorySettingEntity> storySettingEntities = null;    
}
