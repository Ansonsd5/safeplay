import React from 'react';
import { Container, Row, Col, Card  } from 'react-bootstrap';
import AllergicAwareness from '../../components/features/allergicAwarness/allergy';
import TriggerFeature from '../../components/features/hayfever-triggers/trigger.jsx';
import PictogramChart from '@/components/features/pictogram/pictogram';
import './Pollen.css';
import { useEffect } from 'react';

const Pollen = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='background-section'>
      <div className="title-section">
        <Container>
          <h1 className="text-center" >Understanding Pollen and Hay Fever</h1>
          <p className="text-center">Learn about symptoms, triggers, and prevention strategies.</p>
        </Container>
      </div>

      <PictogramChart />

      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h2 style={{ color: '#004085' }}>Common Symptoms</h2>
            <p> Identify signs of pollen allergies and hay fever in children.</p>
          </Col>
        </Row> 
      </Container>

      <AllergicAwareness />

      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h2 style={{ color: '#004085' }}>Common Hay fever Triggers & Prevention</h2>
            <p>Find the common triggers around your children.</p>
          </Col>
        </Row>
      </Container>

      <TriggerFeature />

  </div>
  );
};

export default Pollen;