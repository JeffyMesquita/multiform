
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  //eslint-disable-next-line
  }, []);

  const handleNextStep = () => {
    if(state.name !== '') {
      history.push('/step2');
    } else {
      alert('Por favor, preencha seu nome.')
    }    
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label htmlFor="Nome">
          Seu nome completo
          <input 
            type="text" 
            id="Nome" 
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}