package fr.animalcrossing.ac.security;

import fr.animalcrossing.ac.models.Utilisateur;
import fr.animalcrossing.ac.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class ConnectedUserDetailsService implements UserDetailsService {

    private final UtilisateurRepository utilisateurRepository;

    @Autowired
    public ConnectedUserDetailsService(final UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String identifiant) throws UsernameNotFoundException {
        Utilisateur utilisateurCourant = utilisateurRepository.findByIdentifiant(identifiant);
        if (utilisateurCourant == null) {
            throw new UsernameNotFoundException(identifiant);
        }
        return new User(utilisateurCourant.getIdentifiant(), utilisateurCourant.getMotDePasse(), Collections.emptyList());
    }
}
