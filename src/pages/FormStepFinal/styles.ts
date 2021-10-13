import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 20px;  

  p { 
    font-size: 13px;
    color: #B8B8D4;
  }
  h1 { 
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr { 
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px o;
  }  
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0; 
  padding-bottom: 10px;
  padding-left: 15px;
  border: 2px solid #25CD8922;
  border-radius: 10px;

  h2{     
    margin: -15px 0 0 15px;
    padding: 0;    
    font-size: 16px;
    color: #B8B8D4AA;
    z-index: 1;
  }
  p { 
    font-size: 11px;
    color: #B8B8D4;
  }
  h1 { 
    margin: 0;
    padding: 0;
    font-size: 20px;
  }

  a:link, a:visited {
    text-decoration: none;
    color: #ffffff;
	}
  a:hover {
    text-decoration: underline;
    color: #25CD89;
	}
    a:active {
    text-decoration: none;
	}
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: #191A5988;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const ContainerNivel = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  h1 {
    margin-top: 2px;
  }
`;