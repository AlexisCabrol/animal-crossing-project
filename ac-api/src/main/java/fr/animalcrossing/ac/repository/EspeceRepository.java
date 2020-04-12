package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.Espece;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspeceRepository extends JpaRepository<Espece, Integer> {
}
