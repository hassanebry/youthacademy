package com.befree.youthacademy.joueur;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/joueurs")
public class JoueurController {

    @GetMapping
    public List<Joueur> getAllJoueurs(){
        List<Joueur> joueurs = Arrays.asList(new Joueur(1L, "Barry",
                "Hassane", LocalDate.now(), "Coyah",
                "Hawa", "Guinée", "Horoya",
                Ligue.LIGUE1, Club.HOROYA, Statut.AMATEUR,
                LocalDate.now(), LocalDateTime.now()));

        return joueurs;
    }
}
