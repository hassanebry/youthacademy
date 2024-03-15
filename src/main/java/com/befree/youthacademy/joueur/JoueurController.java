package com.befree.youthacademy.joueur;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/joueurs")
@AllArgsConstructor
public class JoueurController {

    private final JoueurService joueurService;

    @GetMapping
    public ResponseEntity<List<Joueur>> getAllJoueurs(){
        return ResponseEntity.ok(joueurService.findAllJoueurs());
    }
}
