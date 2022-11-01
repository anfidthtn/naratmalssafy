package com.ssafy.be.api.service;

import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.db.entity.User;
import org.springframework.stereotype.Service;

@Service
public class FontServiceImpl implements FontService {
    //즐겨찾기 수 다운로드 수
    @Override
    public GetFontsRes getFonts(User user,int page,int CntPerPage) {

        return null;
    }
}
