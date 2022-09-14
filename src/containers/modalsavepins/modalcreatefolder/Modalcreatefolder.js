import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "../../../components/modals/Modal";
import { useAppContext } from "../../../store/AppContext";
import { saveFoldersInitType, saveFoldersSuccessType } from "../../../store/Types";
import { closeModalAction, saveFoldersAction, openModalSavePinAction } from "../../../store/Actions";

export const Modalcreatefolder = ({ open }) => {
   const { state, dispatch } = useAppContext()

  const [folderName, setFolderName] = useState('');

   const handleClose = () => {
      dispatch(closeModalAction())
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();
      saveFoldersAction(dispatch, folderName);
   }

   const handleChange = (e) => {
      e.preventDefault();
      setFolderName(e.target.value)
   }

   useEffect(() => {
      if(state.type === saveFoldersSuccessType) {
         handleClose()
         setTimeout(() => {
            dispatch(openModalSavePinAction(state.pins.id))
         }, 500);
      }
   },[state.type])

   return (
      <Modal
      open={open}
      onHide={handleClose}
      title='Criar pasta'
      controls={[
         {
            label: 'Criar e salvar',
            loading: state.type === saveFoldersInitType,
            variant: 'secondary',
            type: 'submit',
            form: 'form-criar-pasta'
         }
      ]}
      >
         <Form onSubmit={handleSubmit} id='form-criar-pasta'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Nome da pasta</Form.Label>
               <Form.Control type="text" placeholder="Ensira o nome da sua pasta" value={folderName} onChange={handleChange} />
            </Form.Group>
         </Form>
      </Modal>
   )
}