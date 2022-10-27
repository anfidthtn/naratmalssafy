package com.ssafy.be.api.service;


import com.ssafy.be.api.response.UserLoginRes;

public interface UserService {
    Boolean checkNickname(String nickname);
    UserLoginRes login(String code);


}
