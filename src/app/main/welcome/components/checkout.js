import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageCarded } from "@fuse";
import Checkout from "./checkoutContent";
import { Icon } from '@material-ui/core';

const styles = theme => ({
  layoutRoot: {}
});

class Welcome extends Component {
  render() {
    const { classes } = this.props;

    return (
      <FusePageCarded
        classes={{
          root: classes.layoutRoot
        }}
        header={
          <div className="p-24">
            <h1 className="text-4xl">
              <Icon className='text-4xl'>shopping_cart</Icon>
              <span>Client Checkout</span>
            </h1>
          </div>
        }
        content={ <Checkout />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Welcome);

