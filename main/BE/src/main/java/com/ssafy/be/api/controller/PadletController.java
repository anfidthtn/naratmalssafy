package com.ssafy.be.api.controller;


import com.ssafy.be.api.request.RegistPadletReq;
import com.ssafy.be.api.response.GetPadletRes;
import com.ssafy.be.api.response.IsSuccessRes;
import com.ssafy.be.api.service.PadletService;
import com.ssafy.be.common.auth.UserDetail;
import com.ssafy.be.db.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/api/padlet")
public class PadletController {
    @Autowired
    PadletService padletService;

    @PostMapping()
    public ResponseEntity<IsSuccessRes> registPadlet(@ApiIgnore Authentication authentication, @RequestBody RegistPadletReq req){
        UserDetail userDetail = (UserDetail) authentication.getDetails();
        User user = userDetail.getUser();
        IsSuccessRes res= padletService.registPadlet(user, req.getFontSeq(),req.getContent(), req.getTitle(), req.getColor());
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/{location}")
    public ResponseEntity<GetPadletRes> getPadlet(@PathVariable String location){
        GetPadletRes res = padletService.getPadlet(location);
        return ResponseEntity.status(200).body(res);
    }
}
