import { ListGroup as ListGroupBS, Badge } from "react-bootstrap";

export const ListGroup = ({ items = [] }) => {
   return (
      <ListGroupBS as="ul" >
         {items.map((item, itemIndex) => (
            <ListGroupBS.Item key={itemIndex}  as="li" className="d-flex justify-content-align-items-start">
               <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
               </div>
               {item.total ? (
                  <Badge bg="primary" pill>
                  {item.total}
               </Badge> 
               ) : null}
               
            </ListGroupBS.Item>
         ))}
      </ListGroupBS>         
   )
}
            