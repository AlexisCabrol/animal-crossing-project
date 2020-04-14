package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.LieuDTO;
import fr.animalcrossing.ac.models.Lieu;
import org.springframework.stereotype.Component;

@Component
public class LieuConverter {

    public LieuDTO toLieuDTO(final Lieu lieu) {
        if(lieu == null) {
            return null;
        }

        return LieuDTO.builder()
                .id(lieu.getId())
                .lieu(lieu.getLieu())
                .build();
    }
}
