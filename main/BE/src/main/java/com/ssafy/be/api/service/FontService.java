package com.ssafy.be.api.service;


import com.ssafy.be.api.response.CheckFontNameRes;
import com.ssafy.be.api.response.GetFontDetailRes;
import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.db.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface FontService {
    public GetFontsRes getFonts(User user, Pageable pageable);
    public GetFontDetailRes getFont(User user, Long fontSeq);
    public CheckFontNameRes checkFontName(String fontName);
    public Long registFontInfo(String fontName, String fontDescription, User user);
    public Void createFont(List<MultipartFile> uploadImg, Long fontSeq);
}
