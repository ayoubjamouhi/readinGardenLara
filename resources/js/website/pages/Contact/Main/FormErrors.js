import React from 'react';
import { Alert } from 'reactstrap';
export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>

    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
         <Alert key={i} color="danger">
            {fieldName} {formErrors[fieldName]}
         </Alert>
        )

      } else {
        return '';
      }
    })}
  </div>