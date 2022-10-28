package com.ssafy.be.db.repository;

import com.ssafy.be.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long>  {
    User findByUserNickname(String nickname);
    User findByUserEmail(String email);
}
