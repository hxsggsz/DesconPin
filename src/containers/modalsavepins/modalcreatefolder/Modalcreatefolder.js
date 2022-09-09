import { useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "../../../components/modals/Modal";

export const Modalcreatefolder = ({ open }) => {
  const [formName, setFormName] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submit', formName);
   }

   const handleChange = (e) => {
      e.preventDefault();
      setFormName(e.target.value)
   }

   return (
      <Modal
      open={open}
      title='Criar pasta'
      controls={[
         {
            label: 'Criar e salvar',
            loadinglabel: 'Criando',
            loading: false,
            variant: 'secondary',
            type: 'submit',
            form: 'form-criar-pasta'
         }
      ]}
      >
         <Form onSubmit={handleSubmit} id='form-criar-pasta'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Nome da pasta</Form.Label>
               <Form.Control type="text" placeholder="Ensira o nome da sua pasta" value={formName} onChange={handleChange} />
            </Form.Group>
         </Form>
      </Modal>
   )
}