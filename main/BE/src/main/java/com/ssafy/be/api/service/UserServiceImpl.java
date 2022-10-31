package com.ssafy.be.api.service;

import com.ssafy.be.api.request.RegistUserReq;
import com.ssafy.be.api.response.GetUserInfoRes;
import com.ssafy.be.api.response.UserLoginRes;
import com.ssafy.be.common.util.JwtTokenUtil;
import com.ssafy.be.common.util.KakaoLogin;
import com.ssafy.be.db.entity.Font;
import com.ssafy.be.db.entity.FontDownloadHistory;
import com.ssafy.be.db.entity.User;
import com.ssafy.be.db.entity.UserFont;
import com.ssafy.be.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

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
            String accessToken = JwtTokenUtil.getToken(email);
            return UserLoginRes.builder()
                    .isSignUp(false)
                    .loginResult(accessToken)
                    .build();
        }
    }
    @Override
    public User getUserByUserEmail(String email) {
        return userRepository.findByUserEmail(email);
    }

    @Override
    public UserLoginRes registUser(String email, String location, String name, String nickname) {
        User user = User.builder()
                .userEmail(email)
                .userLocation(location)
                .userName(name)
                .userNickname(nickname)
                .build();
        if(userRepository.findByUserEmail(user.getUserEmail())!=null){
            return UserLoginRes.builder().loginResult("already_regist").isSignUp(false).build();
        }

            User registedUser = userRepository.save(user);
            if(registedUser == null){
                return UserLoginRes.builder().loginResult("fail_regist").isSignUp(false).build();
            }
            String token = JwtTokenUtil.getToken(registedUser.getUserEmail());
            return UserLoginRes.builder().loginResult(token).isSignUp(false).build();



    }

    @Override
    public GetUserInfoRes getUserInfo(User inputUser) {
        User user = userRepository.findByUserEmail(inputUser.getUserEmail());
        List<Font> resLike = new ArrayList<>();
        List<Font> resDownload = new ArrayList<>();
        List<UserFont> likeFonts = user.getLikeFonts();
        List<FontDownloadHistory> downloadFonts = user.getDownloadFonts();
        for(UserFont e :likeFonts){
            resLike.add(e.getFont());
        }
        for(FontDownloadHistory e :downloadFonts){
            resDownload.add(e.getDownloadFont());
        }
        GetUserInfoRes res = GetUserInfoRes.builder()
                .userEmail(user.getUserEmail())
                .userLocation(user.getUserLocation())
                .userName(user.getUserName())
                .userNickname(user.getUserNickname())
                .downloadFonts(resDownload)
                .likeFonts(resLike)
                .build();
        return res;
    }
}
