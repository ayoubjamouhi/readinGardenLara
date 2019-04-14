import React from 'react';
import {
   Table
} from 'reactstrap';
class DataTable extends React.Component {
   constructor() {
      super();
      this.edit = this.edit.bind(this);
   }
   edit(e) {
      e.preventDefault();
      const plancomptable = this.props.plancomptables.find(elem => elem.compte == e.target.getAttribute('data-id'));
      this.props.fillForm(plancomptable);

   }
   del(e) {
      e.preventDefault();
      const plancomptable = this.props.plancomptables.find(elem => elem.compte == e.target.getAttribute('data-id'));
      if(plancomptable != null)
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
               this.props.del(this.props.plancomptables.indexOf(plancomptable))
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
                  <th width="10%">Compte</th>
                  <th width="25%">Intitulé</th>
                  <th width="2%">C</th>
                  <th width="2%">T</th>
                  <th width="10%">Mt-Débit N</th>
                  <th width="10%">Mt-Crédit N</th>
                  <th width="10%">Mt-Débit N-1</th>
                  <th width="10%">Mt-Crédit N-1</th>
                  <th width="10%">Actions</th>
               </tr>
            </thead>
            <tbody>
            {
               this.props.plancomptables.map((elem,i) => {
                  return (
                     <tr key={elem.compte}>
                        <td>{elem.compte}</td>
                        <td>{elem.intitule}</td>
                        <td>{elem.categorie}</td>
                        <td>{elem.type}</td>
                        <td>{elem.if}</td>
                        <td>{elem.ice}</td>
                        <td>{elem.ice}</td>
                        <td>{elem.ice}</td>
                        <td>
                           <i
                              className="fa fa-pencil i-edit" data-id={elem.compte}
                              onClick={(e) => this.edit(e)}
                           ></i>
                           <i
                              className="fa fa-trash-o i-trash" onClick={(e) => this.del(e)}
                              data-id={elem.compte}
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

export default DataTable;