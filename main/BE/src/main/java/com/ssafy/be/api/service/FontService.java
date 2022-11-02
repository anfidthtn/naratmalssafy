package com.ssafy.be.api.service;


import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.db.entity.User;
import org.springframework.data.domain.Pageable;


public interface FontService {
    public GetFontsRes getFonts(User user, Pageable pageable);

}
