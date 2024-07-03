import React from 'react'
import NavBar from '../NavBar'
import Books from '../Books'
import Footer from '../Footer'

function Book() {
  return (
    <div>
<NavBar></NavBar>
<div className='min-h-screen'>
<Books>
    
</Books>
</div>
<div className='relative top-28'>
<Footer ></Footer>
</div>

    </div>
  )
}

export default Book