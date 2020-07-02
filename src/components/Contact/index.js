import React  from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import useForm from "./useForm";

import * as S from './styled';
import * as SocialIcon from '../Header/styled';

const Contact = () => {

  const [{ values, loading }, onChangeInput, enviaMail] = useForm();

  const enviarContato = () => {
    let { nome, email, telefone, mensagem } = values
    axios.post('https://fsenaweb.me/functions/', {
      nome, email, telefone, mensagem
    })
      .then(() => {
        toast.success('Email enviado com sucesso!')
        console.log('Email enviado!');
        document.getElementsByName('nome').value = '';
        document.getElementsByName('email').value = '';
        document.getElementsByName('telefone').value = '';
        document.getElementsByName('mensagem').value = '';
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
            <ToastContainer />
            <form id="contatoForm" action="" onSubmit={enviaMail(enviarContato)} method="post">
            <input type="text" name="nome" placeholder="Nome" onChange={onChangeInput} required />
            <input type="email" name="email" placeholder="E-mail" onChange={onChangeInput} required />
            <input type="tel" name="telefone" placeholder="Telefone" onChange={onChangeInput} />
            <textarea name="mensagem" placeholder="Sua mensagem" onChange={onChangeInput} required/>
            <input type="submit" value={loading ? "Enviando..." : "Envie sua mensagem"} />
        </form>
          </S.FormInput>
        </S.ContainerForm>
      </S.Container>
    </S.Wrapper>
  );
};

export default Contact;
