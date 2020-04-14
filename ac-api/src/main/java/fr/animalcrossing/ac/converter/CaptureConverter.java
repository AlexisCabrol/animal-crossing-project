package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.CaptureDTO;
import fr.animalcrossing.ac.models.Capture;
import org.springframework.stereotype.Component;

@Component
public class CaptureConverter {

    private final EspeceConverter especeConverter;

    public CaptureConverter(final EspeceConverter especeConverter) {
        this.especeConverter = especeConverter;
    }

    public CaptureDTO toCaptureDTO(final Capture capture) {
        return CaptureDTO.builder()
                .id(capture.getId())
                .espece(especeConverter.toEspeceDTO(capture.getEspece()))
                .idUtilisateur(capture.getUtilisateur().getId())
                .build();
    }

}
