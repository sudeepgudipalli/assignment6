import React from 'react';
import './Table.css';
import data from "./sample.json";

function Table(){
    return(
        <center className="ms-5 ps-5 pe-5 me-5">
            <table className="table table-hover">
                <thead>
                    <th className=" fs-4 col-1" scope="col">ID</th>
                    <th className="fs-4 col-5" scope="col">Name</th>
                    <th className="fs-4 col-2" scope="col">Latitude</th>
                    <th className="fs-4 col-2" scope="col">Longitude</th>
                </thead>
                <tbody>
                    {
                        data.map((row)=>{
                            let id = row.id;
                            let name = row.name;
                            let la = row.lati;
                            let lo = row.lon;
                            return(<tr><td>{id}</td><td>{name}</td><td>{la}</td><td>{lo}</td></tr>)
                        })
                    }
                </tbody>
            </table>
        </center>
    );
}

export default Table;
