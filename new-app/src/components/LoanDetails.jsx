
import { useState ,useEffect} from 'react';
import '../assets/css/LoanDetails.css';
import AdminAppBar from './AdminHomeNavbar';

const LoanDetails = () => {
  const cardsData = [
    { name: 'Suhaas', id: '4829274', phone: '9080847433', address: 'XXXXXX', email: 'XXXXXX@gmail.com', loan: '400000' },
    { name: 'Gopal', id: '1833270', phone: '957577433', address: 'XXXXXX', email: 'XXXXXX@gmail.com', loan: '800000' },
    { name: 'Shekar', id: '2344291', phone: '919847433', address: 'XXXXXX', email: 'XXXXXX@gmail.com', loan: '100000' },
  ];
  const [isApproved,setisApprove] = useState("");
  useEffect(() => {
    const data = localStorage.getItem('idx');
    setisApprove(data.split(': ')[1])
    console.log(isApproved);
  },[])
 // const isLoanAccepted = localStorage.getItem(false);
  // const idx=localStorage.getItem('idx');
  // console.log(isLoanAccepted);
  // console.log(idx);

  return (
    <div>
      <AdminAppBar/>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Loan Details</h1>
      <div className="card-list">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <p className="card-title">Applicant Name: {card.name}</p>
            <p className="card-title">Application Loan Id: {card.id}</p>
            <p className="card-title">Applicant Phone No: {card.phone}</p>
            <p className="card-title">Application Address: {card.address}</p>
            <p className="card-title">Application Email: {card.email}</p>
            <p className="card-title">Loan Amount: {card.loan}</p>
            <div style={{ display: "flex", paddingLeft: "70px", paddingTop: "20px",flexDirection:"row-reverse" }}>
              {isApproved === card.id ? (
                <div>
                  <button style={{ color: "white", backgroundColor: "green", width: "100px", borderRadius: "6px", borderColor: "green" }}>Accepted</button>
                </div>
              ) : (
                <div>
                  <button style={{ color: "white", backgroundColor: "red", width: "100px", borderRadius: "6px", borderColor: "red" }}>Rejected</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanDetails;