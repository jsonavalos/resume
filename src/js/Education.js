/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CSSfiles/HomeCSS.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
root: {
margin: 0,
padding: theme.spacing(2),
},
closeButton: {
position: 'absolute',
right: theme.spacing(1),
top: theme.spacing(1),
color: theme.palette.grey[500],
},
});
const DialogTitle = withStyles(styles)(props => {
const { children, classes, onClose, ...other } = props;
return (
<MuiDialogTitle disableTypography className={classes.root} {...other}>
   <Typography variant="h6">{children}</Typography>
   {onClose ? ( //the x on top
   <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
      <CloseIcon />
   </IconButton>
   ) : null}
</MuiDialogTitle>
);
});
const DialogContent = withStyles(theme => ({
root: {
padding: theme.spacing(2),
},
}    ) ) (MuiDialogContent);
const DialogActions = withStyles(theme => ({
root: {
margin: 0,
padding: theme.spacing(1),
},
}))(MuiDialogActions);
function Education() {
const [open, setOpen ] = React.useState(false);
const [open2, setOpen2 ] = React.useState(false);
const handleClickOpen = (a) => { //handle a == string of id ! to identigy calling function
if(a === "dialog1") {
setOpen(true);
}
else{
setOpen2(true);
}
};
const handleClose = (a) => {
if(a === "dialog1close") {
setOpen(false);
}
else{
setOpen2(false);
}
};
return (
<div id="education" className="hero-body  ">
   <div className="hero-body ">
      <div className="container has-text-centered">
         <div className="columns is-vcentered">
            <div className="column is-5">
               <figure className="image is-4by3"  >
                  <img src="https://wn7wsg.bn.files.1drv.com/y4mHXYDZ8O33p6hFhNCcjbogiZyxKaszXOy1oVrjlmRNhucRCj6mWdTx7l5sW3Xq-g5hobhUOv_UEWBtqQhuLMEnRvJUPjOzuARLqfKvoimVZZMqCzpdrJcgDjWFNRAFuxzuT-hfXLJjHzBW76JMnvRNMT4DMbcN1CM1GBmtEDcjuXPPQExIhgeJC4niQg3_y-H26NkFX5hl9RaLekTmp_WIQ?" alt="Description" className="UCSDimage" id="UCSDimage" />
               </figure>
            </div>
            <div className="column is-6 is-offset-1">
               <h1 className="title is-2 " id="ucsdTitle">
                  University of California, San Diego
               </h1>
               <h2 className="subtitle is-4 is-white" id="degrees">
                  B.S. Mathematics - Computer Science
               </h2>
               <br />
               <p className="has-text-centered">
                  <a id="UCSDButton" className="button is-medium is-primary is-outlined" onClick={handleClickOpen.bind(this, "dialog1")}>
                  Coursework
                  </a>
               </p>
            </div>
         </div>
      </div>
      <div className="container has-text-centered">
         <div className="columns is-vcentered">
            <div className="column is-6 is-offset-1">
               <h1 className="title is-2">
                  <h1 className="title is-2" id="ucsdTitle">
                     Southwestern College
                  </h1>
               </h1>
               <h2 className="subtitle is-4" id="degrees">
                  A.S. Mathematics
                  <br/>
                  A.A Mathematics
               </h2>
               <br />
               <p className="has-text-centered">
                  <a className="button is-medium is-primary is-outlined" id="UCSDButton" rel="noopener noreferrer" onClick={handleClickOpen.bind(this, "dialog2")}>
                  Coursework
                  </a>
               </p>
            </div>
            <div className="column is-5">
               <figure className="image is-4by3" >
                  <img src="https://wn4fvq.bn.files.1drv.com/y4mTVAqB72O4naFo5F4_KMBpdYR23UCjtmV9Cw2PSq8jswMjixSJ8DLsypTTM1U3kZhoMG8OJo_oJ4GIDWHQbwr3eINa4CG-79H2yeC70kDkeC03oOzAVpaWu3S0XBkMryPyQsVXkT4nBRpsQm1GTky-rLUoDApduM9nNsAvLx6tzVxxH7-8b2BjGGiBhyslP2sS-ixogomz_G2LSV9EfQOUQ?" alt="Description22" id="educationimages" />
               </figure>
            </div>
         </div>
      </div>
   </div>
   <Dialog onClose={handleClose} className="dialog2 has-text-centered " aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" className="has-background-primary" onClose={handleClose.bind(this,"dialog1close")}>
         UCSD Coursework
      </DialogTitle>
      <DialogContent dividers>
         <div className="content">
            <p className="title is-2  is-family-code">
               COMPUTER SCIENCE
            </p>
            <ol type="1" className="has-text-left is-family-code">
               <li >THEORY OF COMPUTABILITY</li>
               <li >COMPUTER IMPLEMENTATIONS OF DATA STRUCTURES</li>
               <li >DESIGN AND ANALYSIS OF ALGORITHMS</li>
               <li>MATHEMATICS FOR ALGORITHMS AND SYSTEMS ANALYSIS (FOUNDATIONS OF COMPUTER SCIENCE)</li>
               <li>SOFTWARE TOOLS AND TECHNIQUES</li>
               <li>SOFTWARE ENGINEERING</li>
               <li>PRINCIPLES OF COMPUTER OPERATING SYSTEMS</li>
               <li>ADVANCED SOFTWARE ENGINEERING</li>
            </ol>
         </div>
         <hr/>
         <div className="content">
            <p className="title is-2 is-family-code">
               MATHEMATICS
            </p>
            <ol type="1" className="has-text-left is-family-code">
               <li>INTRODUCTION TO CRYPTOGRAPHY</li>
               <li>THE MATHEMATICS OF MODERN CRYPTOGRAPHY</li>
               <li>INTRO TO COMPUTATIONAL STATISTICS</li>
               <li >MATHEMATICAL REASONING</li>
               <li >MODERN APPLIED ALGEBRA I,II</li>
               <li >ANALYTIC GEOMETRY AND CALCULUS I,II,III</li>
               <li>NUMERICAL LINEAR ALGEBRA I,II,III</li>
               <li >INTRO TO PROBABILITY</li>
               <li >COMBINATORICS</li>
            </ol>
         </div>
         <Typography gutterBottom>
         </Typography>
      </DialogContent>
      <DialogActions>
         <Button autoFocus className="button is-info" onClick={handleClose.bind(this,"dialog1close")} color="danger">
         OK
         </Button>
      </DialogActions>
   </Dialog>
   {/* eslint-disable-next-line no-undef */}
   <Dialog onClose={handleClose} className="dialog2 has-text-centered " aria-labelledby="customized-dialog-title" open={open2}>
      <DialogTitle id="customized-dialog-title" className="has-background-primary" onClose={handleClose}>
         SWC Coursework
      </DialogTitle>
      <DialogContent dividers>
         <div className="content">
            <p className="title is-2 is-family-code">
               MATHEMATICS
            </p>
            <ol type="1" className="has-text-left is-family-code">
               <li >PRE-CALCULUS WITH TRIGONOMETRY</li>
               <li >ELEMENTARY STATISTICS</li>
               <li >ANALYTIC GEOMETRY AND CALCULUS I,II,III</li>
               <li >INTRODUCTION TO DIFFERENTIAL EQUATIONS</li>
               <li >INTRODUCTION TO LINEAR ALGEBRA</li>
               <li >DISCRETE MATHEMATICS</li>
            </ol>
         </div>
         <hr/>
         <div className="content">
            <p className="title is-2 is-family-code">
               COMPUTER SCIENCE
            </p>
            <ol type="1" className="has-text-left is-family-code">
               <li >INTRODUCTION TO COMPUTER PROGRAMMING</li>
               <li >DATA STRUCTURES AND ALGORITHMS</li>
               <li >COMPUTER ORGANIZATION AND ARCHITECTURE</li>
            </ol>
         </div>
      </DialogContent>
      <DialogActions>
         <Button autoFocus className="button is-info is-outlined" onClick={handleClose} color="primary">
         Ok
         </Button>
      </DialogActions>
   </Dialog>
</div>
///Users/jsonavalos/app/my-app/src/components/navigationBar
);
}
export default Education;