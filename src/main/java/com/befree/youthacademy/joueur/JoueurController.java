package com.befree.youthacademy.joueur;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/joueurs")
@AllArgsConstructor
public class JoueurController {

    private final JoueurService joueurService;

    @GetMapping
    public ResponseEntity<List<Joueur>> getAllJoueurs(){
        return ResponseEntity.ok(joueurService.findAllJoueurs());
    }

    @PostMapping
    public ResponseEntity<String> addJoueur(@RequestBody JoueurDto joueurDto){
        joueurService.addJoueur(joueurDto);
        return ResponseEntity.created(URI.create("api/v1/joueurs/" + UUID.randomUUID())).body("joueur ajouté avec succès");
    }


}
