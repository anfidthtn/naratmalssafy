package com.ssafy.be.api.service;


import com.ssafy.be.api.request.RegistUserReq;
import com.ssafy.be.api.response.UserLoginRes;
import com.ssafy.be.db.entity.User;

public interface UserService {
    Boolean checkNickname(String nickname);
    UserLoginRes login(String code);
    User getUserByUserEmail(String email);
    UserLoginRes registUser(String email, String location, String name, String nickname);


}
