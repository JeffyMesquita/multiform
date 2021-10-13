/* eslint-disable react/jsx-no-target-blank */
import { useHistory } from 'react-router-dom';
import { Container, ContainerInfo, Icon, ContainerNivel } from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';

export const FormStepFinal = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(state.name === '' && state.github === '' && state.email === ''){
      history.push('/step3');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }   
  // eslint-disable-next-line
  }, []);

  return (
    <Theme>
      <Container>
        <p>Todas etapas concluídas</p>
        <h1>Cadastro Realizado com Sucesso!!</h1>
        <p>A seguir todas as suas informações.</p>
        <hr />

        <ContainerInfo>
          <h2>Pessoal</h2>
          <p>Nome:</p>
          <h1>{state.name}</h1>
        </ContainerInfo>          
        <ContainerInfo>
          <h2>Profissional</h2>
          <p>Nível:</p>
          {state.level === 0 ? 
            <ContainerNivel>
              <Icon>🥳</Icon>
              <h1>Sou Iniciante, e comecei a programar há menos de 2 anos</h1>
            </ContainerNivel>
          :
            <ContainerNivel>
              <Icon>😎</Icon>
              <h1>Sou Programador, e já programo há 2 anos ou mais</h1>
            </ContainerNivel>
          }
        </ContainerInfo>
        <ContainerInfo>
          <h2>Contato</h2>
          <p>E-Mail:</p>
          <h1>{state.email}</h1>
          <p>GitHub:</p>
          <a href={state.github} target="_blank">
            <h1>{state.github}</h1>
          </a>
        </ContainerInfo>

        
      </Container>
    </Theme>
  )
}