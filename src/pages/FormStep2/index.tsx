
import { useHistory, Link } from 'react-router-dom';
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === ''){
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }   
  // eslint-disable-next-line
  }, []);

  const handleNextStep = () => {
    if(state.name !== '') {
      history.push('/step3');
    } else {
      alert('Por favor, preencha seu nome.')
    }    
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>{state.name}, o que melhor descreve você neste momento?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente</p>

        <hr />

        <SelectOption 
          title="Sou Iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption 
          title="Sou Programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        
        <Link to="/" className="backButton" >⬅ Voltar</Link> 
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}