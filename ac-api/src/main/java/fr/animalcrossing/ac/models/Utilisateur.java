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
@Table(name = "UTILISATEUR")
public class Utilisateur implements Serializable {
    private static final long serialVersionUID = 2397202275968429211L;

    @Id
    @SequenceGenerator(name = "SEQ_UTILISATEUR", sequenceName = "SEQ_UTILISATEUR", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_UTILISATEUR")
    @Column(name = "ID_UTILISATEUR")
    private Integer id;

    @Column(name = "IDENTIFIANT")
    private String identifiant;

    @Column(name = "MOTDEPASSE")
    private String motDePasse;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "DISCORD")
    private String discord;

    @Column(name = "CODE_AMI_NINTENDO")
    private String codeAmiNintendo;

}
