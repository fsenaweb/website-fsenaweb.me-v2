import React from 'react';

import * as S from './styled';
import * as SocialIcon from '../Header/styled'

const Contact = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Fale Conosco</S.Title>
        <S.ContainerForm>
          <S.FormInfo>
            <h1>"Quando você contrata pessoas mais inteligentes do que você,
              prova que é mais inteligentes do que elas". (R. H. Grant)</h1>
            <h2>
              <a href="tel:84999959215">+55 84 99995-9216</a>
              <a href="mailto:contato@fsenaweb.me">contato@fsenaweb.me</a>
            </h2>
            <SocialIcon.SocialMedia>
              <a href="http://www.linkedin.com/in/fsenaweb" aria-label="Linkedin" target="_blank" rel="noreferrer noopener"><S.IconLinkedin /></a>
              <a href="https://medium.com/@fsenaweb" target="_blank" aria-label="Medium" rel="noreferrer noopener"><S.IconMedium /></a>
              <a href="https://github.com/fsenaweb/" target="_blank" aria-label="Github" rel="noreferrer noopener"><S.IconGit /></a>
              <a href="https://twitter.com/fsenaweb" target="_blank" aria-label="Twitter" rel="noreferrer noopener"><S.IconTwit /></a>
              <a href="http://www.instagram.com/fsenaweb" target="_blank" aria-label="Instagram" rel="noreferrer noopener"><S.IconInsta /></a>
              <a href="http://www.fb.me/fsenaweb" target="_blank" aria-label="Facebook" rel="noreferrer noopener"><S.IconFace /></a>
            </SocialIcon.SocialMedia>
          </S.FormInfo>
          <S.FormInput>
            <form id="contatoForm" action="" method="post">
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <input type="tel" name="phone" placeholder="Telefone" />
            <textarea name="message" placeholder="Sua mensagem" required/>
            <input type="submit" value="Envie sua mensagem" />
        </form>
          </S.FormInput>
        </S.ContainerForm>
      </S.Container>
    </S.Wrapper>
  );
};

export default Contact;
