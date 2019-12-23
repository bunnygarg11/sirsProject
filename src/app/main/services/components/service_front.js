import React, { forwardRef, Component } from "react";
import MaterialTable from "material-table";
import ServiceModal from "./service";
import {withStyles} from "@material-ui/core";

const styles = theme => ({

});

interface Props {}

interface State {}

class ServiceList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showService: false,
            columns: [
                { title: "Services", field: "service" },
                { title: "Duration", field: "duration" },
                { title: "Price", field: "price", type: "numeric" }
            ],
            data: [
                { service: "service1", duration: "2h", price: 250 },
                { service: "service2", duration: "1h", price: 350 }
            ],
            modalData: {}
        };
    }

    setModalData = (modalData) => {
       this.setState({modalData, showService : true});
    }

    handleModalClose = () => {
        this.setState({showService : false})
    }

    render() {

        const {classes} = this.props;
        const { modalData, showService, data, columns } = this.state;
       
        return (
           <React.Fragment>
                <MaterialTable
                    title={''}
                    columns={columns}
                    data={data}
                    actions={[{
                        icon: "more_vert",
                        tooltip: "Product Services",
                        onClick: (e, rowData) => this.setModalData(rowData)
                    }]}
                />
                {
                    showService && <ServiceModal
                        showService={showService}
                        handleModalClose={this.handleModalClose}
                        data={modalData}
                        />
                }
            </React.Fragment>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ServiceList);