package com.springboot.service;

import java.util.List;

import com.springboot.modal.Employee;

public interface EmployeeService {


	List<Employee> get();

	Employee get(int id);

	void save(Employee employee);

	void delete(Long id);


}
