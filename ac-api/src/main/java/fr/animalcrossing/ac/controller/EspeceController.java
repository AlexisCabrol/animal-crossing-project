package fr.animalcrossing.ac.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class EspeceController {

    @RequestMapping("/")
    public String getEspeces() {
        return "";
    }
}
