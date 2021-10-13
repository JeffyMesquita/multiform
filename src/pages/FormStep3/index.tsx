
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === ''){
      history.push('/step2');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }   
  // eslint-disable-next-line
  }, []);

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== '') {
      history.push('/final');
      console.log(state);
    } else {
      alert('Por favor preencha os seus contatos!')
    }    
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    })
  }

  return (
    <Theme>
      <Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Legal {state.name},agora nos diga onde podemos te encontrar?</h1>
        <p>Preencha com seus contatos para conseguirmos contactá-lo.</p>

        <hr />

        <label htmlFor="Mail">
          Qual seu e-mail?
          <input 
            type="text" 
            id="Mail" 
            autoFocus
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="GitHub">
          Qual seu GitHub?
          <input 
            type="text" 
            id="GitHub" 
            autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link to="/step2" className="backButton" >⬅ Voltar</Link> 
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  )
}