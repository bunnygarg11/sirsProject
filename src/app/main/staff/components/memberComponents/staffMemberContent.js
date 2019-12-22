import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { FuseChipSelect } from "@fuse";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function ServiceModal(props) {
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
              // value={form.width}
              // onChange={this.handleChange}
              variant="outlined"
              style={{ width: "45%" }}
            />

            <TextField
              className="mt-8 mb-16 mr-8"
              label="Surname"
              id="surname"
              name="surname"
              required
              // value={form.height}
              // onChange={this.handleChange}
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
              //   value={form.weight}
              //   onChange={this.handleChange}
              variant="outlined"
              style={{ width: "90%" }}
            />

            <TextField
              className="mt-8 mb-16"
              label="Email"
              id="email"
              name="email"
              required
              //   value={form.extraShippingFee}
              //   onChange={this.handleChange}
              variant="outlined"
              style={{ width: "90%" }}
            />
          </div>
        </Grid>
        <Grid xs={6}>
          <div className=" max-w-md  pt-1">
            <FuseChipSelect
              className="w-full  pb-8 my-16"
              // value={tags}
              // onChange={handleChipChange}
              placeholder="Select Roles"
              textFieldProps={{
                label: "ROLE/S IN SALON",
                InputLabelProps: {
                  shrink: true
                },
                variant: "outlined"
              }}
              // options={suggestions}
              isMulti
            />
            NOTES
            <TextField
              className="mb-16"
              id="note"
              name="note"
              //   onChange={this.handleChange}
              //   label="NOTES"
              type="text"
              //   value={form.description}
              placeholder="Add a note regarding staff member"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="pr-20"
                margin="normal"
                id="date-picker-dialog"
                label="START OF WORKING CONTRACT"
                name="start"
                format="dd/MM/yyyy"
                // value={fromDate}
                // onChange={handleDateChangeFrom}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />

              <KeyboardDatePicker
                className="pl-20"
                margin="normal"
                id="date-picker-dialog"
                label="END OF WORKING CONTRACT"
                name="end"
                format="dd/MM/yyyy"
                // value={toDate}
                // onChange={handleDateChangeTo}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="pt-40 ">
            <Button
              variant="contained"
              color="secondry"
              style={{ marginLeft: "15%" }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "30%" }}
            >
              Save
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
