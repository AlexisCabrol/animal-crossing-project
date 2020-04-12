package fr.animalcrossing.ac.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Builder
@Table(name = "RARETE")
public class Rarete implements Serializable {

    @Id
    @SequenceGenerator(name = "SEQ_RARETE", sequenceName = "SEQ_RARETE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_RARETE")
    @Column(name = "ID_RARETE")
    private Integer id;

    @Column(name = "RARETE")
    private String rarete;
}
