/*import React from 'react';
import {
   Table,
   Badge
} from 'reactstrap';
class DataTable extends React.Component {
   constructor() {
      super();
      this.edit = this.edit.bind(this);
   }
   edit(e) {
      e.preventDefault();
      const journal = this.props.journaux.find(elem => elem.code == e.target.getAttribute('data-id'));
      this.props.fillForm(journal)
   }
   del(e) {
      e.preventDefault();
      const journal = this.props.journaux.find(elem => elem.code == e.target.getAttribute('data-id'));
      console.log(this.props.journaux.indexOf(journal));
      if(journal != null)
      {
         global.swal({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'oui, supprimer!'
          }).then((result) => {
            if (result.value) {
               this.props.del(this.props.journaux.indexOf(journal))
               global.swal(
                'Deleted!',
                'Vous avez supprimer!',
                'success'
               )
            }
          })
      }

   }
   render() {

      return (
         <Table hover bordered striped responsive size="sm">
            <thead>
               <tr>
                  <th width="10%">Code Journal</th>
                  <th width="25%">Intitulé</th>
                  <th width="10%">Contre Partie</th>
                  <th width="25%">Intitulé</th>
                  <th width="10%">Type</th>
                  <th width="10%">Actions</th>
               </tr>
            </thead>
            <tbody>
            {
               this.props.journaux.map((elem,i) => {
                  return (
                     <tr key={elem.code}>
                        <td>{elem.code}</td>
                        <td>{elem.intitule}</td>
                        <td>{elem.contrepartie}</td>
                        <td>{elem.contrepartie_intitule}</td>
                        <td>
                           <Badge color="success">{elem.type}</Badge>
                        </td>
                        <td>
                           <i
                              className="fa fa-pencil i-edit" data-id={elem.code}
                              onClick={(e) => this.edit(e)}
                           ></i>
                           <i
                              className="fa fa-trash-o i-trash" onClick={(e) => this.del(e)}
                              data-id={elem.code}
                           >
                           </i>
                        </td>
                     </tr>
               )
               })
            }

            </tbody>
         </Table>

      );
   }
}

*/
import React from 'react';
import {
   Table,
   Badge
} from 'reactstrap';

function DataTable(props) {
   return (
      <Table hover bordered striped responsive size="sm">
            <thead>
               <tr>
                  <th width="10%">Code Journal</th>
                  <th width="25%">Intitulé</th>
                  <th width="10%">Contre Partie</th>
                  <th width="25%">Intitulé</th>
                  <th width="10%">Type</th>
                  <th width="10%">Actions</th>
               </tr>
            </thead>
            <tbody>
            {
               props.articles.map((elem,i) => {
                  return (
                     <tr key={elem.id}>
                        <td>{elem.id}</td>
                        { /*<td>{elem.intitule}</td>
                        <td>{elem.contrepartie}</td>
                        <td>{elem.contrepartie_intitule}</td>
                        <td>
                           <Badge color="success">{elem.type}</Badge>
                        </td>
                        <td>
                           <i
                              className="fa fa-pencil i-edit" data-id={elem.code}
                              onClick={(e) => this.edit(e)}
                           ></i>
                           <i
                              className="fa fa-trash-o i-trash" onClick={(e) => this.del(e)}
                              data-id={elem.code}
                           >
                           </i>
                  </td> */ }
                     </tr>
               )
               })
            }

            </tbody>
         </Table>
   );
}
export default DataTable;