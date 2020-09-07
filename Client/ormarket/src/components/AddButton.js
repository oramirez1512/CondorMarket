import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const handleAdd =require('../actions/index');
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddButton =(productid)=>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (productid) => {
    setOpen(true);
    handleAdd.addToCart(productid)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">Product is added to cart.</p>
          </div>
        </Fade>
      </Modal>
      <Button size="small" color="primary"
      onClick={()=>{handleOpen(productid)}} 
      >Add to cart</Button>
    </div>
  );
}
export default AddButton