import '../assets/css/ApplyLoan.css'
import { useNavigate } from 'react-router';
import HomeAppBar from './FarmerHomeNavbar';
const ApplyLoan_page1= () => {
    const navigate =useNavigate();
    const hello =() =>{
        navigate('/applyloan2')
    }
  return (
    <>
    <HomeAppBar/>
    <div className='body22'>
    <div className="container99">
      <div className="title1">LOAN DETAILS</div>
      <form action="#" onSubmit={hello}>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Applicant Name:</span>
            <input type="text" placeholder="Enter Applicant Name" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant Address:</span>
            <input type="text" placeholder="Enter Applicant Address" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant Email:</span>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant mobile:</span>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="012-345-6789"
              required
              />
          </div>
          <div className="input__box">
            <span className="details">Applicant Aadhaar:</span>
            <input type="tel"
              pattern="[0-9]{12}" placeholder="Enter Aadhar number" required />
          </div>
          <div className="input__box">
            <span className="details">Applicant PAN NO:</span>
            <input type="text" placeholder="Enter PAN number" required />
          </div>
          {/* <div className="input__box">
            <span className="details">Enter the Time Of the Event</span>
            <input type="time" placeholder="Event Time" required />
          </div> */}
          <div className="input__box">
            <span className="details">Applicant Salary:</span>
            <input type="text" placeholder="Enter Applicant Salary" required />
          </div>
        <div className="input__box">
          <span className="details">Repayment months:</span>
          <input type="text" placeholder="Loan Repayment months" required />
        </div>
        </div>
        {/* <div className="gender__details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender__title">Gender</span>
          <div className="category">
          <label htmlFor="dot-1">
          <span className="dot one"></span>
          <span>Male</span>
          </label>
          <label htmlFor="dot-2">
          <span className="dot two"></span>
          <span>Female</span>
          </label>
          </div>
        </div> */}
        <div >
            <button type ="submit" className="button33" >Next Page</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default ApplyLoan_page1;