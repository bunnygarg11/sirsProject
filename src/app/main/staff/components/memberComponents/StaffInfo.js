import React, { Component } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { FuseChipSelect } from "@fuse";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

class Content extends Component {
  render() {
    return (
      <form>
        <Grid container>
          <Grid xs={6}>
            <div className="ml-20 pt-5">
              <TextField
                className="mt-8 mb-16 mr-8 "
                label="Name"
                autoFocus
                id="name"
                name="name"
                required
                // value={}
                // onChange={}
                variant="outlined"
                style={{ width: "45%" }}
              />

              <TextField
                className="mt-8 mb-16 mr-8"
                label="Surname"
                id="surname"
                name="surname"
                required
                // value={}
                // onChange={}
                variant="outlined"
                style={{ width: "44%" }}
              />
              <br />
              <TextField
                className="mt-8 mb-16"
                label="Mobile"
                id="mobile"
                name="mobile"
                required
                //   value={}
                //   onChange={}
                variant="outlined"
                style={{ width: "90%" }}
              />

              <TextField
                className="mt-8 mb-16"
                label="Email"
                id="email"
                name="email"
                required
                //   value={}
                //   onChange={}
                variant="outlined"
                style={{ width: "90%" }}
              />
            </div>
          </Grid>
          <Grid xs={6}>
            <div className=" max-w-md  pt-1">
              <FuseChipSelect
                className="w-full  pb-8 my-16"
                // value={}
                // onChange={}
                placeholder="Select Roles"
                textFieldProps={{
                  label: "ROLE/S IN SALON",
                  InputLabelProps: {
                    shrink: true
                  },
                  variant: "outlined"
                }}
                // options={}
                isMulti
              />
              NOTES
              <TextField
                className="mb-16"
                id="note"
                name="note"
                //   onChange={}

                type="text"
                //   value={}
                placeholder="Add a note regarding staff member"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="START OF WORKING CONTRACT"
                  name="start"
                  format="dd/MM/yyyy"
                  // value={}
                  // onChange={}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="END OF WORKING CONTRACT"
                  name="end"
                  format="dd/MM/yyyy"
                  // value={}
                  // onChange={}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="pt-40 pb-10 ">
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
    );
  }
}
export default Content;
