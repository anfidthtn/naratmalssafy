package com.ssafy.be.db.repository;

import com.ssafy.be.db.entity.User;
import com.ssafy.be.db.entity.UserFont;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserFontRepository extends JpaRepository<UserFont,Long> {
    List<UserFont> findByUser(User user);
}
