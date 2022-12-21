import { ButtonCaracteresContainer } from "./styled";

const ButtonCaracteres = ({label,variant='primary',  onClick}) => {
    return (
      <ButtonCaracteresContainer  variant={variant} onClick={onClick}>
       {label}
      </ButtonCaracteresContainer>
    );
  }
  
  export default ButtonCaracteres;
  