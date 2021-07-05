package com.springboot.service;

import com.springboot.modal.User;

import java.util.List;

/**
 * Service interface

 */

public interface UserServices {

   void save(User user);



   List<User> getAll();

   User findByUsername(String username);

   User findById(Long id);

   void delete(Long id);
}