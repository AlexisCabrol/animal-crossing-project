package fr.animalcrossing.ac.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "NEWS")
public class News implements Serializable {

    private static final long serialVersionUID = 5240068572858074813L;
    @Id
    @SequenceGenerator(name = "SEQ_NEWS", sequenceName = "SEQ_NEWS", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_NEWS")
    @Column(name = "ID_NEWS")
    private Integer id;

    @Column(name = "TITRE")
    private String titre;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "CONTENU")
    private String contenu;

    @Column(name = "DT_PUBLICATION")
    private LocalDate datePublication;
}
