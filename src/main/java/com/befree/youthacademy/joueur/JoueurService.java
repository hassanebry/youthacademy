package com.befree.youthacademy.joueur;


import com.befree.youthacademy.joueur.exception.JoueurNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class JoueurService {

    private final JoueurRepo joueurRepo;


    public List<Joueur> findAllJoueurs(){
        return joueurRepo.findAll();
    }

    public void addJoueur(JoueurDto joueurDto) {
        Joueur joueur = new Joueur(joueurDto.lastName, joueurDto.firstName, joueurDto.dob, joueurDto.pob, joueurDto.parents, joueurDto.nationality, joueurDto.club, joueurDto.ligue, joueurDto.lastClub, joueurDto.statut);
        joueurRepo.save(joueur);
    }

    public void deleteJoueur(Long joueurId) {
        Optional<Joueur> joueurOptional = joueurRepo.findById(joueurId);
        if (joueurOptional.isEmpty()){
            throw new JoueurNotFoundException("Le joueur est absent du système");
        }
        joueurRepo.deleteById(joueurId);
    }
}
