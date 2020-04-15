package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.EspeceDTO;
import fr.animalcrossing.ac.models.Espece;
import org.springframework.stereotype.Component;

@Component
public class EspeceConverter {

    private final LieuConverter lieuConverter;
    private final TypeEspeceConverter typeEspeceConverter;
    private final RareteConverter rareteConverter;

    public EspeceConverter(final LieuConverter lieuConverter,
                           final TypeEspeceConverter typeEspeceConverter,
                           final RareteConverter rareteConverter) {
        this.lieuConverter = lieuConverter;
        this.typeEspeceConverter = typeEspeceConverter;
        this.rareteConverter = rareteConverter;
    }

    public EspeceDTO toEspeceDTO(final Espece espece) {
        return EspeceDTO.builder()
                .id(espece.getId())
                .nom(espece.getNom())
                .heureDebut(espece.getHeureDebut())
                .heureFin(espece.getHeureFin())
                .periodeDebutNord(espece.getPeriodeDebutNord())
                .periodeFinNord(espece.getPeriodeFinNord())
                .periodeDebutSud(espece.getPeriodeDebutSud())
                .periodeFinSud(espece.getPeriodeFinSud())
                .prix(espece.getPrix())
                .lieu(lieuConverter.toLieuDTO(espece.getLieu()))
                .rarete(rareteConverter.toRareteDTO(espece.getRarete()))
                .typeEspece(typeEspeceConverter.toTypeEspeceDTO(espece.getTypeEspece()))
                .build();
    }
}
