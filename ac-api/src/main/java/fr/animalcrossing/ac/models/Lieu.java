package fr.animalcrossing.ac.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "LIEU")
public class Lieu implements Serializable {

    @Id
    @SequenceGenerator(name = "SEQ_LIEU", sequenceName = "SEQ_LIEU", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_LIEU")
    @Column(name = "ID_LIEU")
    private Integer id;

    @Column(name = "LIEU")
    private String lieu;
}
