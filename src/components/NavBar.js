import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Grid,
  Button,
} from "@material-ui/core";
const NavBar = ({ pages }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  // //For mobile compatible drop-down menu
  // const drawer = (
  //   <div>
  //     <List>
  //       pages.map((page, index) =>
  //       <ListItem button component={Link} to={page.path}>
  //         <ListItemText primary={page.name} />
  //       </ListItem>
  //       );
  //     </List>
  //   </div>
  // );
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container justify="space-evenly">
            {pages.map((page, index) => (
              <Grid item key={index}>
                <Button component={Link} to={page.pageLink}>
                  {page.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
