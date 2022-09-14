import { ListGroup, Row, Col } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modals/Modal";
import { useAppContext } from "../../store/AppContext";
import {
    closeModalAction,
    fetchFoldersAction,
    openModalCreateFolderAction,
    savePinInFolderAction
    } from "../../store/Actions";
import { useState, useEffect } from "react";

export const Modalsavepins = ({ open }) => {
   const { state, dispatch } = useAppContext();
   const [ itensLoading, setItensLoading ] = useState(false);

   const handleClose = () => {
      dispatch(closeModalAction())
   }

   const handleClickCreateFolder = () => {
      dispatch(openModalCreateFolderAction());
   }

   const handleClick = async (folderId) => {
      await savePinInFolderAction(dispatch, state.activePinId, folderId);
      setItensLoading(true)
      setInterval(() => {
         setItensLoading(false)
      }, 1000);
    };

   const foldersNormalized = state.folders.map(folder => {
      return ({
         ...folder,
         saved: folder.pins.includes(state.activePinId)
      })
   })

   useEffect(() => {
      fetchFoldersAction(dispatch)
   }, [dispatch])


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
         loadinglabel: 'Criando',   
         onClick: handleClickCreateFolder
      }
      ]}
      >
         <ListGroup variant="flush">
         {foldersNormalized.map(folder => (
            <div key={folder.id}>
               <ListGroup.Item>
                  <Row>
                     <Col xs={8}>{folder.name}</Col>
                     <Col xs={4} className='text-end'>
                        <Button
                        label={folder.saved ? 'Salvo' : 'Salvar'}
                        variant={folder.saved ? 'secondary' : 'primary'}
                        disabled={folder.saved}
                        onClick={() => handleClick( folder.id)}
                        loading={itensLoading}
                        />
                     </Col>
                  </Row>
               </ListGroup.Item>
            </div>
         ))}
         </ListGroup>
      </Modal>
   )
}