package com.imooc.demo;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.AbstractJsonpResponseBodyAdvice;

@ControllerAdvice
public class JsonpResult extends AbstractJsonpResponseBodyAdvice {
    public  JsonpResult(){
        super("callback");
    }
}
