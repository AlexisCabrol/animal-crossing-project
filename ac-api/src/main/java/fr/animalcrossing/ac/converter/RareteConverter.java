package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.LieuDTO;
import fr.animalcrossing.ac.dtos.RareteDTO;
import fr.animalcrossing.ac.models.Lieu;
import fr.animalcrossing.ac.models.Rarete;
import org.springframework.stereotype.Component;

@Component
public class RareteConverter {

    public RareteDTO toRareteDTO(final Rarete rarete) {
        if(rarete == null) {
            return null;
        }

        return RareteDTO.builder()
                .id(rarete.getId())
                .rarete(rarete.getRarete())
                .build();
    }
}
