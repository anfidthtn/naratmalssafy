package com.ssafy.be.common.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
@Service

public class RequestCreateFont {
    @Value("${fastapi.request.url}")
    private String url;
    @Async
    public Integer requestToFastAPI(Long fontSeq, String fontName){
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
        body.put("fontSeq",fontSeq);
        body.put("fontName",fontName);
        HttpEntity<?> requestMessage = new HttpEntity<>(body,httpHeaders);
        ResponseEntity<String> res = restTemplate.postForEntity(url,requestMessage,String.class);
        return 0;
    }
}
