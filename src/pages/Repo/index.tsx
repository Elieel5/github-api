import React from 'react';

import { Container,
         LinkButton,
         GithubIcon,
       } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <LinkButton href={'https://github.com/Elieel5'}>
        <GithubIcon/>
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;