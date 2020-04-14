package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {

    Utilisateur findByIdentifiant(String identifiant);
}
