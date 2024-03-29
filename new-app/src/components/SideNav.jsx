// SideNav.jsx

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidenav.css';

export default function SideNav() {
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  const handleOverlayClick = () => {
    closeSideNav();
  };

  return (
    <div>
      {isSideNavOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '250px',
            backgroundColor: 'white',
            overflowY: 'auto',
            boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1000, // Ensure a higher z-index
          }}
          onClick={handleOverlayClick}
        >
          <List>
            {[
              { name: 'DashBoard', link: "/chart" },
              { name: 'Apply Loan', link: "/home" },
              { name: 'Track Loan', link: "/trackloan" },
              { name: 'Logout', link: "/" },
            ].map((text, index) => (
              <ListItem key={text.name} disablePadding className='helloo'>
                <ListItemButton style={{ padding: '18px', color: 'black' }} onClick={() => { navigate(text.link); closeSideNav(); }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      <button onClick={toggleSideNav} style={{ background: 'transparent', border: 'none', zIndex: 999 }}> {/* Ensure a lower z-index */}
        <MenuIcon style={{ color: "white" }} />
      </button>
    </div>
  );
}
