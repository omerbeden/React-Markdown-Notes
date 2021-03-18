import React, { useContext } from "react";
import { useAppBarStyles } from "../Styles/AppBarStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import { AppContext } from "../AppContext";

export default function MyAppBar(props) {
  const classes = useAppBarStyles();

  const [open, setOpen] = useContext(AppContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          React Markdown Notes
        </Typography>

        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="end"
          className={clsx(classes.menuButton)}
        >
          <SaveAlt />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
