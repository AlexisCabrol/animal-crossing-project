package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class EspeceDTO implements Serializable {

    private Integer id;
    private String nom;
    private Integer periodeDebut;
    private Integer periodeFin;
    private Integer heureDebut;
    private Integer heureFin;
    private double prix;
    private LieuDTO lieu;
    private TypeEspeceDTO typeEspece;
    private RareteDTO rarete;
}
