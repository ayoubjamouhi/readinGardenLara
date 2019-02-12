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
      const fournisseur = this.props.fournisseurs.find(elem => elem.code == e.target.getAttribute('data-id'));
      this.props.fillForm(fournisseur)
   }
   del(e) {
      e.preventDefault();
      const fournisseur = this.props.fournisseurs.find(elem => elem.code == e.target.getAttribute('data-id'));
      if(fournisseur != null)
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
               this.props.del(this.props.fournisseurs.indexOf(fournisseur))
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
                  <th width="10%">Code</th>
                  <th width="25%">Nom</th>
                  <th width="10%">Ville</th>
                  <th width="25%">Adresse</th>
                  <th width="10%">Identifiant Fiscale</th>
                  <th width="10%">ICE</th>
                  <th width="10%">Actions</th>
               </tr>
            </thead>
            <tbody>
            {
               this.props.fournisseurs.map((elem,i) => {
                  return (
                     <tr key={elem.code}>
                        <td>{elem.code}</td>
                        <td>{elem.nom}</td>
                        <td>{elem.ville}</td>
                        <td>{elem.adresse}</td>
                        <td>{elem.identifiant_fiscale}</td>
                        <td>{elem.ice}</td>
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

export default DataTable;