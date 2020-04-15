package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.UtilisateurDTO;
import fr.animalcrossing.ac.models.Utilisateur;
import org.springframework.stereotype.Component;

@Component
public class UtilisateurConverter {

    public UtilisateurDTO toUtilisateurDTO(final Utilisateur utilisateur, final String tokenJWT) {
        UtilisateurDTO utilisateurDTO = toUtilisateurDTO(utilisateur);
        utilisateurDTO.setTokenJWT(tokenJWT);
        return utilisateurDTO;
    }

    public UtilisateurDTO toUtilisateurDTO(final Utilisateur utilisateur) {
        return UtilisateurDTO.builder()
                .identifiant(utilisateur.getIdentifiant())
                .email(utilisateur.getEmail())
                .discord(utilisateur.getDiscord())
                .codeAmiNintendo(utilisateur.getCodeAmiNintendo())
                .build();
    }
}
