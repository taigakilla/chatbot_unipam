'use client'

import { useEffect, useRef, useState } from 'react'
import {
  GlobalStyle,
  ImageText,
  LinkWrapper,
  LinkWrapperEndPage,
  LinkWrapperToTop,
  ProcessoContainer,
  ProcessoTextContainer,
  ScrollToTopDiv,
  SlideWrapper,
  StyleButtonEndPage,
  StyledContainer,
  StyledImage,
  StyledLink,
  StyledText,
  StyledTitle,
  StyledTitleLight,
  VoidSpace,
} from './style'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/20/solid'

const NavItems = [
  {
    name: 'About Us',
  },
  {
    name: 'Links',
  },
  {
    name: 'Links',
  },
]

const ProcessoContent = [
  {
    content:
      'O planejamento do desenvolvimento do projeto é uma etapa crucial que determina a base sobre a qual todo o projeto será construído. Este estágio inicial envolve a definição clara dos objetivos, o escopo do projeto, as principais entregas e os marcos que guiarão o progresso. Durante essa fase, é fundamental realizar uma análise detalhada das necessidades da instituição, identificando os recursos tecnológicos, humanos e financeiros necessários para a implementação e integração bem-sucedida do projeto. Além disso, é importante considerar os possíveis riscos e desenvolver estratégias de mitigação. Um plano bem estruturado não só facilita a organização e a execução das atividades, mas também assegura que todos os envolvidos compreendam suas responsabilidades e os prazos a serem cumpridos.',
  },
  {
    content:
      'Após o planejamento inicial, a realização de reuniões de validação com o líder do projeto e o Scrum Master é uma etapa indispensável para garantir que todas as suposições e decisões tomadas estão alinhadas com os objetivos e expectativas da instituição. Essas reuniões servem para revisar os detalhes do plano de desenvolvimento, discutir possíveis ajustes e confirmar que os requisitos identificados são precisos e completos. O Scrum Master desempenha um papel vital ao facilitar a comunicação e garantir que as práticas ágeis sejam seguidas, promovendo um ambiente colaborativo e eficiente. As reuniões de validação também são oportunidades para identificar e resolver quaisquer discrepâncias ou dúvidas, assegurando que todos os stakeholders estejam cientes e de acordo com o rumo do projeto.',
  },
  {
    content:
      'Com o planejamento e a validação concluídos, a próxima etapa envolve a solicitação da criação dos repositórios necessários para armazenar as dependências e os arquivos que serão desenvolvidos ao longo do projeto. A escolha de um sistema de versionamento apropriado, como Git, é essencial para manter a integridade e a organização do código. Os repositórios não apenas facilitam o gerenciamento das versões do software, mas também promovem a colaboração entre os desenvolvedores, permitindo que múltiplos membros da equipe trabalhem simultaneamente em diferentes partes do projeto sem conflitos. Além disso, o uso de repositórios garante que todas as alterações sejam rastreáveis e que seja possível reverter para versões anteriores em caso de necessidade, aumentando a segurança e a confiabilidade do processo de desenvolvimento.',
  },
  {
    content:
      'A fase de desenvolvimento é onde a maior parte do trabalho técnico ocorre. Durante essa etapa, os desenvolvedores escrevem o código, criam as funcionalidades e realizam testes para garantir que o software atenda aos requisitos estabelecidos. O uso de metodologias ágeis, como Scrum, facilita a gestão do desenvolvimento por meio de sprints, permitindo entregas incrementais e ajustes contínuos com base no feedback recebido. Após o desenvolvimento das funcionalidades, os arquivos são submetidos ao repositório da instituição. Este processo de upload é um momento crítico, pois marca a transição do trabalho de desenvolvimento para a fase de integração e testes finais. Subir os arquivos para o repositório institucional não só garante que o código esteja seguro e acessível para todos os membros da equipe, mas também facilita a continuidade do projeto, permitindo que futuras melhorias e manutenções sejam realizadas de maneira organizada e eficiente.',
  },
  {
    content:
      'A implantação de um projeto desde a sua concepção até a entrega final requer um planejamento detalhado, validações contínuas e uma gestão eficaz dos recursos e atividades. Cada etapa desempenha um papel fundamental para o sucesso do projeto, desde a identificação das necessidades e o planejamento inicial, passando pelas reuniões de validação, a criação dos repositórios e o desenvolvimento propriamente dito, até a submissão dos arquivos finais. Ao seguir essas etapas de maneira organizada e colaborativa, é possível garantir que o projeto não apenas atenda aos requisitos da instituição, mas também seja entregue dentro do prazo e com a qualidade esperada.',
  },
]

export default function BackPage() {
  const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100000) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledContainer>
      <GlobalStyle />
      <SlideWrapper>
        <ImageText>CHATBOT EDUCACIONAL</ImageText>
        <StyledImage src={'/images/background.jpg'} alt={'123'}></StyledImage>
        <LinkWrapperEndPage href={'#pageEnd'}>
          <StyleButtonEndPage>
            <ArrowDownIcon color='#fff' width={40} height={40} />
          </StyleButtonEndPage>
        </LinkWrapperEndPage>
      </SlideWrapper>
      <ProcessoContainer>
        <StyledTitle>PROCESSO DE DESENVOLVIMENTO</StyledTitle>
        <ProcessoTextContainer>
          {ProcessoContent.map((element, index) => {
            return (
              <StyledText key={index}>
                {index + 1}. {element.content}
              </StyledText>
            )
          })}
        </ProcessoTextContainer>
      </ProcessoContainer>
      <VoidSpace id='pageEnd'>
        <StyledTitle>EXEMPLO DO CHATBOT</StyledTitle>
        <LinkWrapper href='/chatfs'>
          <StyledLink>FULL SCREEN</StyledLink>
          {/* <ArrowsPointingOutIcon color='#fff' width={40} height={40} /> */}
        </LinkWrapper>
      </VoidSpace>
      <ScrollToTopDiv>
        <LinkWrapperToTop onClick={scrollToTop}>
          <ArrowUpIcon color='#fff' width={25} height={25} />
        </LinkWrapperToTop>
      </ScrollToTopDiv>
    </StyledContainer>
  )
}
