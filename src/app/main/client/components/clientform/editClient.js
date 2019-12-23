import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FusePageCarded } from "@fuse";
import ClientInfo from "./client_Info"
import { Icon } from '@material-ui/core';



const styles = theme => ({
    layoutRoot: {}
  });

  class EditClient extends Component {
      state={
          name:"Bunny",
          Telephone:"123456789",
          email:"b@gmail.com",
          note:"shjdhdkkws"
      }
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
          content={ <ClientInfo formdata={this.state}/>}
        />
      );
    }
  }
  
  export default withStyles(styles, { withTheme: true })(EditClient);
  
