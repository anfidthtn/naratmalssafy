package com.ssafy.be.db.repository;

import com.ssafy.be.db.entity.UserFont;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFontRepository extends JpaRepository<UserFont,Long> {
}
