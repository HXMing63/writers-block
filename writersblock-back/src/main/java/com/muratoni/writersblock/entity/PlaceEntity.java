package com.muratoni.writersblock.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="my_image_id")
    private MyImageEntity img = null;
}
