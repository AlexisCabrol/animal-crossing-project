package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class CaptureDTO implements Serializable {

    private static final long serialVersionUID = 882780107880632345L;

    private Integer id;
    private Integer idUtilisateur;
    private Integer idEspece;
}
