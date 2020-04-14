package fr.animalcrossing.ac.dtos;

import lombok.*;

import java.io.Serializable;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
public class LieuDTO implements Serializable {

    private Integer id;
    private String lieu;
}
