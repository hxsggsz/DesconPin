import { Container } from "react-bootstrap";
import { ListGroup } from "../../components/listGroup/ListGroup";

export const MinhasPastasPage = () => {
   return (
      <Container>
         <ListGroup items={[
            {
               title: 'programação',
               total: 3
            },
            {
               title: 'gatos',
               total: 1
            }
         ]} />
      </Container>
   )
}