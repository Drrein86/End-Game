import React from "react";

function DataSlice(props) {
  // table headers
  let headers = Object.keys(props.data[0]);
  let tableHeaders = (
    <tr key="asa" className="data-table-headers">
      {headers.map((header, i) => (
        <td key={i}>{header}</td>
      ))}
    </tr>
  );

  // table body
  let currentData = props.data.map((rowData, i) => {
    return (
      <tr key={i} className="data-table-rows">
        <td> {rowData.timeStemp} </td>
        <td> {rowData.name} </td>
        <td> {rowData.amount} </td>
        <td> {rowData.detailes} </td>
      </tr>
    );
  });

  return (
    <div className="data-slice">
      <h1> data slice</h1>
      <button onClick={props.handleClick}> חזור </button>
      {tableHeaders ? (
        <table className="table-data">
          <thead>{tableHeaders}</thead>
          <tbody>{currentData}</tbody>
        </table>
      ) : (
        <h1>no headers</h1>
      )}
    </div>
  );
}

export default DataSlice;