package com.muratoni.writersblock.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    private long id;
    private String name;
    private String synopsis;
    private String theme;
    private MyImage cover;
    private List<Chapter> chapters;
}
