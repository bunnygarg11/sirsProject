import React from 'react';
import MaterialTable from 'material-table';
import ProductSetting from './ProductSetting'
export default function ProductListing(){
    const [state, setState] = React.useState({
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
        
    });
    const [comp, setComp] = React.useState(null);
    const handlemodal = () => {
        setComp(null);
    };
   
    return (
        <div>
        <MaterialTable
            title="Editable Example"
            actions={
                [
                    {
                        icon: 'more_vert',
                        tooltip: 'Product Setting',
                        onClick: (event, rowData) => setComp(
                            <ProductSetting openModal={true} handlemodal={handlemodal} data={rowData}/>
                        )
                    
                    }
                ]}
            columns={state.columns}
            data={state.data}
          
        />
            {comp}
        </div>
    );
}

