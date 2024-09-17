package com.jwtsec.demo;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/v2/auth")
public class HomeController {

    @GetMapping("/home")
    public String showHomePage() {
        return "home";
    }
}