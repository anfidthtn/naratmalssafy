package com.ssafy.be.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "t_font")
public class Font {
    /*font_seq bigint PK
font_name varchar(45)
font_path varchar(100)
font_description varchar(45)
font_fav_count bigint
font_deleteYN varchar(1)
font_preview bigint
font_download_file bigint
*/
    @Id
    @Column(name = "font_seq")
    Long fontSeq;
    @Column(name = "font_name")
    String fontName;
    @Column(name= "font_path")
    String fontPath;
    @Column(name = "font_description")
    String fontDescription;
    @Column(name = "font_fav_count")
    long fontFavCount;
    @OneToOne
    @JoinColumn(name = "font_preview",referencedColumnName = "file_seq")
    File fontPreview;
    @OneToOne
    @JoinColumn(name = "font_download_file",referencedColumnName = "file_seq")
    File fontDownloadFile;
    @ManyToOne
    @JoinColumn(name = "font_creater", referencedColumnName = "user_seq")
    User fontCreater;

    @OneToMany(mappedBy = "font")
    //@JoinColumn(name = "font_seq", referencedColumnName = "font_seq")
    List<UserFont> likeUsers;

    @OneToMany(mappedBy = "downloadFont")
    //@JoinColumn(name = "font_seq", referencedColumnName = "font_seq")
    List <FontDownloadHistory> downloadUsers;
}
