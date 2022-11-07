package com.ssafy.be.api.controller;

import com.ssafy.be.api.request.RegistFontReq;
import com.ssafy.be.api.response.*;
import com.ssafy.be.api.service.FontService;
import com.ssafy.be.api.service.UserService;
import com.ssafy.be.common.auth.UserDetail;
import com.ssafy.be.db.entity.User;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/api/font")
public class FontController {
    @Autowired
    FontService fontService;
    @Autowired
    UserService userService;
    private final Logger logger = LogManager.getLogger(FontController.class);
    @GetMapping()
    public ResponseEntity<GetFontsRes> getFonts(@ApiIgnore Authentication auth, Pageable page ,String flag, String keyword){
        User user = null;
        //검색조건, 검색어 가져오기
        GetFontsRes res;
        if(auth!=null){
            UserDetail userDetail = (UserDetail) auth.getDetails();
            user = userDetail.getUser();
            logger.info("getFonts requestUser: ["+user.getUserEmail()+"] "+" page: ["+page+"]"+"flag: ["+flag+"] "+" keyword: ["+keyword+"]");
        }
        else{
            logger.info("getFonts requestUser: [Not Login] "+" page: ["+page+"]"+"flag: ["+flag+"] "+" keyword: ["+keyword+"]");
        }

        res = fontService.getFonts(user,page,flag,keyword);
        return ResponseEntity.status(200).body(res);

    }
    @GetMapping("/detail/{fontSeq}")
    public ResponseEntity<GetFontDetailRes> getFont(@ApiIgnore Authentication auth, @PathVariable long fontSeq){
        UserDetail userDetail = (UserDetail) auth.getDetails();
        User user =  userDetail.getUser();
        logger.info("getFontDetail requestUser: ["+user.getUserEmail()+"] "+" fontSeq: ["+fontSeq+"]");
        GetFontDetailRes res = fontService.getFont(user,fontSeq);
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/checkname/{fontName}")
    public ResponseEntity<CheckFontNameRes> checkFontName(@PathVariable String fontName){
        CheckFontNameRes res = fontService.checkFontName(fontName);
        logger.info("checkFontName fontName: ["+fontName+"]");
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping()
    public ResponseEntity<IsSuccessRes> registFont(@ApiIgnore Authentication authentication, RegistFontReq req){
        UserDetail userDetail = (UserDetail) authentication.getDetails();
        User user = userDetail.getUser();
        if(req.getUploadImg()==null){
            return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(false).msg("이미지 업로드 오류! 비어있는 파일입니다.").build());
        }
        Long fontSeq = fontService.registFontInfo(req.getFontName(),req.getDescription(),user);
        logger.info("registFont requestUser: ["+user.getUserEmail()+"] "+" fontName: ["+req.getFontName()+"]");
        if(fontSeq == -1L){
            return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(false).msg("이미 사용중인 폰트 이름입니다.").build());
        }
        Long res = fontService.createFont(req.getUploadImg(),fontSeq,req.getFontName());
        if(res==-2L){
            return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(false).msg("이미지 업로드 오류! 비어있는 파일입니다.").build());
        }
        else if(res==-3){
            return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(false).msg("이미지 업로드 오류! contentType이 없습니다.").build());
        }
        else if(res==-4){
            return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(false).msg("이미지 업로드 오류! png파일이 아닙니다.").build());
        }
        else if(res==-5){
            return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(false).msg("이미지 업로드 오류! 파일 저장중 에러가 발생했습니다.").build());
        }
        return ResponseEntity.status(200).body(IsSuccessRes.builder().isSuccess(true).msg("폰트제작 요청이 완료되었습니다.").build());
    }
}
