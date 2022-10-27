package com.ssafy.be.api.service;

import com.ssafy.be.api.response.UserLoginRes;
import com.ssafy.be.common.util.KakaoLogin;
import com.ssafy.be.db.entity.User;
import com.ssafy.be.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    KakaoLogin kakaoLogin;


    @Override
    public Boolean checkNickname(String nickname) {
        User user = userRepository. findByUserNickname(nickname);
        if(user==null) {
            return true;
        }
        return false;
    }

    @Override
    public UserLoginRes login(String code){

        //인가 코드 kakao로 요청
        //카카오token받기
        String kakaoToken = kakaoLogin.getKaKaoAccessToken(code);
        System.out.println(kakaoToken);

        String email = kakaoLogin.getEmail(kakaoToken);
        System.out.println(email);
        User user = userRepository.findByUserEmail(email);
        if(user==null){
            return UserLoginRes.builder()
                    .isSignUp(true)
                    .loginResult(email)
                    .build();
        }
        else {
            //JWT 토큰 발급 받기
            return UserLoginRes.builder()
                    .isSignUp(false)
                    .loginResult("token")
                    .build();
        }
    }
}
