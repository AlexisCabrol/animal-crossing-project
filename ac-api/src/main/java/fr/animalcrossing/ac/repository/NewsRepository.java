package fr.animalcrossing.ac.repository;

import fr.animalcrossing.ac.models.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {

    @Query("select n from News n order by n.datePublication desc")
    List<News> findAllNewsOrder();
}
