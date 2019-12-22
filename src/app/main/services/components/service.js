import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  Tabs,
  Icon,
  Tab,
  TextField,
  Typography
} from "@material-ui/core";
import {
  TextFieldFormsy,
  CheckboxFormsy,
  RadioGroupFormsy,
  SelectFormsy,
  FuseChipSelectFormsy
} from "@fuse";
import Formsy from "formsy-react";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "80%",
    height: "80%"
  },
  root: {
    flexGrow: 1
  }
}));

export default function ServiceModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.openModal);
  const [rightcontent, setrightcontent] = React.useState(true);
  const [formdata, setformdata] = React.useState({
    category: "category",
    service_name: props.data.service,
    duration: props.data.duration,
    price: props.data.price,
    description: "i am an extended description",
    staffList: ["sabrina", "vinod", "rahul", "param"]
  });
  const {
    category,
    service_name,
    duration,
    price,
    description,
    staffList,
    icon
  } = formdata;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.handlemodal();
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} style={{ border: "black" }}>
        modal btn
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div
              style={{
                background: "grey",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                color: "white"
              }}
            >
              Service-Settings
            </div>
            <div>
              <CloseIcon
                onClick={handleClose}
                style={{ float: "right", zIndex: "100" }}
              />
            </div>
            <Grid container style={{ padding: "5px" }}>
              <Grid xs={6} style={{ padding: "5px" }}>
                <Formsy className="flex flex-col justify-center">
                  <TextFieldFormsy
                    className="my-16"
                    type="text"
                    value={category}
                    name="CATEGORY"
                    label="CATEGORY"
                    validations={{
                      minLength: 2
                    }}
                    required
                    variant="filled"
                  />
                  <TextFieldFormsy
                    className="my-16"
                    type="text"
                    name="SERVICE_NAME"
                    label="SERVICE NAME"
                    value={service_name}
                    validations={{
                      minLength: 2
                    }}
                    validationErrors={{
                      minLength: "Min character length is 2"
                    }}
                    required
                    variant="filled"
                  />
                  <div style={{ width: "100%" }}>
                    <TextFieldFormsy
                      className="my-16 pr-5"
                      type="text"
                      name="DURATION"
                      label="DURATION"
                      value={duration}
                      validations={{
                        minLength: 2
                      }}
                      validationErrors={{
                        minLength: "Min character length is 4"
                      }}
                      required
                      variant="filled"
                    />
                    <TextFieldFormsy
                      className="my-16"
                      type="numeric"
                      name="PRICE"
                      label="PRICE"
                      value={price}
                      required
                      variant="filled"
                    />
                  </div>
                  {rightcontent ? (
                    ""
                  ) : (
                    <TextField
                      className="mb-16"
                      id="note"
                      name="note"
                      type="text"
                      label="Extended Description"
                      value={description}
                      placeholder="Add a note regarding staff member"
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                </Formsy>
              </Grid>
              <Grid xs={6} style={{ padding: "5px" }}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="secondary"
                  scrollable
                  scrollButtons="auto"
                  classes={{ root: "w-full h-64" }}
                >
                  <Tab
                    className="h-64 normal-case"
                    label="STAFF"
                    value={0}
                    onClick={e => setrightcontent(true)}
                  />
                  <Tab
                    className="h-64 normal-case"
                    label="SETTINGS"
                    value={0}
                    onClick={e => setrightcontent(false)}
                  />
                </Tabs>
                <br />

                <Formsy className="flex flex-col justify-center">
                  {rightcontent ? (
                    <>
                      <SelectFormsy
                        style={{ width: "100%" }}
                        name="related"
                        label="Related with (Outlined)"
                        value="Select All"
                        variant="outlined"
                      >
                        <MenuItem value="0">
                          <em>0min</em>
                        </MenuItem>
                        <MenuItem value="5">5min</MenuItem>
                        <MenuItem value="10">10min</MenuItem>
                        <MenuItem value="15">15min</MenuItem>
                      </SelectFormsy>
                      <p>
                        Add a break after this service to allow staff to clean
                        the instruments, floor, etc.
                      </p>
                      <CheckboxFormsy
                        name="settings"
                        value={true}
                        label="Enable commissions"
                      />
                    </>
                  ) : (
                    <>
                      <p>
                        Select the staff members who can perform this service
                      </p>
                      {staffList.map(staff => (
                        <CheckboxFormsy
                          name="accept"
                          value={true}
                          label={staff}
                        />
                      ))}
                    </>
                  )}
                </Formsy>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mx-auto my-16"
                  aria-label="LOG IN"
                >
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
