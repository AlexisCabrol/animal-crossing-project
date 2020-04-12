package fr.animalcrossing.ac.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Builder
@Table(name = "TYPE_ESPECE")
public class TypeEspece implements Serializable {

    @Id
    @SequenceGenerator(name = "SEQ_TYPE_ESP", sequenceName = "SEQ_TYPE_ESP", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TYPE_ESP")
    @Column(name = "ID_TYPE_ESPECE")
    private Integer id;

    @Column(name = "TYPE")
    private String type;
}
