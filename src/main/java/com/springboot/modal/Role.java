package com.springboot.modal;

import lombok.*;

import javax.persistence.*;
import java.util.List;

/**
 Role Users
 **/
@Entity
@Table(name = "roles")
@Getter @Setter
@RequiredArgsConstructor
@ToString
@EqualsAndHashCode
public class Role  extends BaseEntity{



  @Enumerated(EnumType.STRING)
  @Column(name = "status")
  private Status status;

  @Column(name = "name")
  private String name;

  @OneToMany(fetch = FetchType.EAGER)
  @JoinColumn(name="id")
  private List<User> users;





  public Status getStatus() {
    return status;
  }

  public void setStatus(Status status) {
    this.status = status;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<User> getUsers() {
    return users;
  }

  public void setUsers(List<User> users) {
    this.users = users;
  }

}
