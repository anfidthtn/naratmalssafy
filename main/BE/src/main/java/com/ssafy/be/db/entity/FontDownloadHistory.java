package com.ssafy.be.db.entity;


import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Table(name = "t_font_download_history")
public class FontDownloadHistory {
    /*font_download_history_seq bigint AI PK
font_seq bigint
user_seq bigint*/
    @Id
    @Column(name = "font_download_history_seq")
    long fontDownloadHistorySeq;
    @OneToOne
    @JoinColumn(name = "font_seq",referencedColumnName = "font_seq")
    Font downloadFont;
    @ManyToOne
    @JoinColumn(name = "user_seq",referencedColumnName = "user_seq")
    User user;
}
