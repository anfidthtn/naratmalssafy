package com.ssafy.be.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class TotalResFont {
    Creater creater;
    Long fontSeq;
    String FontName;
    String fontPath;
    Long favCount;
    String description;
    Long downloadCount;
    LocalDateTime regDate;
    boolean isLike;
}
