import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Titulo do Artigo</h1>
          <p className="lead">Conteudo do artigo. Este é um jumbotron modificado 
          que ocupa todo o espaço horizontal de seu parente.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Article;