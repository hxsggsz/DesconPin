import { useState, useEffect } from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import { Card } from '../../components/cards/Card';
import { CardContainer } from '../../containers/modalsavepins/card/CardContainer';
import { Notification } from '../../components/notification/Notification';
import { Modalsavepins } from '../../containers/modalsavepins/Modalsavepins';
import { Modalcreatefolder } from '../../containers/modalsavepins/modalcreatefolder/Modalcreatefolder';
import { useAppContext } from '../../store/AppContext';
import { saveFoldersSuccessType } from '../../store/Types';

export const HomePage = () => {
   const { state, dispatch } = useAppContext();

   const [showNotification, setShowNotification ] = useState()

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
                  <Col xs={12} md={3}><CardContainer id='1' image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
                  <Col xs={12} md={3}><CardContainer id='2' image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
                  <Col xs={12} md={3}><CardContainer id='3' image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
                  <Col xs={12} md={3}><CardContainer id='4' image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
               </Row>
            </Container>
      </div>
   )
}