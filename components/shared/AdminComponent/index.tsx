import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminFooter from '../Footer/AdminFooter';
import AdminHeader from '../Header/AdminHeader';

const AdminComponent: React.FC = ({ children }) => {
  return (
    <Row className="mr-lg-4">
      <Col lg={3}>
        Menu Lateral
      </Col>
      <Col lg={9}>
        <div className="d-flex flex-column sticky-footer-wrapper container">
          <AdminHeader name="Nome do user aqui" />
          <div className="flex-fill text-center">
            {children}
          </div>
          <AdminFooter />
        </div>
      </Col>
    </Row>
  )
}

export default AdminComponent;