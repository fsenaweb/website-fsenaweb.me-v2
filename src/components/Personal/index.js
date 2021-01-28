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
              <p>Carreira desenvolvida na área de Tecnologia da Informação, com experiência e formação acadêmica em desenvolvimento de
                sistemas para web. Possuo conhecimentos com aplicações híbridas e nativas para dispositivos móveis, além
                de soluções no backend provendo API's para diversas soluções.</p>
              <p>Nos meus projetos desenvolvidos, tenho soluções completas como Progressive Web App (PWA), Sites,
                Sistemas Web, Landing Page, Single Page Application (SPA) e Aplicativos móveis.</p>
            </S.TextDescription>
            <S.ImageDescription url={PersonalPhoto} />
          </S.BoxDescription>
          <S.BoxExperience>
            <S.Title>Últimas experiências...</S.Title>
            <CardExperience
              ano={2020}
              cargo={'Frontend developer'}
              empresa={'Flapper'}
              local={'Belo Horizonte/MG - Brasil'}/>
            <CardExperience
              ano={2020}
              cargo={'Web System Developer'}
              empresa={'Joyjet Digital Space Agency'}
              local={'Paris - França'}/>
            <CardExperience
              ano={2019}
              cargo={'Full-stack developer'}
              empresa={'DevSquad'}
              local={'Salt Lake - EUA '}/>
          </S.BoxExperience>
        </S.Container>
      </S.Wrapper>
    </div>
  );
};

export default Index;
