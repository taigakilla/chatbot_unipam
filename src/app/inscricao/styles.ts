'use client'

import { Container, SectionContainer } from '@unipam/sites'
import { media } from '@unipam/theme'

import styled from 'styled-components'

// xs: "(min-width: 375px)";
//     sm: "(min-width: 576px)";
//     md: "(min-width: 768px)";
//     lg: "(min-width: 992px)";
//     xl: "(min-width: 1200px)";
//     xxl: "(min-width: 1400px)";
//     max_xs: "(max-width: 375px)";
//     max_sm: "(max-width: 576px)";
//     max_md: "(max-width: 768px)";
//     max_lg: "(max-width: 992px)";
//     max_xl: "(max-width: 1200px)";
//     max_xxl: "(max-width: 1400px)";

export const StyledContainer = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary_100};
  padding: 2rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.white};

  ${media.xl`
    padding: 2rem 4rem 2rem 0;
  `}
`

export const InscricaoWrap = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  gap: 3rem;
`

export const TitleWrap = styled.div`
  display: unset;
`

export const FormWrap = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  gap: 1rem;

  ${media.md`
    align-items: left;
  `}

  ${media.lg`
    padding: 0 24rem 0 0;
  `}
`

export const InputsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  width: 100%;
  ${media.md`
    grid-template-columns: 1fr 1fr;
  `}
`

export const AceiteWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`

export const FormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSansNormal};
  font-size: ${({ theme }) => theme.fontSizes.p1};
`

export const FormTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSansSemibold};
  font-size: ${({ theme }) => theme.fontSizes.h5};
`
export const WarningText = styled.p`
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  font-size: ${({ theme }) => theme.fontSizes.p4};
`
