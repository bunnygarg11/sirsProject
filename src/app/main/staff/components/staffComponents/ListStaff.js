import React, { Component } from "react";

import MaterialTable from "material-table";

class Content extends Component {
  state = {
    columns: [
      { title: "Name", field: "name" },
      { title: "Mobile", field: "mobile" },
      { title: "Email", field: "email", type: "string" },
      {
        title: "Permission",
        field: "permission"
      }
    ],
    data: [
      {
        name: "Mehmet",
        mobile: "0987654321",
        email: "johndoe@gmail.com",
        permission: "Admin"
      }
    ],
    title: "",
    actions: [
      {
        icon: "edit",
        tooltip: "Edit",
        onClick: e => this.props.setSwitchToolbar(1)
      }
    ]
  };
  render() {
    return (
      <MaterialTable
        title={this.state.title}
        columns={this.state.columns}
        data={this.state.data}
        actions={this.state.actions}
      />
    );
  }
}
export default Content;
