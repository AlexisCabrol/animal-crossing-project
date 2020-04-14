package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.Capture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaptureRepository extends JpaRepository<Capture, Integer> {
}
