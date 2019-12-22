import React from "react";

import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Mobile", field: "mobile" },
      { title: "Email", field: "email", type: "email" },
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
    title: "List Staff",
    actions: [
      {
        icon: "edit",
        tooltip: "Edit"
        // onClick: (event, rowData) => alert("You saved " + rowData.name)
      }
    ]
  });

  return (
    <MaterialTable
      title={state.title}
      columns={state.columns}
      data={state.data}
      actions={state.actions}
    />
  );
}
