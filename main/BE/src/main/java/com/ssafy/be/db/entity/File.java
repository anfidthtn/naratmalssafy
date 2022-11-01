package com.ssafy.be.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_file")
@Getter
public class File {
    /*file_seq bigint AI PK
file_original_name varchar(45)
file_saved_name varchar(45)
file_saved_path varchar(100)
file_type varchar(45)*/
    @Id
    @Column(name = "file_seq")
    long fileSeq;
    @Column(name = "file_original_name")
    String fileOriginalName;
    @Column(name = "file_saved_name")
    String fileSavedName;
    @Column(name = "file_saved_path")
    String fileSavedPath;
    @Column(name = "file_type")
    String fileType;
}
