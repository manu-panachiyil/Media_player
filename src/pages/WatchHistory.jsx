import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteWatchHistory, viewHistory } from "../services/allAPI";

function WatchHistory() {

  const [watchHistory, setWatchHistory] = useState([])

  const getAllWatchHistory = async() => {
    const response = await viewHistory()
    const {data} = response
    setWatchHistory(data)
    //console.log(response);
  }

  console.log(watchHistory);

  //delete watch history

  const deleteHistory = async (id) => {
    const response = await deleteWatchHistory(id);
    console.log(response);
    getAllWatchHistory()
  }

  useEffect(() => {
    getAllWatchHistory()
  },[])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="ms-5 mt-5 mb-5">WatchHistory</h4>
        <Link to={"/"}>
          {" "}
          <button className="btn btn-transparent me-5 mt-5 mb-5 text-white">
            <i class="fa-solid fa-arrow-left fa-beat"></i>    Back to Home
          </button>
        </Link>
      </div>
      <div className="container-fluid p-5 mx-auto d-flex justify-content-center align-items-center">

        <table class="table table-hover container">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>
                URL
              </th>
              <th colspan='2'>
                Time Stamp
              </th>
            </tr>
          </thead>
          <tbody>
        { watchHistory.length>0?
        watchHistory?.map((history) => (
         <tr>
              <th> {history.id} </th>
              <td> {history.caption} </td>
              <td><a href={`${history.embedLink}`} target="_blank"> {history.embedLink} </a></td>
              <td> {history.timeStamp} </td>
              <td><button onClick={() => deleteHistory(history?.id)} className='btn btn-transparent'><i class="fa-solid fa-trash-can"></i></button></td>
            </tr> )) 
            :
            <tr> 
              <td colspan='4'> No Data</td>
            </tr>

            }
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchHistory;
