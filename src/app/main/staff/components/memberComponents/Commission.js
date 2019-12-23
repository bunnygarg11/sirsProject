import React, { Component } from "react";
import { TextField, Grid, Button, InputAdornment } from "@material-ui/core";

class Content extends Component {
  render() {
    return (
      <form>
        <Grid container>
          <Grid xs={4}>
            <div className="ml-20 pt-5">
              <TextField
                autoFocus
                className="mt-8 mb-16"
                label="Service Commission"
                id="serviceCommission"
                name="serviceCommission"
                // value={}
                // onChange={}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
                style={{ width: "80%" }}
              />
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="ml-20 pt-5">
              <TextField
                className="mt-8 mb-16"
                label="Product Commision"
                id="productCommission"
                name="productCommission"
                // value={}
                // onChange={}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
                style={{ width: "80%" }}
              />
            </div>
            <div className="pt-80 pb-10 pl-40">
              <Button variant="contained" color="secondry">
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "15%" }}
              >
                Save
              </Button>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="ml-20 pt-5">
              <TextField
                className="mt-8 mb-16"
                label="Start/Stop Commission"
                id="startStopCommission"
                name="startStopCommission"
                // value={}
                // onChange={}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
                style={{ width: "80%" }}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    );
  }
}
export default Content;
