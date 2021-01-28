import * as React from 'react';
import { icons } from '../Hability/icon';
import * as S from './styled';

const PersonalPhoto = require("./../../images/personal-photo.png");

const About: React.FC = () => {
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
            <p>Muito prazer, meu nome é Matheus Ricelly e desde  meados de 2010 trabalho com desenvolvimento web, inicialmente com a experiência como desenvolvedor back-end utilizando a linguagem PHP em meus projetos. Trabalhei com ferramentas como Laravel, CodeIgniter, Lumen entre outras.</p>

            <p>Nos últimos anos, mais precisamente desde o ano de 2017, tenho me dedicado ao desenvolvimento front-end com a linguagem JavaScript, e através de suas ferramentas venho desenvolvendo diversas aplicações web, utilizando o Vue.js e o React (e várias ferramentas dos seus ecossistemas como Nuxt, Gatsby, Next, React Native). </p>

            <p>Nos meus projetos desenvolvidos, tenho soluções completas como Progressive Web App (PWA), Sites, Sistemas Web, Landing Page, Single Page Application (SPA), Aplicativos Mobile nativos e híbridos. Carreira desenvolvida na área de Tecnologia da Informação, com experiência e formação acadêmica em desenvolvimento de sistemas para web.</p>

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
