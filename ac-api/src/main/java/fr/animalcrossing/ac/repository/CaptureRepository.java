package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.Capture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CaptureRepository extends JpaRepository<Capture, Integer> {

    @Query("select c.idEspece from Capture as c where c.idUtilisateur = :idUtilisateur")
    List<Integer> getListeEspecePourUnUtilisateur(@Param("idUtilisateur") Integer idUtilisateur);

    @Query("select c from Capture as c where c.idUtilisateur = :idUtilisateur and c.idEspece = :idEspece")
    Capture getCapturePourUnUtilisateurEtUneEspece(@Param("idUtilisateur") Integer idUtilisateur,
                                                   @Param("idEspece") Integer idEspece);
}
