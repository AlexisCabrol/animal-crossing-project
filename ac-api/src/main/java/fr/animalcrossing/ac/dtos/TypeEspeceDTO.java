package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class TypeEspeceDTO implements Serializable {

    private Integer id;
    private String type;
}
