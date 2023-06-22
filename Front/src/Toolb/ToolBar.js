import React from 'react'

function ToolBar(openSidebar) {
  return (
    <div className="tool-bar">
        <div  className='burger' onClick={openSidebar}>
        <i className="ri-menu-line"></i>

        </div>
       <div className='title'>The Amit</div>



    </div>
  )
}

export default ToolBar