package com.ssafy.be.common.util;

import com.ssafy.be.common.exception.CreateFailException;
import com.ssafy.be.db.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;
@Service

public class RequestCreateFont {
    @Value("${fastapi.request.url}")
    private String url;
    @Async
    public Integer requestToFastAPI(String fontDescription, String fontName, User user){
//        String reqUrl;
//        try{
//            reqUrl = URLEncoder.encode(url,"UTF-8");
//        }catch (Exception e){
//            e.printStackTrace();
//            return -1;
//        }
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        Map<String,Object> body = new HashMap<>();
        body.put("fontDescription",fontDescription);
        body.put("fontName",fontName);
        body.put("userSeq",user.getUserSeq());
        HttpEntity<?> requestMessage = new HttpEntity<>(body,httpHeaders);
        try{
            restTemplate.postForEntity(url,requestMessage,String.class);
        }
        catch (Exception e){
            throw new CreateFailException();
        }
        return 0;
    }
}
