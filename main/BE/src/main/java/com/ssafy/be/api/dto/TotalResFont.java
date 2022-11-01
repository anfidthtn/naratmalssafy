package com.ssafy.be.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class TotalResFont {
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
    boolean isLike;
}
