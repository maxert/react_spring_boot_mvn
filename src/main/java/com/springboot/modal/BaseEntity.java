package com.springboot.modal;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.sql.Timestamp;


@MappedSuperclass
@Getter
@Setter
@RequiredArgsConstructor
@ToString
@EqualsAndHashCode
public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    @Column(name = "created")
    private Timestamp created;


    @UpdateTimestamp
    @Column(name = "updated")
    private Timestamp updated;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;
}
