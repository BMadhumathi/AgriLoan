import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import back1 from "../assets/images/Paddy.jpeg";
import back2 from "../assets/images/banner.jpg";
import back3 from "../assets/images/acash.jpg";
import back4 from "../assets/images/track.jpg";
import back5 from "../assets/images/cow.jpg";
import '../assets/css/Apply.css';
import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';
import { useNavigate } from 'react-router-dom';
import HomeAppBar from './FarmerHomeNavbar';

const Home = () => {
  const navigate = useNavigate();
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;

const a="Kisan Bhagidari Prathmikta Humaari ";
const b="Kisan Bhagidari Prathmikta Campaign ";
const c="Kisan Milk Credit Cards ";
const d="Kisan Animal Husbandry ";



  
  const handleShareClick = () => {
    
    SharedState.setSharedContent(a);
    console.log(SharedState.content);
    navigate('/applyloan1')
 
  };
  const handleShareClick2 = () => {
    
    SharedState.setSharedContent(b);
    console.log(SharedState.content);
    navigate('/applyloan1')
 
  };
  const handleShareClick3 = () => {
    
    SharedState.setSharedContent(c);
    console.log(SharedState.content);
    navigate('/applyloan1')
 
  };
  const handleShareClick4 = () => {
    
    SharedState.setSharedContent(d);
    console.log(SharedState.content);
    navigate('/applyloan1')
  };
  return (
    
    <div className='nn'style={{ backgroundColor:'black', backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>
    <HomeAppBar/>
   
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between',flex:'1' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' ,flex:'1'}}>

        <CardMedia
          sx={{ height: 140 }}
          image={back1}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Crop Loan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of Kisan Credit Card(KCC) saturation drive,titled as<u>{a}</u>(KBPH)from Apr 24 to May 1.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px',flex:'1' }}>
      <CardMedia
      sx={{ height: 140 }}
      image={back5}
     
    />        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         Machinery Loan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agri & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘<u>{b}</u>’ as a JanBhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick2}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px',flex:'1' }}>
      <CardMedia
          sx={{ height: 140 }}
          image={back3}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          LiveStock Loan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with <u>{c}</u>.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick3}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px',flex:'1' }}>
      <CardMedia
      sx={{ height: 140 }}
      image={back4}
     
    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
        Product Loan          
       </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th Nov 2021 to 15th Feb 2022, for providing Kisan Credit Card facility to all eligible <u>{c}</u> and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick4}>
          Apply
        </Button>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px',flex:'1' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://tamilorganicfarming.files.wordpress.com/2020/05/n01539083451agri-loan-3.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of seed,subject to maximum Rs.1200/- per Quintal,whichever is less providing affordable access to quality seeds,improving agri practices</Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' ,flex:'1'}}>
        <CardMedia
          sx={{ height: 140 }}
          image={back2}

          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' ,flex:'1'}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmWrSz-dRMyrUEN7QESxZYch0LHnnXQYa9Q&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50 farmers / Agricultural labourers will be trained in a cluster with the financial assistance of Rs.5000/- per training,fostering sustainable agri practices.</Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6847"size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px',flex:'1' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRhgUFiNDdBEftKV3sQ9Vo10felj1k2F7ig&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
}
export default Home;