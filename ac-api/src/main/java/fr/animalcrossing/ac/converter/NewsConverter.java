package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.NewsDTO;
import fr.animalcrossing.ac.models.News;
import org.springframework.stereotype.Component;

@Component
public class NewsConverter {

    public NewsDTO toNewsDTO(final News news) {
        if (news == null) {
            return null;
        }

        return NewsDTO.builder()
                .id(news.getId())
                .titre(news.getTitre())
                .description(news.getDescription())
                .contenu(news.getContenu())
                .datePublication(news.getDatePublication())
                .build();
    }
}
