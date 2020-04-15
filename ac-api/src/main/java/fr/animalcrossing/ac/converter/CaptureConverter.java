package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.CaptureDTO;
import fr.animalcrossing.ac.models.Capture;
import org.springframework.stereotype.Component;

@Component
public class CaptureConverter {

    public CaptureConverter() {
    }

    public CaptureDTO toCaptureDTO(final Capture capture) {
        return CaptureDTO.builder()
                .id(capture.getId())
                .idEspece(capture.getIdEspece())
                .idUtilisateur(capture.getIdUtilisateur())
                .build();
    }

}
