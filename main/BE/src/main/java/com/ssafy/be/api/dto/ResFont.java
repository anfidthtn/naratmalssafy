package com.ssafy.be.api.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ResFont
{
    //폰트 파일 주소, 이름 필요
    String FontName;
    String fontPath;
    Long favCount;
    String downloadFile;
    String createrName;
    String createrEmail;
    String description;
/*                        .fontName(target.getFontName())
        .fontPath(target.getFontPath())
        .fontFavCount(target.getFontFavCount())
//                   .fontDownloadFile(target.getFontDownloadFile())
        .fontCreater(target.getFontCreater())
        .fontDescription(target.getFontDescription())*/
}
