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
@Table(name = "CAPTURE")
public class Capture implements Serializable {

    private static final long serialVersionUID = -8684102874672647299L;
    @Id
    @SequenceGenerator(name = "SEQ_CAPTURE", sequenceName = "SEQ_CAPTURE", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_CAPTURE")
    @Column(name = "ID_CAPTURE")
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_ESPECE")
    private Espece espece;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_UTILISATEUR")
    private Utilisateur utilisateur;
}
