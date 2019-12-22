import React, { forwardRef,Fragment } from "react";
// import AddBox from "material-ui/icon/AddBox"
import MaterialTable from "material-table";
import {Button}from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton"

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Arrival", field: "arrivalTime", type:"time"},
      { title: "Client", field: "name" },
      { title: "In salon", field: "inSalon", type: "boolean" },
      {
        title: "Telephone#1",
        field: "Telephone",
        // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        type:"numeric"
      },
      {
        title: "Telephone#2",
        field: "Telephone",
        // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        type:"numeric"
      },
      {
        title: "Send Message",
        field: "Telephone",
        // lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
        type:"numeric"
      },
    //   {
    //     title: "gdxsudsj",
    //     filterable: false,
    //     Cell: props => {
    //     return (
    //     <div>
    //     <IconButton
    //     onClick={() => {
    //     this.handleClickOpen(props.original._id)
    //     console.log("props", props.original._id);
    //     }}
    //     // className={classes.button}
    //     aria-label="Delete"
    //     >
    //     <EditIcon />
    //     </IconButton>
    //     </div>
    //     )}}
    ],
    data: [
    //   { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
    {arrivalTime:21,name:"Angelina Jolie",inSalon:true}
    ],
    title: "Demo Title",
    actions: [
      {
        icon: "edit",
        tooltip: "Save User",
        onClick: (event, rowData) => alert("You saved " + rowData.name)
      }
    ]
  });

  return (
      <Fragment>
    <MaterialTable
      title={state.title}
      columns={state.columns}
      data={state.data}
      actions={state.actions}
     
    />
    {/* <MaterialTable actions={state.actions}/> */}
    </Fragment>
  )

}
