import React from 'react'
import styles from '../../../styles/Background.module.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../Logo'
import Image from 'next/image'

const BlueBackground: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default BlueBackground
