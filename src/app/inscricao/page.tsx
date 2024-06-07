'use client'

import { useState } from 'react'

import { Button } from '@unipam/sites'
import { CustomInput, CustomSelect, SelectOption } from '@unipam/ui'

import {
  InscricaoWrap,
  FormTitle,
  FormSubtitle,
  FormWrap,
  InputsWrap,
  StyledContainer,
  WarningText,
  TitleWrap,
  AceiteWrap,
} from './styles'

const ListaCursos = [
  {
    curso: 'Letras',
  },
  {
    curso: 'Matemática',
  },
  {
    curso: 'História',
  },
  {
    curso: 'Sistemas de Information',
  },
]

export default function Inscricao() {
  const [currentOption, setCurrentOption] = useState('')

  const handleSelectChange = (selectedOption: string) => {
    if (currentOption !== '') {
      setCurrentOption(selectedOption)
    }
    setCurrentOption(selectedOption)
  }

  return (
    <StyledContainer>
      <InscricaoWrap>
        <TitleWrap>
          <FormSubtitle>Escolha seu curso e</FormSubtitle>
          <FormTitle>Inscreva-se</FormTitle>
        </TitleWrap>

        <FormWrap>
          <InputsWrap>
            {/* <CustomInput placeholder='Seu Nome' fullWidth></CustomInput>
            <CustomInput placeholder='Seu CPF' fullWidth></CustomInput>
            <CustomInput placeholder='Data de Nascimento' fullWidth></CustomInput>
            <CustomInput placeholder='Telefone' fullWidth></CustomInput>
            <CustomInput placeholder='Seu e-mail' fullWidth></CustomInput>
            <CustomInput placeholder='Seu celular' fullWidth></CustomInput> */}
          </InputsWrap>
          <AceiteWrap>
            <WarningText>
              * Aviso bla bla bla bla bla bla todo foda pica aviso pica avis foda
            </WarningText>
            <Button color='secondary' type='submit'>
              Cadastrar
            </Button>
          </AceiteWrap>
        </FormWrap>
      </InscricaoWrap>
    </StyledContainer>
  )
}
