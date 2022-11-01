package com.ssafy.be.api.service;

import com.ssafy.be.api.dto.ResFont;
import com.ssafy.be.api.request.RegistUserReq;
import com.ssafy.be.api.response.GetUserInfoRes;
import com.ssafy.be.api.response.UpdateUserInfoRes;
import com.ssafy.be.api.response.UserLoginRes;
import com.ssafy.be.common.util.JwtTokenUtil;
import com.ssafy.be.common.util.KakaoLogin;
import com.ssafy.be.db.entity.Font;
import com.ssafy.be.db.entity.FontDownloadHistory;
import com.ssafy.be.db.entity.User;
import com.ssafy.be.db.entity.UserFont;
import com.ssafy.be.db.repository.FontRepository;
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
    @Autowired
    FontRepository fontRepository;


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
        List<ResFont> resLike = new ArrayList<>();
        List<ResFont> resDownload = new ArrayList<>();
        List<ResFont> resMyFont = new ArrayList<>();
        //즐찾 폰트
        for(UserFont e : user.getLikeFonts()){
            Font temp = e.getFont();
            if(temp.getFontDeleteYN().equals("Y")) continue;
            ResFont resFont = ResFont.builder()
                    .createrEmail(temp.getFontCreater().getUserEmail())
                    .createrName(temp.getFontCreater().getUserName())
                    .description(temp.getFontDescription())
                    .downloadFile(temp.getFontDownloadFile().getFileSavedPath())
                    .FontName(temp.getFontName())
                    .fontPath(temp.getFontPath())
                    .favCount(temp.getFontFavCount())
                    .fileName(temp.getFontDownloadFile().getFileSavedName())
                    .build();
            resLike.add(resFont);
        }
        //다운로드 폰트
        for(FontDownloadHistory e : user.getDownloadFonts()){
            Font temp = e.getDownloadFont();
            if(temp.getFontDeleteYN().equals("Y")) continue;
            ResFont resFont = ResFont.builder()
                    .createrEmail(temp.getFontCreater().getUserEmail())
                    .createrName(temp.getFontCreater().getUserName())
                    .description(temp.getFontDescription())
                    .downloadFile(temp.getFontDownloadFile().getFileSavedPath())
                    .FontName(temp.getFontName())
                    .fontPath(temp.getFontPath())
                    .favCount(temp.getFontFavCount())
                    .fileName(temp.getFontDownloadFile().getFileSavedName())
                    .build();
            resDownload.add(resFont);
        }
        //제작 폰트
        for(Font temp : user.getCreateFonts()){
            if(temp.getFontDeleteYN().equals("Y")) continue;
            ResFont resFont = ResFont.builder()
                    .createrEmail(temp.getFontCreater().getUserEmail())
                    .createrName(temp.getFontCreater().getUserName())
                    .description(temp.getFontDescription())
                    .downloadFile(temp.getFontDownloadFile().getFileSavedPath())
                    .FontName(temp.getFontName())
                    .fontPath(temp.getFontPath())
                    .favCount(temp.getFontFavCount())
                    .fileName(temp.getFontDownloadFile().getFileSavedName())
                    .build();
            resMyFont.add(resFont);
        }

        GetUserInfoRes res = GetUserInfoRes.builder()
                .userEmail(user.getUserEmail())
                .userLocation(user.getUserLocation())
                .userName(user.getUserName())
                .userNickname(user.getUserNickname())
                .downloadFonts(resDownload)
                .likeFonts(resLike)
                .myFonts(resMyFont)
                .build();
        return res;
    }

    @Override
    public UpdateUserInfoRes updateUserInfo(Long seq,String email, String location, String name, String nickname) {
        User user = User.builder()
                .userSeq(seq)
                .userEmail(email)
                .userLocation(location)
                .userName(name)
                .userNickname(nickname)
                .build();
        User updatedUser = userRepository.save(user);
        UpdateUserInfoRes res = UpdateUserInfoRes.builder()
                .userName(updatedUser.getUserName())
                .userLocation(updatedUser.getUserLocation())
                .userNickname(updatedUser.getUserNickname())
                .build();
        return res;
    }
}
