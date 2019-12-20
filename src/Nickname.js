import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 150,
      float: 'left',
    },
},
button: {
    width: '10%',    
},

}));





export default function NickName() {
  const classes = useStyles();
  const [textValue, changeTextValue ] = React.useState('');

  return (
        
    <form className={classes.root} noValidate autoComplete="off">    
      <TextField 
      className={classes.chatBox}
      value={textValue} 
      id="filled-basic" 
      label="NickName" 
      variant="filled"
      onChange={e => changeTextValue(e.target.value)} 
      />

      <Button 
        onClick={() => {            
            changeTextValue('')
        }}
       className={classes.button} variant="contained" color="primary">
        Go
      </Button>  
    </form>
    
  );
}