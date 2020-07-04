import * as React from 'react';
import {Link} from "gatsby";
import {useState, useEffect} from 'react';

import * as S from './styled'

const MenuMobile: React.FC = () => {

  const [close, setClose] = useState(false);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);

  const toggleMenu = (): void => {
    setClose(!close)
  }

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div>
      <S.MobileMenu onClick={() => toggleMenu()} active={close} position={scrollY}/>
      <S.CloseMenu onClick={() => toggleMenu()} active={close} position={scrollY}/>
      <S.MenuIn isOpen={close}>
        <S.Logo>
          <Link to="/">fsenaweb<span>.me</span></Link>
        </S.Logo>
          <S.MenuList to="/" onClick={() => toggleMenu()}>Home</S.MenuList>
          <S.MenuList to="/quem-sou" onClick={() => toggleMenu()}>Quem sou</S.MenuList>
          <S.MenuList to="/portfolio" onClick={() => toggleMenu()}>Portfólio</S.MenuList>
      </S.MenuIn>
    </div>
  );
};

export default MenuMobile;
