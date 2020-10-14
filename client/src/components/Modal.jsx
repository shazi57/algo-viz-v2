import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
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

const DialogTitle = withStyles(styles)((props) => {
  const {
    children, classes, onClose, ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Welcome to AlgoViz!
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            In AlgoViz, you can visualize different sorting algorithms by interacting with a slider
            and button controls. Start off by dragging the range-slider located below the size
            section to adjust input size, then press create button. You will be able to see a
            bar-chart based on your
            input given by the range-slider. I recommend starting with a small number of bars in
            order to visualize with a slow speed first.
          </Typography>
          <Typography gutterBottom>
            Next, choose the sorting algorithm you want to visualize and press Start button. If you
            do not choose algorithm, animation will not be rendered!
          </Typography>
          <Typography gutterBottom>
            At anytime if you feel like to start over, just press the clear button. Animation speed
            and the size of bar-chart is scaled based on the input given by the range slider, so
            keep in mind that bigger the input, faster the animation will be rendered!
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}