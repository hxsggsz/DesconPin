import { Container } from "react-bootstrap";
import { ListGroup } from "../../components/listGroup/ListGroup";
import { useAppContext } from '../../store/AppContext';

const adapterItens = (items) => {
   return items.map(item => ({
      title: item.name,
      total: item.pins.length
   }))
}

export const MinhasPastasPage = () => {
   const { state } = useAppContext()
   return (
      <Container>
         <ListGroup items={adapterItens(state.folders)} />
      </Container>
   )
}