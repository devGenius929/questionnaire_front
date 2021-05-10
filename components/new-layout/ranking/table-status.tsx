import React from 'react';
import { Table, Button } from 'react-bootstrap';
export default function TableStatusRanking() {
  return (
    <>
      <Table bordered={false}>
        <thead>
          <tr className="text-muted">
            <th>Conteúdo</th>
            <th>Conteúdo</th>
            <th>Conteúdo</th>
            <th>Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ color: '#AAAAAA' }}>
            <td>Resultado</td>
            <td>Resultado</td>
            <td>Resultado</td>
            <td>Resultado</td>
          </tr>
        </tbody>
        <thead>
          <tr className="text-muted">
            <th>Conteúdo</th>
            <th>Conteúdo</th>
            <th>Conteúdo</th>
            <th>Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ color: '#AAAAAA' }}>
            <td>Resultado</td>
            <td>Resultado</td>
            <td>Resultado</td>
            <td>Resultado</td>
          </tr>
          <tr>
            <td>
              <Button
                block
                variant="success"
                size="sm"
                style={{ backgroundColor: '#50812E' }}
              >
                Ver Mais
              </Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
