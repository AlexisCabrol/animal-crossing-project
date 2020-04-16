package fr.animalcrossing.ac.controller;

import fr.animalcrossing.ac.dtos.NewsDTO;
import fr.animalcrossing.ac.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping("/news")
    public List<NewsDTO> getToutesLesNews() {
        return newsService.getToutesLesNews();
    }
}
