package com.muratoni.writersblock.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoryChar {
    private long id;
    private String name;
    private String description;
    private String charSong;
    private String img;
    private List<Chapter> chapters;    
}
