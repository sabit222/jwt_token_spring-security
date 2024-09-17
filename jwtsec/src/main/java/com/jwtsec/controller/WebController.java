package com.jwtsec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class WebController {

    @GetMapping("/index")
    public String showIndexPage() {
        return "index";
    }

    // Отображение страницы регистрации
    @GetMapping("/register")
    public String showRegisterPage() {
        return "register";  // Вернет файл register.html из папки templates
    }

    // Отображение страницы входа (аутентификации)
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";  // Вернет файл login.html из папки templates

    }
}