package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class NewsDTO implements Serializable {

    private static final long serialVersionUID = -5576572173955243668L;
    private Integer id;
    private String titre;
    private String description;
    private String contenu;
    private LocalDate datePublication;
}
