package fr.animalcrossing.ac.controller;

import fr.animalcrossing.ac.service.CaptureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CaptureController {

    @Autowired
    private CaptureService captureService;

    @PostMapping("/capture/add")
    public void ajouterCapture(@RequestBody Integer idEspece) {
        captureService.ajouterCapture(idEspece);
    }
}
