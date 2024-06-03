'use client'

import Image from 'next/image'

import { media } from '@unipam/theme'

import styled from 'styled-components'

export const IncentivesWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.nunitoRegular};
  align-items: center;
  margin: 0 0 5rem 0;

  ${media.lg`
    flex-direction: row;

  `}
`

export const IncentivesImageWrap = styled.div`
  position: relative;
  width: 280px;
  height: 320px;

  ${media.lg`
      width: 580px;
      height: 540px;

  `}
`

export const IncentivesImage = styled(Image)`
  object-fit: contain;
  user-select: none;
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InfoTitleWrap = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  ${media.lg`
    flex-direction: row;
    text-align: unset;
  `}
`

export const InfoCardsWrap = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 0.1rem;
`

export const InfoCardIndividual = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_80};
  padding: 1rem;
  border-radius: 5px;
`

export const CardTopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const InfoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.h6};
`

export const InfoCardDiscount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.p3};
  font-family: ${({ theme }) => theme.fonts.openSansSemibold};
  color: ${({ theme }) => theme.colors.secondary_100};
`

export const InfoCardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.p2};
`
