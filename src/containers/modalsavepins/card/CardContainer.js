import { Card } from "../../../components/cards/Card";
import { useAppContext } from "../../../store/AppContext";
import { openModalSavePinAction } from "../../../store/Actions";

export const CardContainer = (props) => {
   const { state, dispatch } = useAppContext();

   const handleClick = (pinId) => {
      console.log('clicou', pinId)
      dispatch(openModalSavePinAction(pinId))
   }
   return (
      <Card {...props} onClick={handleClick} />
   )
}