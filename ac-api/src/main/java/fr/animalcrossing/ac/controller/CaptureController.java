package fr.animalcrossing.ac.controller;

import fr.animalcrossing.ac.service.CaptureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class CaptureController {

    @Autowired
    private CaptureService captureService;

    @PostMapping("/capture/add")
    public List<Integer> ajouterCapture(@RequestBody Integer idEspece) {
        return captureService.ajouterCapture(idEspece);
    }

    @GetMapping("/capture")
    public List<Integer> donnerListeCaptureDunUtilisateur() {
        return captureService.getListeCapture();
    }

    @PostMapping("/capture/delete")
    public List<Integer> supprimerCapture(@RequestBody Integer idEspece) {
        return captureService.supprimerCapture(idEspece);
    }
}
