package fr.animalcrossing.ac.controller;

import fr.animalcrossing.ac.models.Utilisateur;
import fr.animalcrossing.ac.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class LoginController {

    @Autowired
    public UtilisateurService utilisateurService;

    @PostMapping("/register")
    public void inscription(@RequestBody Utilisateur utilisateur) {
        utilisateurService.enregistrerUnUtilisateur(utilisateur);
    }
}
