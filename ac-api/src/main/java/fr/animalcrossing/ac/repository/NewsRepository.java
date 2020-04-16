package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {
}
