import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BookIcon from '@material-ui/icons/Book';
import FeedbackIcon from '@material-ui/icons/Feedback';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import SmsIcon from '@material-ui/icons/Sms';
import { signout } from '../helpers/auth';
import swal from 'sweetalert';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Navbar = props =>{
  const {history} = props;
  const classes = useStyles();
  const menuList = [
    {
    text: "Home",
    icon: <HomeIcon/>,
    onClick: () => history.push("/home")
    },
    {
    text: "Bookings",
    icon: <BookIcon/>,
    onClick: () => history.push("/bookings")
    },
    {
      text: "Payment",
      icon: <AttachMoneyIcon/>,
      onClick: () => history.push("/payment")
    },
    {
    text: "Tournament",
    icon: <EmojiEventsIcon/>,
    onClick: () => history.push("/tournament")
    },
    {
    text: "Notice",
    icon: <SmsIcon/>,
    onClick: () => history.push("/notice")
    },
    {
    text: "Feedbacks",
    icon: <FeedbackIcon/>,
    onClick: () => history.push("/feedbacks")
    },
    {
    text: "Logout",
    icon: <SubdirectoryArrowLeftIcon/>,
    onClick: () => {
      signout(()=>{
          history.push("/login")
          // swal("")
        swal("Logout Successfully", "", "success");
        // .then(() => {
        //   // swal(`The returned value is: ${value}`);
        // });
        
      })
      
    }
    
    },
    
  ];
  return (
    <div className={classes.root}>
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <List>
        {menuList.map((item, index) => {

          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>

          );
        })}
      </List>
    </Drawer>
      </div>
  )
}
export default withRouter(Navbar);
