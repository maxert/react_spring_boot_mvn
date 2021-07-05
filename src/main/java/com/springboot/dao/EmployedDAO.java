package com.springboot.dao;

import java.util.List;


import com.springboot.modal.Employee;


public interface EmployedDAO {

    List<Employee> get();


    Employee get(int id);

    void save(Employee employee);

    void delete(Long id);
}

