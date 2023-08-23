package com.muratoni.writersblock.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyImage {
    private String name;
    private byte[] data;
}
