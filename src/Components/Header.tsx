import React from 'react';
import logo from '../images/ieee_uci_logo_trans_white.svg';
import { Grid, Button, Box } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }),
);

const AboutOptions: {name: string, url: string}[] = [
  {name: 'Meet Our Board', url: '/about/board'},
  {name: 'Who Are We?', url: '/about/who'}
]

const ProjectOptions: {name: string, url: string}[] = [
  {name: 'Micromouse', url: '/projects/micromouse'},
  {name: 'Arcade Machine', url: '/projects/arcade'}
]


function DropDown(props: {name: string, options: {name: string, url: string}[]}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  let history = useHistory();


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>, url: string) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    if(url !== "" && history !== undefined){
      history.push(url);
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {props.name}<ArrowDropDownIcon/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={(event: React.MouseEvent<EventTarget>) => handleClose(event, "")}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {props.options.map((option) => (
                      <MenuItem style={{color: 'black'}} onClick={(event: React.MouseEvent<EventTarget>) => handleClose(event, option.url)}>{option.name}</MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default function Header() {
  let history = useHistory();

  const handleClick = (url: string) => {
    history.push('/');
    history.push(url);
  };

  return(
    <header className='App-header' style={{height: 60, background: 'linear-gradient(to right, #33BFFF, #2A6AC6)'}}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <img src={logo} style={{height: 200, marginTop: -55}} className="App-logo" alt="logo" />
        <Box marginRight={4} marginTop={-10.5}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Button onClick={() => handleClick('/')}>Home</Button>
            <DropDown name="About" options={AboutOptions}/>
            <DropDown name="Project" options={ProjectOptions}/>
            <Button onClick={() => handleClick('events')}>Events</Button>
          </Grid>
        </Box>
      </Grid>
    </header>

  );
}
