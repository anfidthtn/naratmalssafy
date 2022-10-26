package com.ssafy.be.db.entity;


import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name="t_user")
public class User {
    @Id
    @Column(name="user_seq")
    long userSeq;

    @Column(name="user_email")
    String email;

    @Column(name = "user_password")
    String userPassword;
    @Column(name = "user_nickname")
    String userNickname;
    @Column(name = "user_rep_font")
    long userRepFont;
}
