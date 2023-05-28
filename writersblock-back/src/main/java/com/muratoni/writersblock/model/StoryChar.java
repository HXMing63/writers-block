package com.muratoni.writersblock.model;

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

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getCharSong() {
        return charSong;
    }
    public void setCharSong(String charSong) {
        this.charSong = charSong;
    }
    public String getImg(){
        return this.img;
    }
    public void setImg(String img){
        this.img = img;
    }
    
}
