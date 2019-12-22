import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import CloseIcon from '@material-ui/icons/Close';
import {
    Button,
    FormControlLabel,
    MenuItem,
    Radio,
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
import Paper from "@material-ui/core/Paper";

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
        // padding: theme.spacing(2, 4, 3),
        width: "80%",
        height: "80%"
    },
    root: {
        flexGrow: 1
    }
}));

export default function ProductSetting(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [formdata, setformdata] = React.useState({
        category: "",
        service_name: "test service",
        duration: "1h",
        price: "10.00",
        description: "i am an extended description",
        staffList: ["sabrina", "vinod", "rahul", "param"]
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.handlemodal();
    };

    const { data } = props
    return (
        <div>

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
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                color: "white"
                            }}
                        >
                            <h2><bold>Product-Settings</bold></h2>

                        </div>
                        <div>
                            <button
                                onClick={handleClose}
                                style={{ float: "right", zIndex: "100" }}
                            >
                                <CloseIcon onClick={handleClose} />
                            </button>
                        </div>
                        <Grid container>
                            <Grid xs={6}>
                                <Formsy className="flex flex-col justify-center m-3">
                                    <TextFieldFormsy
                                        className="my-16"
                                        type="text"
                                        name="CATEGORY"
                                        value={data.category}
                                        variant="outlined"
                                    />


                                    <TextFieldFormsy
                                        className="my-16"
                                        type="text"
                                        name="PRODUCT_NAME"
                                        label="PRODUCT NAME"
                                        value={data.name}
                                        variant="outlined"
                                    />
                                    <Grid xs={16}>

                                        <TextFieldFormsy
                                            className="my-16 mr-2"
                                            type="text"
                                            name="BARCODE"
                                            label="BAR CODE"
                                            value={data.barcode}
                                            variant="outlined"
                                        />
                                        <TextFieldFormsy
                                            className="my-16 ml-2"
                                            type="text"
                                            name="SKU"
                                            label="SKU"
                                            value="kjchkjsdhk68"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <TextFieldFormsy
                                        className="my-16"
                                        type="text"
                                        name="EXTENDEDDESCRIPTION"
                                        value="khcksdhvkhdkhb"
                                        label="EXTENDED DESCRIPTION"
                                        variant="outlined"
                                    />

                                    <Grid>
                                        <TextFieldFormsy
                                            className="my-16 mr-2"
                                            type="text"
                                            name="RETAILPRICE"
                                            value={data.retailPrice}
                                            label="RETAIL PRICE"
                                            variant="outlined"
                                        />
                                        <TextFieldFormsy
                                            className="my-16 ml-2"
                                            type="text"
                                            name="SPECIAL PRICE"
                                            value={data.stockAmount}
                                            label="SPECIAL PRICE"
                                            variant="outlined"
                                        /></Grid>
                                </Formsy>
                            </Grid>
                            <Grid xs={6}>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="mx-auto my-16"
                                    aria-label="LOG IN"
                                // disabled={!isFormValid}
                                >
                                    SETTINGS
</Button>

                                <br />
                                <Formsy className="flex flex-col justify-center">
                                    <h3>Enable commision</h3>
                                    <CheckboxFormsy
                                        className="my-16"
                                        name="accept"
                                        value={true}
                                        label="Calculate commision for the staff when this product is sold."
                                        validations="equals:true"

                                    />

                                </Formsy>
                            </Grid>


                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="my-16 right floated "
                                aria-label="LOG IN"
                            // disabled={!isFormValid}
                            >
                                SAVE
</Button>

                        </Grid>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}