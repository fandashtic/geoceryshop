import React from "react";

const Table = (props) => {
  let resData = props.data 
  let rows = resData
  var headers = Object.keys(resData.reduce( (result, obj) =>  Object.assign(result, obj),{}));
  headers.push('action')
    return (
      <div className="card-body">
        <table className="table table-striped" style={{ width: '100%' }}>
        <TableHeader headers={headers}></TableHeader>
        <TableBody headers={headers} rows={rows}></TableBody>
        </table>
      </div>
    );
}

  const TableHeader = (props) => {
    const { headers } = props;
    return(
      <thead key="header-1">
          <tr key="header-0">
            { headers && headers.map((value, index) => {
                return <th key={index}><div>{value}</div></th>
            })}
          </tr>
      </thead>
    );
  }

  const TableBody = (props) => {
    const { headers, rows } = props;
  
    function buildRow(row, headers) {
      return (
           <tr key={row.id}>
           { headers.map((value, index) => {
               return <td key={index}>{row[value]}</td>
            })}
           </tr>
       )
    };
  
    return(
        <tbody>
          { rows && rows.map((value) => {
                  return buildRow(value, headers);
              })}
        </tbody>
  );
  }

  export default Table;