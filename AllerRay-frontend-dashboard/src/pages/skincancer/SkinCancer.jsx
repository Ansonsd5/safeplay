import React from 'react';
import {Row, Col, Container, Card} from 'react-bootstrap';
import UVFeatures from '../../components/features/UVFeatures';
import SkinCancerContent from './SkinCancerContent';
import './SkinCancerContent.css';

const SkinCancer = () => {
  return (
    <div className='page-background'>
    <Container fluid>
      <SkinCancerContent />
      <UVFeatures />
    </Container>
    </div>
  );
};

export default SkinCancer;
