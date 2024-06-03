import { Container } from '@unipam/sites'

import {
  IncentivesWrap,
  IncentivesImageWrap,
  InfoWrap,
  InfoTitleWrap,
  InfoCardsWrap,
  InfoCardIndividual,
  InfoTitle,
  InfoCardTitle,
  CardTopSection,
  InfoCardDiscount,
  IncentivesImage,
} from './styles'

const DescontosContent = [
  {
    titulo: 'Isenção de Mátricula',
    descricao: 'Promoção válida apenas para cursos do Polo de Patos de Minas.',
    textDesconto: '25%',
  },
  {
    titulo: 'Grupos',
    descricao:
      'Entre em contato com a Coordenação da Pós para integrar-se. Promoção válida apenas para cursos do Polo de Patos de Minas.',
    textDesconto: 'Gratis',
  },
  {
    titulo: 'Empresa',
    descricao: 'Entre em contato com a Coordenação de Pós para conveniar-se.',
    textDesconto: 'Gratis',
  },
  {
    titulo: 'Funcionários do UNIPAM',
    descricao:
      'Solicite o seu desconto para cursos EaD com presencialidade através do Portal em UniChamados.',

    textDesconto: '20%',
  },
  {
    titulo: 'Pós Digital (100% online)',
    descricao: 'Desconto especial para alunos e ex-alunos do UNIPAM.',
    textDesconto: 'Grátis',
  },
  {
    titulo: 'Enadistas',
    descricao: 'Entre em contato com a Coordenação de Pós para mais informações.',
    textDesconto: '50%',
  },
]

export default function Descontos() {
  return (
    <Container>
      <IncentivesWrap>
        <IncentivesImageWrap>
          <IncentivesImage
            src={'/images/thumbnail.png'}
            alt={'imagem'}
            fill
          ></IncentivesImage>
        </IncentivesImageWrap>
        <InfoWrap>
          <InfoTitleWrap>
            <InfoTitle>Info title</InfoTitle>
            <p>Descontos tops</p>
          </InfoTitleWrap>
          <InfoCardsWrap>
            {DescontosContent.map((item, index) => {
              return (
                <InfoCardIndividual key={index}>
                  <CardTopSection>
                    <InfoCardTitle>{item.titulo}</InfoCardTitle>
                    <InfoCardDiscount>{item.textDesconto.toUpperCase()}</InfoCardDiscount>
                  </CardTopSection>
                  <p>{item.descricao}</p>
                </InfoCardIndividual>
              )
            })}
          </InfoCardsWrap>
        </InfoWrap>
      </IncentivesWrap>
    </Container>
  )
}
