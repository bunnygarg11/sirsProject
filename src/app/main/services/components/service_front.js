import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import ServiceModal from "./service";

export default function MaterialTableDemo() {
  const [comp, setComp] = React.useState(null);
  const handlemodal = () => {
    setComp(null);
  };
  const [state, setState] = React.useState({
    columns: [
      { title: "Services", field: "service" },
      { title: "Duration", field: "duration" },
      { title: "Price", field: "price", type: "numeric" }
    ],
    data: [
      { service: "service1", duration: "2h", price: 250 },
      { service: "service2", duration: "1h", price: 350 }
    ],
    actions: [
      {
        icon: "more_vert",
        tooltip: "Product Services",
        onClick: (e, rowData) =>
          setComp(
            <ServiceModal
              openModal={true}
              handlemodal={handlemodal}
              data={rowData}
            />
          )
      }
    ]
  });

  return (
    <>
      <MaterialTable
        title={state.title}
        columns={state.columns}
        data={state.data}
        actions={state.actions}
      />
      {comp}
    </>
  );
}
