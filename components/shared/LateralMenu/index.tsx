import React from 'react';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useRouter } from 'next/router';

import styles from './styles.module.css';

const LateralMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <Logo />
      <div className={styles.list}>
        <div className={styles.list}>
          <Link href="/admin">
            <a className={router.pathname === '/admin' ? styles.active : ''}>
              <FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="mr-3" />
              Painel Inicial
              <hr />
            </a>
          </Link>
          <Link href="/admin/users/list">
            <a className={router.pathname === '/admin/users/list' ? styles.active : ''}>
              <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="mr-3" />
              Usuários
              <hr />
            </a>
          </Link>
          <Link href="/admin/products/list">
            <a className={router.pathname === '/admin/products/list' ? styles.active : ''}>
              <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="mr-3" />
              Produtos
              <hr />
            </a>
          </Link>
          <Link href="/admin/categories/list">
            <a className={router.pathname === '/admin/categories/list' ? styles.active : ''}>
              <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="mr-3" />
              Categorias
              <hr />
            </a>
          </Link>
          <Link href="/admin/systemrequirements/list">
            <a className={router.pathname === '/admin/systemrequirements/list' ? styles.active : ''}>
              <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="mr-3" />
              Requisitos do sistema
              <hr />
            </a>
          </Link>
          <Link href="/admin/coupons/list">
            <a className={router.pathname === '/admin/coupons/list' ? styles.active : ''}>
              <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="mr-3" />
              Cupons
              <hr />
            </a>
          </Link>
          <Link href="/admin/#">
            <a className={router.pathname === '/admin/#' ? styles.active : ''}>
              <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="mr-3" />
              Financeiro
              <hr />
            </a>
          </Link>
          <Link href="/admin/#">
            <a className={router.pathname === '/admin/#' ? styles.active : ''}>
              <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="mr-3" />
              Sair
              <hr />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LateralMenu;
