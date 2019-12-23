import React, { Component } from "react";
import { withStyles, Icon } from "@material-ui/core";
import { FusePageCarded } from "@fuse";
import ListStaff from "./components/staffComponents/ListStaff";
import Workinghours from "./components/staffComponents/WorkingHours";
import StaffToolbar from "./components/staffComponents/StaffToolbar";
import MemberToolbar from "./components/memberComponents/MemberToolbar";
import StaffInfo from "./components/memberComponents/StaffInfo";
import Services from "./components/memberComponents/Services";
import Commission from "./components/memberComponents/Commission";
const styles = theme => ({
  layoutRoot: {}
});

class Staff extends Component {
  state = {
    switchToolbar: 0,
    switchContent: 0
  };
  ///////////// method to change toolbar ////////////
  setSwitchToolbar = toolbarValue => {
    this.setState({ switchToolbar: toolbarValue });
  };

  ///////////// method to change content ////////////
  setSwitchContent = contentValue => {
    this.setState({ switchContent: contentValue });
  };
  render() {
    const { switchToolbar, switchContent } = this.state;

    const { classes } = this.props;
    return (
      <FusePageCarded
        classes={{
          root: classes.layoutRoot
        }}
        header={
          <div className="p-24">
            <h1 className="text-4xl">
              <Icon className="text-4xl">person</Icon>
              <span>Staffs</span>
            </h1>
          </div>
        }
        /////////// Which toolbar should render condition ////////////////
        contentToolbar={
          switchToolbar === 0 ? (
            <StaffToolbar
              setSwitchToolbar={this.setSwitchToolbar}
              setSwitchContent={this.setSwitchContent}
            />
          ) : (
            <MemberToolbar setSwitchContent={this.setSwitchContent} />
          )
        }
        /////////// Which content should render condition ////////////////
        content={
          switchToolbar === 0 ? (
            switchContent === 0 ? (
              <ListStaff setSwitchToolbar={this.setSwitchToolbar} />
            ) : (
              <Workinghours />
            )
          ) : switchContent === 0 ? (
            <StaffInfo />
          ) : switchContent === 1 ? (
            <Services />
          ) : switchContent === 2 ? (
            <Commission />
          ) : (
            <ListStaff setSwitchToolbar={this.setSwitchToolbar} />
          )
        }
      />
    );
  }
}

export default withStyles(styles, { withTheme: true })(Staff);
