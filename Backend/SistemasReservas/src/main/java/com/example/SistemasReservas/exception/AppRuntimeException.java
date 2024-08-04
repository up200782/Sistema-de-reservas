package com.example.SistemasReservas.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppRuntimeException extends Exception { // Renombrada de RuntimeException a AppRuntimeException

    private final String code;
    private final transient Object details;

    public AppRuntimeException(String code, String message, Object details) {
        super(message);
        this.code = code;
        this.details = details;
    }
}
