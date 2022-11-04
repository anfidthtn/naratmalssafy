package com.ssafy.be.api.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class TotalResFont {
    Creator creator;
    Long fontSeq;
    String FontName;
    String fontPath;
    Long favCount;
    String description;
    Long downloadCount;
    LocalDateTime regDate;
    boolean isLike;
}
