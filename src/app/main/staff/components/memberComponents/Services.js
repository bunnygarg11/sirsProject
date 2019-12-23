import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Button, Divider } from "@material-ui/core";

class Services extends Component {
  state = {
    services: [
      {
        selectAll: false,
        service1: false,
        service2: false,
        service3: false,
        service4: false
      }
    ]
  };

  handleChange = async event => {
    await this.setState({
      services: [
        { ...this.state.services[0], [event]: !this.state.services[0][event] }
      ]
    });
    if (event === "selectAll") {
      if (this.state.services[0].selectAll === true) {
        this.state.services.map(service => {
          for (let key in service) {
            this.setState({
              services: [{ ...this.state.services[0], [key]: true }]
            });
          }
        });
      } else if (this.state.services[0].selectAll === false) {
        this.state.services.map(service => {
          for (let key in service) {
            this.setState({
              services: [{ ...this.state.services[0], [key]: false }]
            });
          }
        });
      }
    } 
    else {
      this.setState({
        services: [{ ...this.state.services[0], selectAll: false }]
      });
    }
  };

  render() {
    const {
      selectAll,
      service1,
      service2,
      service3,
      service4
    } = this.state.services[0];
    return (
      <React.Fragment>
        <form>
          <div className="ml-20 pt-5">
            Assign Service that this member of staff can perform
          </div>
          <FormGroup row className="ml-20 pt-5">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAll}
                  onChange={e => this.handleChange("selectAll")}
                  value="selectAll"
                  color="primary"
                />
              }
              label="Select All"
            />
          </FormGroup>
          <Divider />
          <Grid container>
            <Grid xs={6}>
              <div className="ml-20 pt-5">
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={service1}
                        onChange={e => this.handleChange("service1")}
                        value="service1"
                        color="primary"
                      />
                    }
                    label="Service 1"
                  />
                </FormGroup>
                <Divider />

                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={service2}
                        onChange={e => this.handleChange("service2")}
                        value="service2"
                        color="primary"
                      />
                    }
                    label="Service 2"
                  />
                </FormGroup>
                <Divider />
              </div>
            </Grid>

            <Grid xs={6}>
              <div className="ml-20 pt-5">
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={service3}
                        onChange={e => this.handleChange("service3")}
                        value="service3"
                        color="primary"
                      />
                    }
                    label="Service 3"
                  />
                </FormGroup>
                <Divider />

                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={service4}
                        onChange={e => this.handleChange("service4")}
                        value="service4"
                        color="primary"
                      />
                    }
                    label="Service 4"
                  />
                </FormGroup>
                <Divider />
              </div>
              <div className="pt-80 pb-10 ml-50 ">
                <Button variant="contained" color="secondry">
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "20%" }}
                >
                  Save
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

export default Services;
