package com.befree.youthacademy.joueur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoueurRepo extends JpaRepository<Joueur, Long> {

}
