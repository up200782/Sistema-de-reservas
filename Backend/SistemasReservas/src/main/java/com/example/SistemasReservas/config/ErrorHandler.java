package com.example.SistemasReservas.config;

import lombok.extern.slf4j.Slf4j;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.SistemasReservas.dto.ErrorDTO;
import com.example.SistemasReservas.exception.AppRuntimeException; // Asegúrate de importar AppRuntimeException

@Slf4j
@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDTO validationError(MethodArgumentNotValidException ex) {
        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();
        List<String> errors = fieldErrors.stream().map(x -> x.getDefaultMessage()).toList();
        return ErrorDTO.builder()
                .code("ERR_VALID")
                .message("Los datos de entrada contienen errores")
                .details(errors)
                .build();
    }
    
    @ExceptionHandler(AppRuntimeException.class) // Cambiado de RuntimeException a AppRuntimeException
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDTO runtimeError(AppRuntimeException ex) {
        log.error("Excepción por recurso no encontrado", ex);        
        return ErrorDTO.builder()
                .code(ex.getCode())
                .message(ex.getMessage())
                .details(ex.getDetails())
                .build();
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorDTO unknownError(Exception ex) {
        log.error(ex.getMessage());
        return new ErrorDTO("ERROR_UNKNOWN", "Ocurrió un error inesperado...", null);
    }
  
}
