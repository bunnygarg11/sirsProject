import React, { forwardRef, Fragment } from "react";
import Grid from "@material-ui/core/Grid";

// import AddBox from "material-ui/icon/AddBox"
import MaterialTable from "material-table";
import { withRouter } from "react-router-dom";
import { spacing } from "@material-ui/system";

var moment = require("moment");
var CurrentDate = moment().format("ddd MMM DD YYYY hh:mm");

function MaterialTableDemo({ history }) {
  const [state, setState] = React.useState({
    dataServices: [
      { service: "HAIRWASH", name: "Angelina Jolie", quantity: 1, price: 50 },
      { service: "HAIRCUT", name: "John ", quantity: 2, price: 50 }
    ],
    dataProducts: [
      { products: "SHAMPOO", name: "Angelina Jolie", quantity: 1, price: 40 },
      { products: "CONDITIONER", name: "John ", quantity: 1, price: 78 }
    ],

    title: `Today,${CurrentDate}`
  });
  return (
    <Fragment>
      <h2>{state.title}</h2>
      <Grid container style={{ padding: "5px" }}>
        <Grid xs={7} style={{ padding: "5px" }}>
          <div>
            <b>
              <h2>Services</h2>
            </b>
            {state.dataServices.map(row => (
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <h4>
                  <li>{row.service}</li>
                </h4>
                <h4>
                  <li>{row.name}</li>
                </h4>
                <h4>
                  <li>{row.quantity}</li>
                </h4>
                {/* <button
                  style={{
                    padding: "14px 40px",
                    borderRadius: "2px",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  CARRIED OUT
                </button>
                <button
                  style={{
                    padding: "14px 40px",
                    borderRadius: "2px",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  RECOMMENDED
                </button> */}
              </ul>
            ))}
          </div>
          <div>
            <b>
              <h2>Products</h2>
            </b>
            {state.dataProducts.map(row => (
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <h4>
                  <li>{row.products}</li>
                </h4>
                <h4>
                  <li>{row.name}</li>
                </h4>
                <h4>
                  <li>{row.quantity}</li>
                </h4>
              </ul>
            ))}
          </div>
        </Grid>

        <Grid xs={5} style={{ padding: "5px" }}>
          <div>
            {state.dataServices.map(row => (
              <div>
                <button
                  style={{
                    padding: "14px 40px",
                    borderRadius: "2px",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  CARRIED OUT
                </button>
                <button
                  style={{
                    padding: "14px 40px",
                    borderRadius: "2px",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  RECOMMENDED
                </button>
              </div>
            ))}
          </div>
          <div>
            {state.dataServices.map(row => (
              <div>
                <button
                  style={{
                    padding: "14px 40px",
                    borderRadius: "2px",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  CARRIED OUT
                </button>
                <button
                  style={{
                    padding: "14px 40px",
                    borderRadius: "2px",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  RECOMMENDED
                </button>
              </div>
            ))}
          </div>
          <div>
            {/* <b>
              <h2>Products</h2>
            </b>
            {state.dataProducts.map(row => (
              <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <h4>
                  <li>{row.products}</li>
                </h4>
                <h4>
                  <li>{row.name}</li>
                </h4>
                <h4>
                  <li>{row.quantity}</li>
                </h4> */}
            <button
              style={{
                padding: "14px 40px",
                borderRadius: "2px",
                backgroundColor: "grey",
                color: "white"
              }}
            >
              SOLD
            </button>
            <button
              style={{
                padding: "14px 40px",
                borderRadius: "2px",
                backgroundColor: "grey",
                color: "white"
              }}
            >
              RECOMMENDED
            </button>
            {/* </ul> */}
            ))}
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
export default withRouter(MaterialTableDemo);
