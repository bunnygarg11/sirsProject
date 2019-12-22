import React, { Component } from "react";
import { Tab, Tabs } from "@material-ui/core";

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
        <Tab className="h-64 normal-case" label="STAFF INFO" />
        <Tab className="h-64 normal-case" label="SEVICES" />
        <Tab className="h-64 normal-case" label="COMMISSION" />
      </Tabs>
    );
  }
}

export default Toolbar;
