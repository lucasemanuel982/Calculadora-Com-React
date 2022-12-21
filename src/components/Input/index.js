import { InputConatiner } from "./styled";

const Input = ({value}) => {
    return (
      <InputConatiner>
        <input disabled value={value}/>
      </InputConatiner>
    );
  }
  
  export default Input;
  