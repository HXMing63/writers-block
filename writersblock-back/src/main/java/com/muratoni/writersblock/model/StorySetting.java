package com.muratoni.writersblock.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StorySetting {
    private long id;
    private Place place;
    private String time;
    private List<Chapter> chapters;
}
