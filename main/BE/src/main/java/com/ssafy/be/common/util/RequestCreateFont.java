package com.ssafy.be.common.util;

import com.ssafy.be.common.exception.CreateFailException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.HashMap;
import java.util.Map;
@Service

public class RequestCreateFont {
    @Value("${fastapi.request.url}")
    private String url;
    @Async
    public Integer requestToFastAPI(Long fontSeq, String fontName) throws CreateFailException{
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
        try{
            restTemplate.postForEntity(url,requestMessage,String.class);
        }
        catch (Exception e){
            throw new CreateFailException();
        }
        return 0;
    }
}
