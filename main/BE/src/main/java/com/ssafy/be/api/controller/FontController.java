package com.ssafy.be.api.controller;

import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.api.service.FontService;
import com.ssafy.be.common.auth.UserDetail;
import com.ssafy.be.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;


@RestController
@RequestMapping("/api/font")
public class FontController {

    @Autowired
    FontService fontService;

    @GetMapping("/{page}/{count}")
    public ResponseEntity<GetFontsRes> getFonts(@ApiIgnore Authentication auth,@PathVariable int page, @PathVariable int count){
        UserDetail userDetail = (UserDetail) auth.getDetails();
        User user = userDetail.getUser();
        GetFontsRes res = fontService.getFonts(user,page,count);
        return ResponseEntity.status(200).body(res);
    }
}
