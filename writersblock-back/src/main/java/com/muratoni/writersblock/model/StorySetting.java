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

    public long getId(){
        return id;
    }
    public void setId(long id){
        this.id = id;
    }
    public Place getPlace() {
        return place;
    }
    public void setPlace(Place place) {
        this.place = place;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
}
