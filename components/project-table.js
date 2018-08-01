import React from 'react';
import { Table } from 'reactstrap';

class ProjectTable extends React.Component {
  render() {
    return (
        <Table striped hover>
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Projekt</th>
          <th scope="col">Status</th>
          <th scope="col">Ersteller</th>
          <th scope="col">Erstelldatum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">Geiles Projekt 1</a></td>
          <td>Prüfung</td>
          <td>Marc Rothmann</td>
          <td>04.07.2018</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Geiles Projekt 2 mit langem Titel, welcher besonders lang ist, da er besonders lang ist und noch länger</td>
          <td>Umsetzung</td>
          <td>David Spanier</td>
          <td>01.07.2018</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td><strike>Geiles Projekt 3</strike></td>
          <td>Keine Umsetzung</td>
          <td>Anojen Ratnasingam</td>
          <td>03.07.2018</td>
        </tr>
      </tbody>
        </Table>
      );
  }
}

export default ProjectTable;