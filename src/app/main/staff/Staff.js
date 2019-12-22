import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import Content from "./components/staffComponents/staffContent";
import { FusePageCarded } from "@fuse";
import Toolbar from "./components/staffComponents/staffToolbar";
const styles = theme => ({
  layoutRoot: {}
});

class Staff extends Component {
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
              <Icon className='text-4xl'>person</Icon>
              <span>Staffs</span>
            </h1>
          </div>
        }
        contentToolbar={<Toolbar />}
        content={<Content />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Staff);
