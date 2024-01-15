package com.muratoni.writersblock.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Chapter {
    private long id;
    private String name;
    private String content;
    private List<StoryChar> storyChars;
    private List<StorySetting> storySettings;
}
