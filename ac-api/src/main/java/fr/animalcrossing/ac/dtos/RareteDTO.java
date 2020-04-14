package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class RareteDTO implements Serializable {

    private Integer id;
    private String rarete;
}
