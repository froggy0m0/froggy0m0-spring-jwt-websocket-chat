package com.websocket.chat.user.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Slf4j
@CrossOrigin(origins = "*")
public class UserController {

  @PostMapping("/signup")
  public ResponseEntity<Object> signup(@RequestParam("email") String email,
      @RequestParam("password") String password) {

    log.info("emial={}", email);
    log.info("password={}", password);

    String responseBody = "email:" + email + "\n" + "password:" + password + "\n";

    return new ResponseEntity<>(responseBody, HttpStatus.OK);
  }
}
