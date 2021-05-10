import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CheckCircleFill, XCircle } from 'react-bootstrap-icons';
export default function PricesPlans() {
  return (
    <div className="prices-div">
      <Card.Body className="card-prices-div">
        <Card.Text className="card-prices">
          <Card.Title className="card-color-text">Básico</Card.Title>
          <p className="card-color-text ">
            Recomendado para declarações individuais de pessoas sem dependentes
            ou cônjuges.
          </p>
          <p className="p-text-prices">
            <CheckCircleFill
              className="icons-prices"
              style={{ color: '#70AD47' }}
            />
            Declaração IR anual 2021{' '}
          </p>
          <p className="p-text-prices">
            <CheckCircleFill
              className="icons-prices"
              style={{ color: '#70AD47' }}
            />
            Calculo simplificado e completo{' '}
          </p>
          <p className="p-text-prices">
            <CheckCircleFill
              className="icons-prices"
              style={{ color: '#70AD47' }}
            />
            Ranking dos Cenários por imposto a pagar ou Restituição a receber{' '}
          </p>
          <p className="p-text-prices">
            <XCircle className="icons-prices" style={{ color: '#70AD47' }} />
            Envio automatico para Receita
          </p>
          <Button variant="success">Gratuito</Button>
        </Card.Text>
      </Card.Body>

      <Card.Body className="card-prices-div">
        <Card.Text className="card-prices">
          <Card.Title className="card-color-text">Completo</Card.Title>
          <p className="card-color-text ">
            Recomendado para declarações individuais de pessoas sem dependentes
            ou cônjuges.
          </p>
          <p className="p-text-prices">
            <CheckCircleFill
              className="icons-prices"
              style={{ color: '#70AD47' }}
            />
            Declaração IR anual 2021{' '}
          </p>
          <p className="p-text-prices">
            <CheckCircleFill
              className="icons-prices"
              style={{ color: '#70AD47' }}
            />
            Calculo simplificado e completo{' '}
          </p>
          <p className="p-text-prices">
            <CheckCircleFill
              className="icons-prices"
              style={{ color: '#70AD47' }}
            />
            Ranking dos Cenários por imposto a pagar ou Restituição a receber{' '}
          </p>
          <p className="p-text-prices">
            <XCircle className="icons-prices" style={{ color: '#70AD47' }} />
            Envio automatico para Receita
          </p>
          <Button variant="success">R$ 39,90</Button>
        </Card.Text>
      </Card.Body>
    </div>
  );
}
