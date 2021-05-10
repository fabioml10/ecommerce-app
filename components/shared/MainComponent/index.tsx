import React from 'react'

import StoreFrontHeader from '../Header/StoreFrontHeader'
import StoreFrontFooter from '../Footer/StoreFrontFooter'

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <StoreFrontHeader />
      <div className="container flex-fill">
        {children}
      </div>
      <StoreFrontFooter />
    </div>
  )
}

export default MainComponent
