import React, { useState } from 'react'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../Logo'
import { useRouter } from 'next/router';

import styles from './styles.module.css'

import LoggedService from '../../../../util/LoggedService';

const StoreFrontHeader: React.FC = () => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSearch = (): void => {
    router.push(`
        /search?search=${search}&lentgh=12&page=1&order=price&direction=asc
    `);
  }

  const handleUserRedirect = (): void => {
    router.push(
      LoggedService.execute() ? '/profile' : 'auth/admin'
    );
  }

  return (
    <Row className={styles.background}>
      <Col md={6} className="mt-2">
        <Logo />
      </Col>
      <Col md={6} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup className={`${router.pathname === '/search' ? styles.hidden : ''}`}>
              <FormControl
                placeholder="Pesquisar produto"
                value={search}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(evt.target.value)
                }
                onKeyUp={
                  (evt: React.KeyboardEvent<HTMLInputElement>) => {
                    if (evt.key.toLowerCase() === 'enter') {
                      handleSearch();
                    }
                  }
                }
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <FontAwesomeIcon
                  icon={faSearch}
                  color="var(--color-gray-ligth)"
                />
              </Col>
              <Col>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  color="var(--color-gray-ligth)"
                />
              </Col>
              <Col>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  color="var(--color-gray-light)"
                  onClick={handleUserRedirect}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StoreFrontHeader
