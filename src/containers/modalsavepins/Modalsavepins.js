import { ListGroup, Row, Col } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modals/Modal";
import { useAppContext } from "../../store/AppContext";
import { closeModalAction, fetchFoldersAction } from "../../store/Actions";
import { useEffect } from "react";

export const Modalsavepins = ({ open }) => {
   const { state, dispatch } = useAppContext();
   const handleClose = () => {
      console.log('fechando')
      dispatch(closeModalAction())
   }

   useEffect(() => {
      fetchFoldersAction(dispatch)
   }, [])
   return (
      <Modal
      title='Salvar pin'
      open={open}
      onHide={handleClose}
      controls={[
         {
         label: 'Criar pasta',
         variant: 'secondary',
         loading: false,
         loadinglabel: 'criando',   
         onclick: () => {
            console.log('clicou criar pasta')
         }
      }
      ]}
      >
         <ListGroup variant="flush">
         {state.folders.map((folder, folderIndex) => (
            <div>
               <ListGroup.Item key={folderIndex}>
                  <Row>
                     <Col xs={8}>{folder.name}</Col>
                     <Col xs={4} className='text-end'><Button label='salvar' /></Col>
                  </Row>
               </ListGroup.Item>
            </div>
         ))}
         </ListGroup>
      </Modal>
   )
}