package com.befree.youthacademy.joueur;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class JoueurService {

    private final JoueurRepo joueurRepo;


    public List<Joueur> findAllJoueurs(){
        return joueurRepo.findAll();
    }

}
