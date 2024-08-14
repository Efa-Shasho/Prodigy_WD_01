import React, { Children } from 'react'

import Navigation from './Header';
import bgi from '../assets/bgi.jpg';


function Layout() {
  const isHomePage=page ==='home'


  return (
    <div>
<Navigation/>
<div style={{...(isHomePage&&{
  backgroundImage:`url(${bgi})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  minHeight: 'calc(100vh - 80px)',
  position: 'relative',
  zIndex: 1,

})}}>

{Children}

</div>

  
    </div>
  )
}

export default Layout
