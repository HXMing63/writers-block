package com.muratoni.writersblock.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "places")
public class PlaceEntity {
    @Id
    @Column(name="place_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name = null;
    private String description = null;
    private String img = null;
}
