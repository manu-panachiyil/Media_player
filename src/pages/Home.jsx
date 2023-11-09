

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from './Add'
import View from './View'
import Category from './Category'

function Home() {
  //create state to do state-lifting
  const [uploadVideoStatus, setUploadVideoStatus] = useState({})

  return (
    <>
      <div className='container mt-5  d-flex justify-content-between align-items-center'>
        <div>        
          <Add setUploadVideoStatus={setUploadVideoStatus} />
        </div>
        <Link to={'/watch-history'} style={{color:'white',textDecoration:'none'}}><h6 className='me-2'>Watch History</h6></Link>
      </div>
      
     <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
        <div className='col-lg-9'>
          <h3 className='ms-5 mb-2'>All videos</h3>
          <View uploadVideoStatus={uploadVideoStatus} />
        </div>
        <div>
          <Category />
        </div>
     </div>
    </>
  )
}

export default Home