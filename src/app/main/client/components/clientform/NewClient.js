import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageCarded } from "@fuse";
import ClientInfo from "./client_Info"
import { Icon } from '@material-ui/core';



const styles = theme => ({
    layoutRoot: {}
  });

  class NewClient extends Component {
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
                <span>Clients</span>
              </h1>
            </div>
          }
          content={ <ClientInfo/>}
        />
      );
    }
  }
  
  export default withStyles(styles, { withTheme: true })(NewClient);
  
