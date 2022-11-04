package com.ssafy.be.api.controller;

import com.ssafy.be.api.request.*;
import com.ssafy.be.api.response.*;
import com.ssafy.be.api.service.DownloadHistoryService;
import com.ssafy.be.api.service.UserService;
import com.ssafy.be.common.auth.UserDetail;
import com.ssafy.be.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@RequestMapping("/api/user")
@RestController

public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    DownloadHistoryService downloadHistoryService;

    @GetMapping("/checknickname/{nickname}")
    public ResponseEntity<Boolean> checkNickname(@PathVariable String nickname){
        //닉네임 있는지 확인
        boolean res = userService.checkNickname(nickname);
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginRes> login(@RequestBody UserLoginReq loginReq){
        UserLoginRes res = userService.login(loginReq.getCode());
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping()
    public ResponseEntity<UserLoginRes> registUser(@RequestBody RegistUserReq userInfo){
        //사용자 정보 받아서 검증...?
        UserLoginRes res = userService.registUser(
                userInfo.getUserEmail(),
                userInfo.getUserLocation(),
                userInfo.getUserName(),
                userInfo.getUserNickname()
        );
        if(res.getLoginResult().equals("fail_regist")) {
            return ResponseEntity.status(901).body(res);
        }
        if(res.getLoginResult().equals("already_regist")){
            return ResponseEntity.status(902).body(res);
        }
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping()
    public ResponseEntity<GetUserInfoRes> getUserInfo(@ApiIgnore Authentication authentication){
        UserDetail userDetails = (UserDetail)authentication.getDetails();
        User user = userDetails.getUser();
        GetUserInfoRes res = userService.getUserInfo(user);
        return ResponseEntity.status(200).body(res);
    }

    @PutMapping()
    public ResponseEntity<UpdateUserInfoRes> updateUserInfo(@ApiIgnore Authentication authentication, @RequestBody UpdateUserInfoReq userInfo){
        UserDetail userDetails = (UserDetail)authentication.getDetails();
        User user = userDetails.getUser();
        UpdateUserInfoRes res = userService.updateUserInfo(
                user.getUserSeq(),
                user.getUserEmail(),
                userInfo.getUserLocation(),
                userInfo.getUserName(),
                userInfo.getUserNickname()
        );
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("/toggleLike")
    public ResponseEntity<IsSuccessRes> likeFontToggle(@ApiIgnore Authentication authentication, @RequestBody LikeFontToggleReq target){
        UserDetail userDetail = (UserDetail) authentication.getDetails();
        User user = userDetail.getUser();
        IsSuccessRes res = userService.toggleLikeFont(user,target.getId());
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("/download")
    //TODO 반환타입 Void
    public ResponseEntity<Void> registDownloadHistory(@ApiIgnore Authentication authentication, @RequestBody RegistDownloadHistoryReq req){
        UserDetail userDetail = (UserDetail) authentication.getDetails();
        User user = userDetail.getUser();
        downloadHistoryService.registDownloadHistory(user,req.getFontSeq(), req.getFontName());
        return ResponseEntity.status(200).body(null);
    }

    @GetMapping("/download")
    public ResponseEntity<List<GetDownloadFontsRes>> getDownloadFonts(@ApiIgnore Authentication authentication){
        UserDetail userDetail = (UserDetail) authentication.getDetails();
        User user = userDetail.getUser();
        List<GetDownloadFontsRes> res = userService.getDownloadFonts(user);
        return ResponseEntity.status(200).body(res);
    }
}
