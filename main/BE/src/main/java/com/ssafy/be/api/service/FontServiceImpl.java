package com.ssafy.be.api.service;

import com.ssafy.be.api.dto.Creater;
import com.ssafy.be.api.dto.TotalResFont;
import com.ssafy.be.api.response.GetFontDetailRes;
import com.ssafy.be.api.response.GetFontsRes;
import com.ssafy.be.db.entity.Font;
import com.ssafy.be.db.entity.User;
import com.ssafy.be.db.entity.UserFont;
import com.ssafy.be.db.repository.FontDownloadHistoryRepository;
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
    @Autowired
    FontDownloadHistoryRepository fontDownloadHistoryRepository;
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
                    .creater(Creater.builder()
                            .email(temp.getFontCreater().getUserEmail())
                            .location(temp.getFontCreater().getUserLocation())
                            .name(temp.getFontCreater().getUserName())
                            .nickname(temp.getFontCreater().getUserNickname())
                            .build())
                    .description(temp.getFontDescription())
                    //.downloadFile(temp.getFontDownloadFile().getFileSavedPath())
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

    @Override
    public GetFontDetailRes getFont(User user, Long fontSeq) {
        //폰트 가져와
        Font target = fontRepository.findById(fontSeq).get();
        //다운로드 했는지 확인해
        boolean isDownload = fontDownloadHistoryRepository.findByUserAndDownloadFont(user,target)==null?false:true;
        //즐겨찾기 했는지 확인해
        boolean isLike = userFontRepository.findByUserAndFont(user,target)==null?false:true;
        GetFontDetailRes res = GetFontDetailRes.builder()
                .creater(Creater.builder()
                        .email(target.getFontCreater().getUserEmail())
                        .location(target.getFontCreater().getUserLocation())
                        .name(target.getFontCreater().getUserName())
                        .nickname(target.getFontCreater().getUserNickname())
                        .build())
                .description(target.getFontDescription())
                .downloadCount(target.getFontDownloadCount())
                .downloadFile(target.getFontDownloadFile().getFileSavedPath())
                .fontSeq(target.getFontSeq())
                .favCount(target.getFontFavCount())
                .fileName(target.getFontDownloadFile().getFileSavedName())
                .FontName(target.getFontName())
                .fontPath(target.getFontPath())
                .isDownload(isDownload)
                .isLike(isLike)
                .regDate(target.getFontRegDate())
                .build();

        //폰트 반환해
        return res;
    }


}
