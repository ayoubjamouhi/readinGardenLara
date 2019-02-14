import React from 'react';
import {
   Table
} from 'reactstrap';

function DataTable(props) {

   const edit = (e) => {
      e.preventDefault();
      const article = props.articles.find(elem => elem.code == e.target.getAttribute('data-id'));
      props.fillForm(article);
   }
   const del = (e) => {
      e.preventDefault();
      const article = props.articles.find(elem => elem.code == e.target.getAttribute('data-id'));
      if(article != null)
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
               props.del(props.articles.indexOf(article))
               global.swal(
                'Deleted!',
                'Vous avez supprimer!',
                'success'
               )
            }
          })
      }

   }
   return (
      <Table hover bordered striped responsive size="sm">
         <thead>
            <tr>
               <th width="15%">Code</th>
               <th width="75%">Libellé</th>
               <th width="10%">Actions</th>
            </tr>
         </thead>
         <tbody>
         {
            props.articles.map((elem,i) => {
               return (
                  <tr key={elem.code}>
                     <td>{elem.code}</td>
                     <td>{elem.article}</td>
                     <td>
                        <i
                           className="fa fa-pencil i-edit" data-id={elem.code}
                           onClick={(e) => edit(e)}
                        ></i>
                        <i
                           className="fa fa-trash-o i-trash" onClick={(e) => del(e)}
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

export default DataTable;