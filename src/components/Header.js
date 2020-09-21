import React from "react";
import styled, {withTheme} from "styled-components";
import {connect} from "react-redux";

import {
    AppBar as MuiAppBar,
    Grid,
    Hidden,
    IconButton as MuiIconButton,
    Toolbar
} from "@material-ui/core";

import {Menu as MenuIcon} from "@material-ui/icons";

const AppBar = styled(MuiAppBar)`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  box-shadow: ${props => props.theme.shadows[1]};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Header = ({onDrawerToggle}) => (
    <React.Fragment>
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Hidden mdUp>
                        <Grid item>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={onDrawerToggle}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item xs/>
                    <Grid item>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </React.Fragment>
);

export default connect()(withTheme(Header));
