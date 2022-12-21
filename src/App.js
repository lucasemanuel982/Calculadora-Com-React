
import { Container, Content1,Content2, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import ButtonCaracteres from "./components/ButtonCaracteres";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation,setOperation] = useState();

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  };

  const handleDelNumber = () => {
    setCurrentNumber(prev => `${prev === '0' || prev === ''  ? '0' : (prev.slice(0,-1)) }`)
  };

  const handleAddNumber = (number) =>{
    setCurrentNumber (prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handlePointNumber = (number) =>{
    setCurrentNumber (prev => `${prev === '0' ? '' : prev}.`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
    } 
  }


  const handleSubNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber('0');
    } 
  }

  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
    } 
  }

  const handleDivNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('0');
    } 
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case'+':
          handleSumNumber();
          console.log(handleSumNumber);
          break;
        case'-':
          handleSubNumber();
          console.log(handleSubNumber);
          break;
        case'*':
          handleMultNumber();
          console.log(handleMultNumber);
          break;
        case'/':
          console.log(handleDivNumber);
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content1>
        <Content2>
          <Input value={currentNumber}/>
          <Row>
            <ButtonCaracteres label="C" variant='secondary' onClick={(handleOnClear)} />
            <Button label="/" variant='secondary' onClick={(handleDivNumber)} />
            <Button label="<" variant='secondary' onClick={(handleDelNumber)} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="*" variant='secondary' onClick={(handleMultNumber)} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="+" variant='secondary' onClick={(handleSumNumber)} />
          </Row>
          <Row>
            <Button label='1' onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="-" variant='secondary' onClick={(handleSubNumber)} />
          </Row>
          <Row>
            <ButtonCaracteres label="0" onClick={() => handleAddNumber('0')} />
            <Button label='.' onClick={(handlePointNumber)}/>
            <Button label="=" variant='secondary' onClick={(handleEquals)} />
          </Row>
        </Content2>
      </Content1>
    </Container>
  );
}

export default App;
