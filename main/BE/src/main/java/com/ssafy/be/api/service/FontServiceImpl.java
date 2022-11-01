package com.ssafy.be.api.service;

import com.ssafy.be.api.dto.TotalResFont;
import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.db.entity.Font;
import com.ssafy.be.db.entity.User;
import com.ssafy.be.db.entity.UserFont;
import com.ssafy.be.db.repository.FontRepository;
import com.ssafy.be.db.repository.UserFontRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class FontServiceImpl implements FontService {
    //즐겨찾기 수 다운로드 수
    @Autowired
    FontRepository fontRepository;
    @Autowired
    UserFontRepository userFontRepository;
    @Override
    public GetFontsRes getFonts(User user, Pageable pageable) {
        Page<Font> fontAll =  fontRepository.findAll(pageable);
        List<UserFont> myLike = userFontRepository.findByUser(user);
        HashSet<Long> forCheck =new HashSet<Long>();
        for(UserFont u : myLike){
            forCheck.add(u.getFont().getFontSeq());
        }
        List<TotalResFont> resInput = new ArrayList<>();
        for(Font temp : fontAll.getContent()){
            TotalResFont totalResFont = TotalResFont.builder()
                    .createrEmail(temp.getFontCreater().getUserEmail())
                    .createrName(temp.getFontCreater().getUserName())
                    .description(temp.getFontDescription())
                    .downloadFile(temp.getFontDownloadFile().getFileSavedPath())
                    .FontName(temp.getFontName())
                    .fontPath(temp.getFontPath())
                    .favCount(temp.getFontFavCount())
                    .fileName(temp.getFontDownloadFile().getFileSavedName())
                    .fontSeq(temp.getFontSeq())
                    .downloadCount(temp.getFontDownloadCount())
                    .regDate(temp.getFontRegDate())
                    .isLike(forCheck.contains(temp.getFontSeq()))
                    .build();
            resInput.add(totalResFont);
        }
        GetFontsRes res = GetFontsRes.builder().fonts(resInput).build();
        return res;
    }
}
