package fr.animalcrossing.ac.service;

import fr.animalcrossing.ac.converter.NewsConverter;
import fr.animalcrossing.ac.dtos.NewsDTO;
import fr.animalcrossing.ac.models.News;
import fr.animalcrossing.ac.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {

    private final NewsRepository newsRepository;
    private final NewsConverter newsConverter;

    @Autowired
    public NewsService(final NewsConverter newsConverter,
                       final NewsRepository newsRepository) {
        this.newsConverter = newsConverter;
        this.newsRepository = newsRepository;
    }

    public List<NewsDTO> getToutesLesNews() {
        return newsRepository.findAllNewsOrder()
                .stream()
                .map(newsConverter::toNewsDTO)
                .collect(Collectors.toList());
    }

    public void posterUneNews(final NewsDTO newsDTO) {
        News newsAPoster = newsConverter.toNews(newsDTO);
        if (newsAPoster != null) {
            newsAPoster.setDatePublication(LocalDate.now());
            newsRepository.save(newsAPoster);
        }
    }
}
