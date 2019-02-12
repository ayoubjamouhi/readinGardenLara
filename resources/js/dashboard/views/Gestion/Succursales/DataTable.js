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
      const succursale = this.props.succursales.find(elem => elem.code == e.target.getAttribute('data-id'));
      this.props.fillForm(succursale);
   }
   del(e) {
      e.preventDefault();
      const succursale = this.props.succursales.find(elem => elem.code == e.target.getAttribute('data-id'));
      if(succursale != null)
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
               this.props.del(this.props.succursales.indexOf(succursale))
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
                  <th width="15%">Code</th>
                  <th width="75%">Succursale</th>
                  <th width="10%">Actions</th>
               </tr>
            </thead>
            <tbody>
            {
               this.props.succursales.map((elem,i) => {
                  return (
                     <tr key={elem.code}>
                        <td>{elem.code}</td>
                        <td>{elem.succursale}</td>
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