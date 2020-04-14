package fr.animalcrossing.ac.controller;

import fr.animalcrossing.ac.dtos.EspeceDTO;
import fr.animalcrossing.ac.service.EspeceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class EspeceController {

    @Autowired
    private EspeceService especeService;

    @GetMapping("/especes")
    public List<EspeceDTO> getEspeces() {
        return especeService.selectionnerToutesLesEspeces();
    }

    @GetMapping("/poissons")
    public List<EspeceDTO> getPoissons() {
        return especeService.selectionnerUnTypeEspece(1);
    }

    @GetMapping("/insectes")
    public List<EspeceDTO> getInsectes() {
        return especeService.selectionnerUnTypeEspece(2);
    }
}
