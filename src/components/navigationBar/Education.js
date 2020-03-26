import React, {Fragment} from 'react';
import UCSD from './geisel.jpeg'
import SWC from './SWC.png'

import CustomizedDialogs from "./Modal";





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
      <div>
          <div className="hero-body has-background-grey-light">
              <div className="container has-text-centered">
                  <div className="columns is-vcentered">
                      <div className="column is-5">
                          <figure className="image is-4by3" >
                              <img src={UCSD} alt="Description" />
                          </figure>
                      </div>
                      <div className="column is-6 is-offset-1">
                          <h1 className="title is-2">
                              University of California, San Diego
                          </h1>
                          <h2 className="subtitle is-4">
                              B.S. Mathematics - Computer Science
                          </h2>
                          <br />
                          <p className="has-text-centered">
                              <a className="button is-medium is-info is-outlined" onClick={handleClickOpen.bind(this, "dialog1")}>
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
                              Southwestern College
                          </h1>
                          <h2 className="subtitle is-4">
                              A.S Mathematics
                              <br/>
                              A.A Mathematics
                          </h2>
                          <br />
                          <p className="has-text-centered">
                              <a className="button is-medium is-info is-outlined" onClick={handleClickOpen.bind(this, "dialog2")}>
                                  Coursework
                              </a>
                          </p>
                      </div>
                      <div className="column is-5">
                          <figure className="image is-4by3">
                              <img src={SWC} alt="Description22" />
                          </figure>
                      </div>
                  </div>
              </div>
          </div>



          <Dialog onClose={handleClose} className="dialog2 has-text-centered " aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" className="is-info" onClose={handleClose.bind(this,"dialog1close")}>
                  UCSD Coursework
              </DialogTitle>
              <DialogContent dividers>

                  <div className="tags">
                      <span className="tag is-info is-light is-medium">PRE-CALCULUS WITH TRIGONOMETRY</span>
                      <span className="tag is-info is-light is-medium">ELEMENTARY STATISTICS</span>
                      <span className="tag is-info is-light is-medium">INTRODUCTION TO COMPUTER PROGRAMMING</span>
                      <span className="tag is-info is-light is-medium">DATA STRUCTURES AND ALGORITHMS</span>
                      <span className="tag is-info is-light is-medium">COMPUTER ORGANIZATION AND ARCHITECTURE</span>
                      <span className="tag is-info is-light is-medium">ANALYTIC GEOMETRY AND CALCULUS I,II,III</span>
                      <span className="tag is-info is-light is-medium">INTRODUCTION TO DIFFERENTIAL EQUATIONS</span>
                      <span className="tag is-info is-light is-medium">INTRODUCTION TO LINEAR ALGEBRA</span>
                      <span className="tag is-info is-light is-medium">DISCRETE MATHEMATICS</span>
                  </div>

                  <Typography gutterBottom>
                  </Typography>

              </DialogContent>
              <DialogActions>
                  <Button autoFocus onClick={handleClose.bind(this,"dialog1close")} color="primary">
                      Save changes
                  </Button>
              </DialogActions>
          </Dialog>


          {/* eslint-disable-next-line no-undef */}
          <Dialog onClose={handleClose} className="dialog2 has-text-centered" aria-labelledby="customized-dialog-title" open={open2}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  SWC Coursework
              </DialogTitle>
              <DialogContent dividers>
                  <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                  <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                      lacus vel augue laoreet rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                  </Typography>
              </DialogContent>
              <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                      Save changes
                  </Button>
              </DialogActions>
          </Dialog>








      </div>
///Users/jsonavalos/app/my-app/src/components/navigationBar
    );
}
export default Education;