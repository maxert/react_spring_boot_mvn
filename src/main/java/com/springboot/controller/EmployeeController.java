package com.springboot.controller;
import java.util.List;


import com.springboot.dao.EmployeeRepository;
import com.springboot.modal.Employee;
import org.springframework.web.bind.annotation.*;
import com.springboot.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EmployeeController {
	private final EmployeeRepository repository;

	EmployeeController(EmployeeRepository repository, EmployeeService employeeService) {
		this.repository = repository;
		this.employeeService = employeeService;
	}
	private final EmployeeService employeeService;

	@GetMapping("/employee")
	public List<Employee> get() {
		return employeeService.get();
	}

	@PostMapping("/employee")
	public Employee save(@RequestBody Employee employee) {
		employeeService.save(employee);
		return employee;
	}

	@GetMapping("/employee/{id}")
	public Employee get(@PathVariable int id) {
		return employeeService.get(id);
	}

	@DeleteMapping("/employee/{id}")
	public String delete(@PathVariable Long id) {

		employeeService.delete(id);

		return "Employee removed with id "+id;

	}
	@PutMapping("/employee/{id}")
	Employee replaceEmployee(@RequestBody Employee employee, @PathVariable Long id) {

		return repository.findById(id)
				.map(employeed -> {
					employeed.setTitle(employee.getTitle());
					employeed.setProductor(employee.getProductor());
					employeed.setCreated(employee.getCreated());
					return repository.save(employee);
				})
				.orElseGet(() -> {
					employee.setId(id);
					return repository.save(employee);
				});
	}


}