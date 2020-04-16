package fr.animalcrossing.ac.controller;

import fr.animalcrossing.ac.models.Utilisateur;
import fr.animalcrossing.ac.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class LoginController {

    @Autowired
    public UtilisateurService utilisateurService;

    @Autowired
    public BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/register")
    public void inscription(@RequestBody Utilisateur utilisateur) {
        utilisateur.setMotDePasse(bCryptPasswordEncoder.encode(utilisateur.getMotDePasse()));
        utilisateurService.enregistrerUnUtilisateur(utilisateur);
    }

    @PostMapping("/profil/update")
    public Utilisateur mettreAJourInformationProfil(@RequestBody Utilisateur utilisateur) {
        if (utilisateur.getMotDePasse() != null) {
            utilisateur.setMotDePasse(bCryptPasswordEncoder.encode(utilisateur.getMotDePasse()));
        }
        return utilisateurService.mettreAJourUtilisateur(utilisateur);
    }
}
