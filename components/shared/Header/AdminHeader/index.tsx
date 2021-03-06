import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

import { useRouter } from 'next/router';

import SignOutService from '../../../../util/SignOutService';

import { useSelector } from 'react-redux';
import User from '../../../../dtos/User';

import styles from './styles.module.css'

const AdminHeader: React.FC = () => {
  const router = useRouter();
  const { name }: User = useSelector(state => state.auth.loggedUser);

  return (
    <Row className={styles.background}>
      <Col xs={12} className={styles.menu}>
        <Link href="/admin">
          <a>
            <FontAwesomeIcon
              icon={faSignal}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/admin' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/admin/users/list">
          <a>
            <FontAwesomeIcon
              icon={faUser}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/admin/users/list' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/admin/products/list">
          <a>
            <FontAwesomeIcon
              icon={faGamepad}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/admin/products/list' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/admin/categories/list">
          <a>
            <FontAwesomeIcon
              icon={faCheckSquare}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/admin/categories/list' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/admin/systemrequirements/list">
          <a>
            <FontAwesomeIcon
              icon={faLaptop}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/admin/systemrequirements/list' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/admin/coupons/list">
          <a>
            <FontAwesomeIcon
              icon={faTicketAlt}
              color="var(--color-gray-light)"
              className={`ml-3 ${router.pathname === '/admin/coupons/list' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/auth/login" >
          <a
            onClick={SignOutService.execute}
            onTouchEnd={() => SignOutService.execute()} // mobile don't have click so we need to use onTouch events
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="/profile">
          <a className={styles.profile}>
            <span className={styles.name}>{name}</span>
            <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
          </a>
        </Link>
      </Col>
    </Row>
  )
}

export default AdminHeader;
