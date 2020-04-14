package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.TypeEspeceDTO;
import fr.animalcrossing.ac.models.TypeEspece;
import org.springframework.stereotype.Component;

@Component
public class TypeEspeceConverter {

    public TypeEspeceDTO toTypeEspeceDTO(final TypeEspece typeEspece) {
        if(typeEspece == null) {
            return null;
        }

        return TypeEspeceDTO.builder()
                .id(typeEspece.getId())
                .type(typeEspece.getType())
                .build();
    }
}
