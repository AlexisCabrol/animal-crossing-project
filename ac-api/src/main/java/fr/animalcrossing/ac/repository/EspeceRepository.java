package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.Espece;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EspeceRepository extends JpaRepository<Espece, Integer> {

    /**
     * Méthode permettant de sélectionner une liste d'espèce à partir de son codeTypeEspece
     *
     * @param typeEspece le code du type espèce
     * @return une liste d'une espèce
     */
    @Query("select p from Espece as p where p.typeEspece.id = :typeEspece")
    List<Espece> selectionnerUnTypeEspece(@Param("typeEspece") Integer typeEspece);
}
