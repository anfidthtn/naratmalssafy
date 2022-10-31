package com.ssafy.be.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "t_padlet_contents")
public class PadletContents {
    /*padlet_contents_seq bigint PK
padlet_contents_comments varchar(500)
padlet_contents_font_seq bigint
padlet_contents_writer bigint

*/
    @Id
    @Column(name = "padlet_contents_seq")
    long padletContentsSeq;
    @OneToOne
    @JoinColumn(name = "padlet_contents_font_seq",referencedColumnName = "font_seq")
    Font font;
    @OneToOne
    @JoinColumn(name="padlet_contents_writer",referencedColumnName = "user_seq")
    User user;
}
