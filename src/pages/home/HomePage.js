import { Container, Row, Col,  } from 'react-bootstrap';
import { Card } from '../../components/cards/Card';
import { CardContainer } from '../../containers/modalsavepins/card/CardContainer';
import { Notification } from '../../components/notification/Notification';
import { Modalsavepins } from '../../containers/modalsavepins/Modalsavepins';
import { Modalcreatefolder } from '../../containers/modalsavepins/modalcreatefolder/Modalcreatefolder';
import { useAppContext } from '../../store/AppContext';

export const HomePage = () => {
   const { state, dispatch } = useAppContext();
   return (
      <div>
         <Modalsavepins open={state.mode === 'savePin'} />
         <Modalcreatefolder open={false}/>
            <Notification 
               message='Criado com sucesso'
               onClose={() => {
                  console.log('clicou em fechar')
               }}
            />
            <Container fluid>
               <Row>
                  <Col xs={12} md={3}><CardContainer image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
                  <Col xs={12} md={3}><CardContainer image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
                  <Col xs={12} md={3}><CardContainer image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
                  <Col xs={12} md={3}><CardContainer image='https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg' total={0} /></Col>
               </Row>
            </Container>
      </div>
   )
}