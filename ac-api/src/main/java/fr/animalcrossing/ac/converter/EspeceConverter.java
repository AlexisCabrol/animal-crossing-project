package fr.animalcrossing.ac.converter;

import fr.animalcrossing.ac.dtos.EspeceDTO;
import fr.animalcrossing.ac.models.Espece;
import fr.animalcrossing.ac.models.TypeEspece;
import org.springframework.stereotype.Component;

@Component
public class EspeceConverter {

    private LieuConverter lieuConverter;
    private TypeEspeceConverter typeEspeceConverter;
    private RareteConverter rareteConverter;

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
                .periodeDebut(espece.getPeriodeDebut())
                .periodeFin(espece.getPeriodeFin())
                .prix(espece.getPrix())
                .lieu(lieuConverter.toLieuDTO(espece.getLieu()))
                .rarete(rareteConverter.toRareteDTO(espece.getRarete()))
                .typeEspece(typeEspeceConverter.toTypeEspeceDTO(espece.getTypeEspece()))
                .build();
    }
}
