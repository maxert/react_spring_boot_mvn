package com.springboot.dao;



import com.springboot.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
 User findByUsername(String username);
}
