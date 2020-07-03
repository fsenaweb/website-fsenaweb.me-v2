import * as React from 'react';
import PersonalPhoto from '../../images/personal-photo.png'
import { icons } from '../Hability/icon'

import * as S from './styled';

const About = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Quem sou</S.Title>
        <S.ContainerAbout>
          <S.AboutInfo>
            <img src={PersonalPhoto} alt="Foto Currículo"/>
            <h1>FORMAÇÃO</h1>
            <p>Graduando em tecnologia em Sistemas para Internet pela Universidade Potiguar – UNP</p>

            <h2>COMPETÊNCIAS PESSOAIS</h2>
            <ul>
              <li>Responsabilidade</li>
              <li>Espírito de Equipe</li>
              <li>Dedicação</li>
              <li>Organização</li>
            </ul>
          </S.AboutInfo>
          <S.AboutText>
            <p>Muito prazer, meu nome é Matheus Ricelly, sou da cidade de Pau dos Ferros, e desde  meados de 2010 trabalho como desenvolvedor web, com experiência utilizando a linguagem PHP em meus projetos. Trabalho com ferramentas como Laravel, CodeIgniter, Lumen, Git, Docker, entre outras.</p>

            <p>Já nos últimos 4 anos, tenho me dedicado ao desenvolvimento com a Linguagem JavaScript e suas ferramentas e venho fortalecendo meus conhecimentos com o Node, Express, Adonis.js, além de ferramentas frontend como Vue e React para deixar as aplicações web mais interativas</p>

            <p>Nos meus projetos desenvolvidos, tenho soluções completas como Progressive Web App (PWA), Sites, Sistemas Web, Landing Page, Single Page Application (SPA).</p>

            <p>Carreira desenvolvida na área de Tecnologia da Informação, com experiência em desenvolvimento de sistemas web, implantação e manutenção de sistemas, gestão de equipes.</p>
            <S.ContainerHability>
              {icons.map((item, i) => {
                return (
                  <S.ListHability key={i}>
                    <img src={item.image} alt={item.title}/>
                    {item.title}
                  </S.ListHability>
                )
              })}
            </S.ContainerHability>
          </S.AboutText>
        </S.ContainerAbout>
      </S.Container>
    </S.Wrapper>
  );
};

export default About;
