import AdminAppBar from "../components/AdminHomeNavbar";
import back from "../assets/images/admin.jpg";
import Footer from '../components/Footer';

function AdminHome() {
    const containerStyle = {
        padding: '50px',
        color: '#333',
        minHeight: '100vh',
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
       
      };
    
  const textStyle = {
    color:'white',
    textAlign: 'center',
    borderRadius: '8px',
    paddingBottom:'100px'
   
  };
  return (
    <div>
    <AdminAppBar/>

      <div style={containerStyle}>
        
          <div style={textStyle}>
            <h1 >Welcome Admin!<hr></hr>Manage and oversee the loan approval processes efficiently and securely.</h1>
          </div>
         
      
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;