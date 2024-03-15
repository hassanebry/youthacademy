package com.befree.youthacademy.joueur;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JoueurDto {

    String lastName;
    String firstName;
    LocalDate dob;
    String pob;
    String parents;
    String nationality;
    String club;
    String ligue;
    String lastClub;
    String statut;
}
