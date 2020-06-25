import React from 'react'
import PersonalPhoto from './../../images/personal-photo.png'
import CardExperience from "../../components/Personal/CardExperience.tsx";

import * as S from './styled'

const Index = () => {
  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <S.BoxDescription>
            <S.TextDescription>
              <p>Carreira desenvolvida na área de Tecnologia da Informação, com experiência em desenvolvimento de
                sistemas web, implantação e manutenção de sistemas, gestão de equipes.</p>
              <p>Nos meus projetos desenvolvidos, tenho soluções completas como Progressive Web App (PWA), Sites,
                Sistemas Web, Landing Page, Single Page Application (SPA).</p>
            </S.TextDescription>
            <S.ImageDescription>
              <img src={PersonalPhoto} alt="Foto Currículo"/>
            </S.ImageDescription>
          </S.BoxDescription>
          <S.BoxExperience>
            <S.Title>Últimas experiências...</S.Title>
            <CardExperience
              ano={2010}
              cargo={'Web System Developer'}
              empresa={'Joyjet Digital Space Agency'}
              local={'Paris - França'}/>
            <CardExperience
              ano={2009}
              cargo={'Full-stack developer'}
              empresa={'DevSquad'}
              local={'Salt Lake - EUA '}/>
            <CardExperience
              ano={2009}
              cargo={'Full-stack developer'}
              empresa={'Getty/IO'}
              local={'Wilmington - EUA'}/>
          </S.BoxExperience>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};

export default Index;
