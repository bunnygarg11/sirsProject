
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageCarded } from "@fuse";
import WelcomeTable from "./components/welcomeTable";
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
              <Icon className='text-4xl'>home</Icon>
              <span>Welcome</span>
            </h1>
          </div>
        }
        content={ <WelcomeTable />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Welcome);

