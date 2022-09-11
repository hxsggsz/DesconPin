import { ListGroup, Row, Col } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modals/Modal";
import { useAppContext } from "../../store/AppContext";
import {
    closeModalAction,
    fetchFoldersAction,
    openModalSavePinAction,
    openModalCreateFolderAction,
    savePinInFolderAction
    } from "../../store/Actions";
import { useEffect } from "react";

export const Modalsavepins = ({ open }) => {
   const { state, dispatch } = useAppContext();

   const handleClose = () => {
      dispatch(closeModalAction())
   }

   const handleClickCreateFolder = () => {
      dispatch(openModalCreateFolderAction());
   }

   const handleClick = (pinId, folderId) => {
      console.log(state)
      savePinInFolderAction(dispatch, state.activePinId, folderId)
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
         onClick: handleClickCreateFolder
      }
      ]}
      >
         <ListGroup variant="flush">
         {state.folders.map(folder => (
            <div key={folder.id}>
               <ListGroup.Item>
                  <Row>
                     <Col xs={8}>{folder.name}</Col>
                     <Col xs={4} className='text-end'>
                        <Button label='salvar' onClick={() => handleClick( folder.id)} />
                     </Col>
                  </Row>
               </ListGroup.Item>
            </div>
         ))}
         </ListGroup>
      </Modal>
   )
}