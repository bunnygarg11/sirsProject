import React, { Component } from 'react';
import MaterialTable from 'material-table';
import ProductSetting from './ProductSetting'
import { withStyles } from "@material-ui/core";

const styles = theme => ({

});

interface Props { }

interface State { }

class ProductListing extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showSetting: false,
            columns: [
                { title: 'Product Name', field: 'name' },
                { title: 'Category', field: 'category' },
                { title: 'Bar code', field: 'barcode' },
                {
                    title: 'Retail price',
                    field: 'retailPrice',
                },
                {
                    title: 'Stock amount',
                    field: 'stockAmount',
                },
                {
                    title: 'Last modified',
                    field: 'lastModified',
                },
            ],
            data: [
                { name: 'Mehmet', category: 'Category#1', barcode: '1987AD568536', retailPrice: 63, stockAmount: 6556, lastModified: 6548656 },
                { name: 'Mehmet', category: 'Category#1', barcode: '1987AD568536', retailPrice: 63, stockAmount: 6556, lastModified: 6548656 },
                { name: 'Mehmet', category: 'Category#1', barcode: '1987AD568536', retailPrice: 63, stockAmount: 6556, lastModified: 6548656 },
                { name: 'Mehmet', category: 'Category#1', barcode: '1987AD568536', retailPrice: 63, stockAmount: 6556, lastModified: 6548656 },

            ],
            modalData: {}

        };
    }
    setModalData = (modalData) => {
        this.setState({ modalData, showSetting: true });
    }

    handleModalClose = () => {
        this.setState({ showSetting: false })
    }

    render() {
        const { classes } = this.props;
        const { modalData, showSetting, data, columns } = this.state;
        return (
            <React.Fragment>
                <MaterialTable
                    title={''}
                    columns={columns}
                    data={data}
                    actions={
                        [
                            {
                                icon: 'more_vert',
                                tooltip: 'Product Setting',
                                onClick: (event, rowData) => this.setModalData(rowData)

                            }]}
                />
                {
                    showSetting && <ProductSetting
                        showSetting={showSetting}
                        handleModalClose={this.handleModalClose}
                        data={modalData}
                    />
                }
            </React.Fragment>
        );
    }

}

export default withStyles(styles, { withTheme: true })(ProductListing);
