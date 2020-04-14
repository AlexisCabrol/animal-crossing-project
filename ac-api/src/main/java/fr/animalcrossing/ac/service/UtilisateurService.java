package fr.animalcrossing.ac.service;

import fr.animalcrossing.ac.models.Utilisateur;
import fr.animalcrossing.ac.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;

    @Autowired
    public UtilisateurService(final UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    public void enregistrerUnUtilisateur(final Utilisateur utilisateur) {
        utilisateurRepository.save(utilisateur);
    }
}
