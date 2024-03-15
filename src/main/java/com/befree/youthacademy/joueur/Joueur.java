package com.befree.youthacademy.joueur;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
@Table
public class Joueur {

    @Id
    @SequenceGenerator(
            name = "joueur_sequence",
            sequenceName = "joueur_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "joueur_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;

    private String lastName;
    private String firstName;
    private LocalDate dob;
    private String pob;
    private String parents;
    private String nationality;
    private String club;

    private String ligue;

    private String lastClub;

    private String statut;

    private LocalDate dateOfSignature;
    private LocalDateTime createdAt;

    public Joueur(String lastName, String firstName, LocalDate dob, String pob, String parents, String nationality, String club, String ligue, String lastClub, String statut) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.dob = dob;
        this.pob = pob;
        this.parents = parents;
        this.nationality = nationality;
        this.club = club;
        this.ligue = ligue;
        this.lastClub = lastClub;
        this.statut = statut;
    }
}
