package com.ssafy.be.api.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LikeFontRes {
    boolean isSuccess;
    String msg;
}
