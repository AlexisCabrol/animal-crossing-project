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

    public News toNews(final NewsDTO newsDTO) {
        if (newsDTO == null) {
            return null;
        }

        return News.builder()
                .titre(newsDTO.getTitre())
                .description(newsDTO.getDescription())
                .contenu(newsDTO.getContenu())
                .datePublication(newsDTO.getDatePublication())
                .build();
    }
}
