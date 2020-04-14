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
@Table(name = "ESPECE")
public class Espece implements Serializable {

    @Id
    @SequenceGenerator(name = "SEQ_ESP", sequenceName = "SEQ_ESP", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ESP")
    @Column(name = "ID_ESPECE")
    private Integer id;

    @Column(name = "NOM")
    private String nom;

    @Column(name = "PERIODE_DEBUT")
    private Integer periodeDebut;

    @Column(name = "PERIODE_FIN")
    private Integer periodeFin;

    @Column(name = "HEURE_DEBUT")
    private Integer heureDebut;

    @Column(name = "HEURE_FIN")
    private Integer heureFin;

    @Column(name = "PRIX")
    private double prix;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_LIEU")
    private Lieu lieu;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_RARETE")
    private Rarete rarete;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_TYPE_ESPECE")
    private TypeEspece typeEspece;
}
