import React ,{Fragment}from 'react';
import MaterialTable from 'material-table';
import {Button}from "@material-ui/core"

export default function MaterialTableDemo({history}) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Telephone', field: 'telephone',type:"numeric" },
      { title: 'Email', field: 'email' },
      {
        title: "Address",
        field: 'address'
        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet',telephone:123456789, email:"mehmet@gmail.com", address:"Delhi"},
      {
        name: 'Zerya Betül',
        telephone:123456789, email:"zerya@gmail.com", address:"Delhi"
      },
    ],
    title: "Demo Title",
    actions: [
      {
        icon: "edit",
        tooltip: "Edit Client",
        onClick: (event, rowData) => history.push("/editclient")
      },
      {
        icon: "remove_red_eye",
        tooltip: "See Client",
        onClick: (event, rowData) => history.push("/seeclient")
      }
    ]
  });

  return (<Fragment>
    <Button
    onClick={()=>{history.push("/newclient")}}
    type="submit"
    variant="contained"
    color="primary"
    className="mx-auto my-16"
    aria-label="LOG IN"
    // disabled={!isFormValid}
  >
    +NEW
  </Button>
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      actions={state.actions}
    />
    </Fragment>
  );
}