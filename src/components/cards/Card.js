import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import CardBS from 'react-bootstrap/Card';
import '../styles/CardStyle.css';

export const Card = ({ image, total, onClick }) => {
   return (
      <CardBS className="bg-dark text-white">
         <CardBS.Img className="fotos" src={image} alt="CardBS image" />
         <CardBS.ImgOverlay>
         <Button variant="primary" onClick={onClick}>
         Salvar <Badge bg="secondary">{total}</Badge>
         </Button>
         </CardBS.ImgOverlay>
      </CardBS>
   )
}