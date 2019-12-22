import React, {Component} from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

import {
  Button,
  MenuItem,
  Radio,
  Tabs,
  Icon,
  Tab,
  TextField,
  withStyles
} from "@material-ui/core";
import {
  TextFieldFormsy,
  CheckboxFormsy,
  RadioGroupFormsy,
  SelectFormsy,
  FuseChipSelectFormsy
} from "@fuse";
import Formsy from "formsy-react";

const styles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: "80%",
    height: "80%"
  },
  root: {
    flexGrow: 1
  }
});

interface Props {}

interface State {}

class ServiceModal extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            rightcontent: 0,
            service :{
                category: "category",
                service_name: props.data.service,
                duration: props.data.duration,
                price: props.data.price,
                description: "i am an extended description",
            },
            staffList: ["sabrina", "vinod", "rahul", "param"]
        };
    }

    setrightcontent = (rightcontent) => {
      debugger
        this.setState({rightcontent: rightcontent});
    }

    render() {

        const {classes} = this.props;
        const { service, rightcontent, staffList } = this.state;
       
        return (
           <React.Fragment>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.props.showService}
                    onClose={this.props.handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={this.props.showService}>
                    <div className={classes.paper}>
                        <div
                        style={{
                            background: "#192D3E",
                            padding: "15px",
                            display: "flex",
                            color: "white"
                        }}
                        >
                        <Grid xs={6} style={{ padding: "5px" }}>
                            Service-{ (rightcontent === 0 && 'Staff') || (rightcontent === 1 && 'Settings')}
                        </Grid>
                        <Grid xs={6} style={{ padding: "5px" }}>              
                            <CloseIcon
                            onClick={this.props.handleModalClose}
                            style={{ float: "right", zIndex: "100" }}
                            />
                        </Grid>
                        </div>
                    
                        <Grid container style={{ padding: "5px" }}>
                        <Grid xs={6} style={{ padding: "5px" }}>
                            <Formsy className="flex flex-col justify-center">
                            <TextFieldFormsy
                                className="my-16"
                                type="text"
                                value={service.category}
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
                                value={service.service_name}
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
                                value={service.duration}
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
                                value={service.price}
                                required
                                variant="filled"
                                />
                            </div>
                            {rightcontent == 1 && (
                                <TextField
                                className="mb-16"
                                id="note"
                                name="note"
                                type="text"
                                label="Extended Description"
                                value={service.description}
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
                            value={rightcontent}
                            indicatorColor="secondary"
                            textColor="secondary"
                            scrollable
                            scrollButtons="auto"
                            classes={{ root: "w-full h-64" }}
                            >
                              <Tab onClick={e => this.setrightcontent(0)} className="h-64 normal-case" label="STAFF"/>
                              <Tab onClick={e => this.setrightcontent(1)} className="h-64 normal-case" label="SETTINGS"/>
                            </Tabs>
                            <br />

                            <Formsy className="flex flex-col justify-center">
                            { rightcontent == 0 && (
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
                            ) }
                            { rightcontent == 1 && (
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
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ServiceModal);