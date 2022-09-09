import { Button as ButtonBS } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export const Button = ({ loading, label, loadinglabel, ...ButtonProps }) => {
   return (
      <ButtonBS {...ButtonProps}>
        {loading && (
      <>
         <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        >
         <span className="visually-hidden">Loading...</span>
        </Spinner>{' '}
      </>
        )}
        {loading ? loadinglabel : label}
      </ButtonBS>
   )
}