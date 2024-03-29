
package com.agroinnovate.madhumathi.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private  String loanType;

    @Column(nullable = false)
    private String userAadharNumber;

    @Column(nullable = false)
    private String userPanNumber;

    @Column(nullable = false)
    private String salary;

    @Column(nullable = false)
    private String loanAmount;

    @Column(nullable = false)
    private String loanRepaymentMonth;

    @Column(nullable = false)
    private String loanStatus;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String imageUrl;

 @ManyToOne
 @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;


}