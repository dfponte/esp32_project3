


import React from "react";

import styled from 'styled-components'


const ContactForm = ()=>{

  return(
<Form id="form">
<form id="contact-form" method="post">
    <Input>
      <label>
        Nome:
      </label>
      <input type="text"/>
    </Input>
    <Input>
     <label>
        Email:
      </label>
      <input type="email"/>
    </Input>
    <Input>
       <label>
          Message:
       </label>
       <textarea rows="5"/>
    </Input>
   <button type="submit">Submit</button>
</form>
</Form>   
  );

}

const Input = styled.div`

     display:flex;
     flex-direction:column;
     min-width:60vh;

     label{
         color:white;
         padding-top: 1rem;

     }
     input[type=text]{
        border: 2px 0 solid yellow  ;
        padding: 12px 20px;
        border-radius:10%;
        width:100%;
        height:100%;

     }

     input:focus{
        background-color: #416C25;
        color:yellow;
     }

     textarea{
         width:100%;
        height:100%;
        padding: 12px 20px;
        box-align:brder-aline;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color:#f8f8f8;
        resize: none;

     }
     textarea:focus{
         background-color: #416C25;
         color:yellow;

     }

`;


const Form = styled.form`
   
  button{
    margin-top:1rem;
  }
`;

export default ContactForm;