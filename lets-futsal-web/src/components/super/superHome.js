// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import {
//   List,
//   Datagrid,
//   TextField,
//   DateField,
//   EditButton,
//   DeleteButton,
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const SuperHome = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             Super Admin
//           </Typography>
//           <Button color="inherit">Logout</Button>
//         </Toolbar>
//       </AppBar>
//       <List {...props}>
//       <Datagrid>
//         <TextField source='id' />
//         <TextField source='title' />
//         <DateField source='publishedAt' />
//         <EditButton basePath='/posts' />
//         <DeleteButton basePath='/posts' />
//       </Datagrid>
//     </List>
//     </div>
//   );
// }
// export default SuperHome;