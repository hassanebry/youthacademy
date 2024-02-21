package com.befree.youthacademy.joueur;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Joueur {

    private Long id;
    private String lastName;
    private String firstName;
    private LocalDate dob;
    private String pob;
    private String parents;
    private String nationality;
    private String club;
    private Ligue ligue;
    private Club lastClub;
    private Statut statut;
    private LocalDate dateOfSignature;
    private LocalDateTime createdAt;

}
