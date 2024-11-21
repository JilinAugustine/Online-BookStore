package com.spring.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
public class User {
	@Id
	@SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1, initialValue = 101)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
	private long id;

	@Column(name = "user_name")
	@NotBlank(message = "Name Can Not Be Empty")
	private String name;

	@Column(name = "date_of_birth")
	private Date dateOfBirth;

	@Column(name = "gender", length = 30)
	@NotBlank
	@Size(min = 4, message = "gender must contain atleast 4 characters")
	public String gender;

	@Column(name = "email_id", unique = true, length = 30)
	@NotBlank
	@Email(message = "Email  is not valid!")
	public String emailId;

	@Column(name = "password", length = 20)
	@NotBlank
	@Size(min = 8, message = "Password length must be 8 and contain uppercase,lowercase,digits")
	@Pattern(regexp = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
	public String password;

	@Column(name = "district", length = 20)
	@NotBlank
	@Size(min = 3, message = "district must contain atleast 3 characters")
	private String district;

	@Column(name = "state", length = 20)
	@NotBlank
	@Size(min = 3, message = "district must contain atleast 3 characters")
	private String state;

	@Column(name = "zip_code")
	@NotBlank
	@Size(min = 6, max = 6, message = "zipCode must contain 6 digits")
	private String zipCode;

	@Column(name = "phone_number")
	@NotBlank
	@Size(min = 10, max = 10, message = "phoneNumber must contain  10 digits")
	private String phoneNumber;

	@Column(name = "user_role")
	@NotBlank(message = "role should not blank")
	@Size(min = 3, message = "role must contain at least 3 characters")
	private String role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public User() {
		
	}
	
}
