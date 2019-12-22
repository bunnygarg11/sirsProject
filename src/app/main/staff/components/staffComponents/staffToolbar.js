import React, { Component } from "react";
import { Tab, Tabs, Button, withStyles } from "@material-ui/core";

const styles = theme => ({

});

class Toolbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
      <Tabs
        // value={tabValue}
        // onChange={this.handleChangeTab}
        indicatorColor="secondary"
        textColor="secondary"
        scrollable
        scrollButtons="auto"
        classes={{ root: "w-1/2 h-64" }}
      >
        <Tab className="h-64 normal-case" label="LIST STAFF" />
        <Tab className="h-64 normal-case" label="WORKING HOURS" />
      </Tabs>
      <div className='w-full text-right'>
      <Button
          variant="contained"
          color="primary"
          className = {'mr-16'}
        >
         + Add New
        </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Toolbar);
