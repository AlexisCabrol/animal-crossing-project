package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class UtilisateurDTO implements Serializable {

    private static final long serialVersionUID = 4395489366057116078L;
    private String identifiant;
    private String email;
    private String discord;
    private String codeAmiNintedo;
}
