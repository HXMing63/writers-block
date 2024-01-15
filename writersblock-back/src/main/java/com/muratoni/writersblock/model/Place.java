package com.muratoni.writersblock.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Place {
    private long id;
    private String name;
    private String description;
    private MyImage img;
}
