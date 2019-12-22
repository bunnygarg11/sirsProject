import React, { Component } from "react";
import { Tab, Tabs, Button } from "@material-ui/core";

class Toolbar extends Component {
  render() {
    return (
      <Tabs
        // value={tabValue}
        // onChange={this.handleChangeTab}
        indicatorColor="secondary"
        textColor="secondary"
        scrollable
        scrollButtons="auto"
        classes={{ root: "w-full h-64" }}
      >
        <Tab className="h-64 normal-case" label="LIST STAFF" />
        <Tab className="h-64 normal-case" label="WORKING HOURS" />

        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: "60%" }}
        >
          Add New User
        </Button>
      </Tabs>
    );
  }
}

export default Toolbar;
