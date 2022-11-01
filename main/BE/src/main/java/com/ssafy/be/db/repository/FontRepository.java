package com.ssafy.be.db.repository;

import com.ssafy.be.db.entity.Font;
import com.ssafy.be.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FontRepository extends JpaRepository<Font,Long> {
}
