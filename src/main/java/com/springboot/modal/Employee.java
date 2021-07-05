package com.springboot.modal;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_emp")
@Getter @Setter
@RequiredArgsConstructor
@ToString
@EqualsAndHashCode
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "title")
	private String title;

	@Column(name = "productor")
	private String productor;

	@Column(name = "model")
	private String model;

	@Column(name = "type_processor")
	private String type_processor;

	@Column(name = "hard_drive")
	private String hard_drive;

	@Column(name = "diagonal")
	private Float diagonal;

	@Column(name = "price")
	private Float price;

	@Column(name = "ram")
	private String ram;

	@CreationTimestamp
	@Column(name = "created")
	private Timestamp created;

	@Column(name = "created_User")
	private String created_User;

	@Column(name = "created_Email")
	private String created_Email;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getProductor() {
		return productor;
	}

	public void setProductor(String productor) {
		this.productor = productor;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getType_processor() {
		return type_processor;
	}

	public void setType_processor(String type_processor) {
		this.type_processor = type_processor;
	}

	public String getHard_drive() {
		return hard_drive;
	}

	public void setHard_drive(String hard_drive) {
		this.hard_drive = hard_drive;
	}

	public Float getDiagonal() {
		return diagonal;
	}

	public void setDiagonal(Float diagonal) {
		this.diagonal = diagonal;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Timestamp getCreated() {
		return created;
	}

	public void setCreated(Timestamp created) {
		this.created = created;
	}

	public String getCreated_User() {
		return created_User;
	}

	public void setCreated_User(String created_User) {
		this.created_User = created_User;
	}

	public String getCreated_Email() {
		return created_Email;
	}

	public void setCreated_Email(String created_Email) {
		this.created_Email = created_Email;
	}

	public String getRam() {
		return ram;
	}

	public void setRam(String ram) {
		this.ram = ram;
	}
}
