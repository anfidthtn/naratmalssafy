package com.ssafy.be.api.dto;


import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ResFont
{
    //폰트 파일 주소, 이름 필요
    Long fontSeq;
    String FontName;
    String fontPath;
    Long favCount;
    String downloadFile;
    String fileName;
    String createrName;
    String createrEmail;
    String description;
    Long downloadCount;
    LocalDateTime regDate;
/*                        .fontName(target.getFontName())
        .fontPath(target.getFontPath())
        .fontFavCount(target.getFontFavCount())
//                   .fontDownloadFile(target.getFontDownloadFile())
        .fontCreater(target.getFontCreater())
        .fontDescription(target.getFontDescription())*/
}
