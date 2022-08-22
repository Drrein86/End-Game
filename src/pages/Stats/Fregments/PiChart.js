// please install npm install react-apexcharts apexcharts

import React from "react";
import Chart from "react-apexcharts";

function Piechart(props) {
  console.log("props !!!", props);
  return (
    <React.Fragment>
      {props?.statusCount && (
        <div className="container-fluid mb-3">
          <h3 className="mt-3">סטטוס מוזמנים </h3>
          <Chart
            type="pie"
            width={1349}
            height={550}
            series={props.statusCount}
            options={{
              title: { text: "כאן יש מוזמנים " },
              noData: { text: "Empty Data" },

              chart: {
                events: {
                  dataPointSelection: (event, chartContext, config) => {
                    let series = config.w.config.series[config.dataPointIndex];
                    let lable = config.w.config.labels[config.dataPointIndex];
                    console.log({ series, lable });
                    props.handleClick(lable);
                  },
                },
              },
              // colors:["#f90000","#f0f"],
              labels: props.statusMarks,
            }}
          ></Chart>
        </div>
      )}
    </React.Fragment>
  );
}
export default Piechart;
