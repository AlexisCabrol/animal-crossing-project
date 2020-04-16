package fr.animalcrossing.ac.service;

import fr.animalcrossing.ac.models.Utilisateur;
import fr.animalcrossing.ac.repository.UtilisateurRepository;
import fr.animalcrossing.ac.security.ConnectedUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {

    private final ConnectedUserDetailsService connectedUserDetailsService;
    private final UtilisateurRepository utilisateurRepository;

    @Autowired
    public UtilisateurService(final UtilisateurRepository utilisateurRepository,
                              final ConnectedUserDetailsService connectedUserDetailsService) {
        this.utilisateurRepository = utilisateurRepository;
        this.connectedUserDetailsService = connectedUserDetailsService;
    }

    public void enregistrerUnUtilisateur(final Utilisateur utilisateur) {
        utilisateurRepository.save(utilisateur);
    }

    public Utilisateur mettreAJourUtilisateur(final Utilisateur utilisateur) {
        Utilisateur utilisateurCourant = connectedUserDetailsService.getUtilisateurCourant();
        if (utilisateur.getMotDePasse() != null) {
            utilisateurCourant.setMotDePasse(utilisateur.getMotDePasse());
        }
        if ((utilisateur.getDiscord() == null && utilisateurCourant.getDiscord() == null) ||
                (utilisateur.getDiscord() != null && !utilisateur.getDiscord().equals(utilisateurCourant.getDiscord()))) {
            utilisateurCourant.setDiscord(utilisateur.getDiscord());
        }
        if ((utilisateur.getCodeAmiNintendo() == null && utilisateurCourant.getCodeAmiNintendo() == null) ||
                (utilisateur.getCodeAmiNintendo() != null && !utilisateur.getCodeAmiNintendo().equals(utilisateurCourant.getCodeAmiNintendo()))) {
            utilisateurCourant.setCodeAmiNintendo(utilisateur.getCodeAmiNintendo());
        }
        utilisateurRepository.save(utilisateurCourant);
        utilisateurCourant.setMotDePasse(null);
        return utilisateurCourant;
    }
}
