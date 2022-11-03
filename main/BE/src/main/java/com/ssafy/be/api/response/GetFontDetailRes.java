package com.ssafy.be.api.response;

import com.ssafy.be.api.dto.Creator;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class GetFontDetailRes {
    Creator creator;
    Long fontSeq;
    String FontName;
    String fontPath;
    Long favCount;
    String downloadFile;
    String fileName;
    String description;
    Long downloadCount;
    LocalDateTime regDate;
    boolean isLike;
    boolean isDownload;
}
