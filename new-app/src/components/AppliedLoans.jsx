import  { useState } from 'react';
import '../assets/css/AppliedLoans.css';
import AdminAppBar from './AdminHomeNavbar';
const AppliedLoans = () => {
  const cardsData = [
    {  name: 'Applicant Name : monisha', id: 'Application Loan Id : 4829274', phone: 'Applicant Phone No : 9080847433'
,address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com',loan: 'Loan Amount : 400000'},
    {  name: 'Applicant Name : Gopal', id: 'Application Loan Id : 1833270', phone: 'Applicant Phone No : 957577433'
,address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com',loan: 'Loan Amount : 800000'},
    {  name: 'Applicant Name : Shekar', id: 'Application Loan Id : 2344291', phone: 'Applicant Phone No : 919847433'
,address: 'Application Address : XXXXXX', email: 'Application Email : XXXXXX@gmail.com',loan: 'Loan Amount : 100000'},
  ];
  const [isApprove,setisApprove]=useState(false);
  const [idx,setidx]=useState('');
  const handleChange = () => {
    setisApprove(true);
  };
  const handleChangeIdx = (id) => {
    setidx(id);
  };
  const handleChangeInv = () => {
    setisApprove(false);
  };
  const handleChangeIdxInv = (id) => {
    setidx(id);
  };
  localStorage.setItem("idx",idx);
  localStorage.setItem("Approve",isApprove);
  console.log("appprove",isApprove)
  console.log("idx",idx);
  return (
    <div>
      <AdminAppBar/>
      <h1 style={{textAlign:"center",paddingTop:"50px"}}>Applied Loans</h1>
      <div className="card-list">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <p className="card-title">{card.name}</p>
            <p className="card-title">{card.id}</p>
            <p className="card-title">{card.phone}</p>
            <p className="card-title">{card.address}</p>
            <p className="card-title">{card.email}</p>
            <p className="card-title">{card.loan}</p>
            <div style={{display:"flex",paddingLeft:"70px",paddingTop:"20px"}}>
                <div style={{paddingRight:"50px"}}>
                <button style={{color:"white",backgroundColor:"green",width:"140px",borderRadius:"6px",borderColor:"green"}} onClick={() => { handleChange(); handleChangeIdx(card.id); }}>Approve for Loan</button>
                </div>
                <div>
                <button style={{color:"white",backgroundColor:"red",width:"140px",borderRadius:"6px",borderColor:"red"}} onClick={() => { handleChangeInv(); handleChangeIdxInv(card.id); }}>Reject</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedLoans;

