package com.befree.youthacademy.joueur.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class JoueurNotFoundException extends RuntimeException {
    public JoueurNotFoundException(String msg) {
        super(msg);
    }
}
