import React, { Component } from "react";
import { Tab, Tabs, Button, withStyles } from "@material-ui/core";

const styles = theme => ({});

class Toolbar extends Component {
  state = {
    switchTab: 0
  };

  setSwitchTab = val => {
    this.setState({ switchTab: val });
  };
  render() {
    const { switchTab } = this.state;
    return (
      <React.Fragment>
        <Tabs
          value={switchTab}
          indicatorColor="secondary"
          textColor="secondary"
          scrollable="true"
          scrollButtons="auto"
          classes={{ root: "w-1/2 h-64" }}
        >
          <Tab
            onClick={e => {
              this.setSwitchTab(0);
              this.props.setSwitchContent(0);
            }}
            className="h-64 normal-case"
            label="LIST STAFF"
          />
          <Tab
            onClick={e => {
              this.setSwitchTab(1);
              this.props.setSwitchContent(1);
            }}
            className="h-64 normal-case"
            label="WORKING HOURS"
          />
        </Tabs>
        {switchTab === 0 ? (
          <div className="w-full text-right">
            <Button
              variant="contained"
              color="primary"
              className={"mr-16"}
              onClick={e => this.props.setSwitchToolbar(1)}
            >
              + Add New
            </Button>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Toolbar);
