import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
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
            <h4>Header</h4>
          </div>
        }
        contentToolbar={<Toolbar />}
        content={<Content />}
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Staff);
