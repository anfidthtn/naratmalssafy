package com.ssafy.be.api.service;

import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.db.entity.User;

public interface FontService {
    public GetFontsRes getFonts(User user,int page,int CntPerPage);
}
