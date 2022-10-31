package com.ssafy.be.db.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "t_user_font")
public class UserFont {
    /*
    * user_font_seq bigint PK
user_seq bigint
font_seq bigint*/

    @Id
    @Column(name = "user_font_seq")
    long userFontSeq;
    @ManyToOne
    @JoinColumn(name = "user_seq",referencedColumnName = "user_seq")
    User user;
    @ManyToOne
    @JoinColumn(name = "font_seq",referencedColumnName = "font_seq")
    Font font;
}
