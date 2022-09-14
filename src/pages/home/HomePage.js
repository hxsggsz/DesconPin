import { useState, useEffect } from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { CardContainer } from '../../containers/modalsavepins/card/CardContainer';
import { Notification } from '../../components/notification/Notification';
import { Modalsavepins } from '../../containers/modalsavepins/Modalsavepins';
import { Modalcreatefolder } from '../../containers/modalsavepins/modalcreatefolder/Modalcreatefolder';
import { useAppContext } from '../../store/AppContext';
import { saveFoldersSuccessType } from '../../store/Types';
import { fetchPinsAction } from '../../store/Actions';

export const HomePage = () => {
   const { state, dispatch } = useAppContext();

   const [showNotification, setShowNotification ] = useState()

   const pinsNormalized =  state.pins.map(pin => ({
      ...pin,
      total: state.folders.filter(folder => (
         folder.pins.includes(pin.id)
      )).length
   }))

   useEffect(() => {
      fetchPinsAction(dispatch)
   }, [])

   useEffect( () => {
      if(state.type === saveFoldersSuccessType) {
         setShowNotification(true);
         setTimeout(() => {
            setShowNotification(false);
         }, 3000) 
      }
   }, [state.type])
   return (
      <div>
         <Modalsavepins open={state.mode === 'savePin'} />
         <Modalcreatefolder open={state.mode === 'createFolder'}/>
            { showNotification && (<Notification 
               message='Criado com sucesso'
               onClose={() => {
                  setShowNotification(false)
               }}
            />
            )}
            <Container fluid>
               <Row>
                  {pinsNormalized.map(pin => (
                     <Col key={pin.id} xs={12} md={3}>
                        <CardContainer {...pin} />
                     </Col>
                  ))}
               </Row>
            </Container>
      </div>
   )
}