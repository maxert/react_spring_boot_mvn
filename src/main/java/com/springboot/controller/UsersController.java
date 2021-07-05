package com.springboot.controller;

import com.springboot.dao.UserDto;
import com.springboot.modal.User;
import com.springboot.service.UserServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller user connected requestst.

 */

@RestController
@CrossOrigin
@RequestMapping(value = "/api/users/")
public class UsersController {
    private final UserServices userServices;

    @Autowired
    public UsersController(UserServices userServices) {
        this.userServices = userServices;
    }


    @PostMapping("add")
    public User save(@RequestBody User user) {
        userServices.save(user);

        return user;
    }
    @GetMapping(value = "{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id){
        User user = userServices.findById(id);

        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        UserDto result = UserDto.fromUser(user);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}