package com.imooc.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")

public class testController {
    @GetMapping("/get1")
    private ResultBean get1(){
        System.out.println("test get1");
        return new ResultBean("get1");
    }
    @GetMapping("/getCookie")
    private ResultBean getCookie(@CookieValue (value = "cookie1") String cookie1){
        System.out.println("test getCookie");
        return new ResultBean("getCookie"+cookie1);
    }
    @GetMapping("/getHeaders")
    private ResultBean getHeaders(@RequestHeader ( "name") String header1,@RequestHeader ( "caller") String header2){
        System.out.println("test getHeader");
        return new ResultBean("getHeader"+header1+header2);
    }
    @PostMapping("/postJson")
    public ResultBean postJson(@RequestBody User user){
        System.out.println("test Post");
        return  new ResultBean("psotJson"+user.getName());
    }
}
