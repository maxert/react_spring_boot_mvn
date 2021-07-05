package com.springboot.service;
import java.util.List;

import com.springboot.dao.EmployedDAO;
import com.springboot.modal.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeServiceImp implements EmployeeService {

	@Autowired
	private EmployedDAO employeeDao;
	@Transactional
	@Override
	public List<Employee> get() {
		return employeeDao.get();
	}
	@Transactional
	@Override
	public Employee get(int id) {
		return employeeDao.get(id);
	}

	@Transactional
	@Override
	public void save(Employee employee) {
		employeeDao.save(employee);

	}

	@Transactional
	@Override
	public void delete(Long id) {
		employeeDao.delete(id);

	}
}