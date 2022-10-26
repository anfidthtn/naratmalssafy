package com.ssafy.be.api.controller;

import com.ssafy.be.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/user")
@RestController

public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/checknickname/{nickname}")
    public ResponseEntity<Boolean> checkNickname(@PathVariable String nickname){
        //닉네임 있는지 확인
        boolean res = userService.checkNickname(nickname);
        return ResponseEntity.status(200).body(res);
    }
}
