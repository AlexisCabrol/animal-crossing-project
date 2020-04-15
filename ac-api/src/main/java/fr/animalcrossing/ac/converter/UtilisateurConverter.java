package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.UtilisateurDTO;
import fr.animalcrossing.ac.models.Utilisateur;
import org.springframework.stereotype.Component;

@Component
public class UtilisateurConverter {

    public UtilisateurDTO toUtilisateurDTO(final Utilisateur utilisateur) {
        return UtilisateurDTO.builder()
                .identifiant(utilisateur.getIdentifiant())
                .email(utilisateur.getEmail())
                .discord(utilisateur.getDiscord())
                .codeAmiNintedo(utilisateur.getCodeAmiNintendo())
                .build();
    }
}
