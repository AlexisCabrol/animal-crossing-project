package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class EspeceDTO implements Serializable {

    private static final long serialVersionUID = -1700548773785107930L;
    private Integer id;
    private String nom;
    private Integer periodeDebutNord;
    private Integer periodeFinNord;
    private Integer periodeDebutSud;
    private Integer periodeFinSud;
    private Integer heureDebut;
    private Integer heureFin;
    private double prix;
    private LieuDTO lieu;
    private TypeEspeceDTO typeEspece;
    private RareteDTO rarete;
}
