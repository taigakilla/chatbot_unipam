import styled from "styled-components";
import { media } from "@unipam/theme";
import Link from "next/link";

export const StyledContainer = styled.div`
    display: block;
    font-family: ${({theme}) => theme.fonts.openSansLight};
`

export const StyledNavbar = styled.div`
    font-size: ${({theme}) => theme.fontSizes.p2};
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: rgba(0, 50, 200, .25);
    backdrop-filter: brightness(.4) blur(.4rem);
    color: ${({theme}) => theme.colors.background_100};
    position: fixed;
    box-shadow: 0 0 .5rem #00000050;
    z-index: 5;

    ${media.md`
        flex-direction: row;
        height: 4rem;
    `}

`

export const SlideWrapper = styled.div`
    background-image: url('/images/background.jpg');
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45rem;
`

export const StyledImage = styled.img`
    width: 100%;
    border-radius: inherit;
    height: 100%;
    object-fit: cover;
    filter: brightness(.8);
`

export const ImageText = styled.p`
    position: absolute;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.openSansNormal};
    font-size: ${({theme}) => theme.fontSizes.h4};
    color: #fff;
    text-shadow: 0 0 1rem #000;
    z-index: 3;

    ${media.md`
        font-size: ${({theme}) => theme.fontSizes.h2};
    `}

`

export const ProcessoContainer = styled.div`
    background-color: #fff;
    padding: 4rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    ${media.md`
        padding: 6rem 2rem 0 2rem;
    `}
`

export const StyledTitle = styled.p`
    font-family: ${({theme}) => theme.fonts.openSansSemibold};
    font-size: ${({theme}) => theme.fontSizes.p2};
    color: ${({theme}) => theme.colors.primary_100};
    text-align: center;

    ${media.md`
        font-size: ${({theme}) => theme.fontSizes.h4};
    `}
    
`

export const StyledTitleLight = styled.p`
    font-family: ${({theme}) => theme.fonts.openSansLight};
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSizes.p2};
    color: ${({theme}) => theme.colors.background_100};
    text-align: center;

    ${media.md`
        font-size: ${({theme}) => theme.fontSizes.h4};
    `}
    
`

export const ProcessoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`

export const StyledText = styled.p`
    font-family: ${({theme}) => theme.fonts.openSansNormal};
    font-size: ${({theme}) => theme.fontSizes.p3};
    color: ${({theme}) => theme.colors.base_100};
    text-align: justify;
    padding: 1rem;
    
    ${media.md`
        font-size: ${({theme}) => theme.fontSizes.p2};
        padding: 2rem;
    `}
`

export const StyledTextLight = styled.p`
    font-family: ${({theme}) => theme.fonts.openSansLight};
    font-size: ${({theme}) => theme.fontSizes.p3};
    color: ${({theme}) => theme.colors.background_100};
    text-align: justify;
    padding: 1rem;
    
    ${media.md`
        font-size: ${({theme}) => theme.fontSizes.p2};
        padding: 2rem;
    `}
`

export const StyledLink = styled.p`
    
    color: ${({theme}) => theme.colors.background_100};
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bolder;

`

export const LinkWrapper = styled(Link)`
    font-size: 0;
    border: solid .1rem #FFF;
    background: linear-gradient(#005AFC, #001ACC);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    position: absolute;
    z-index: 123;
    transform: translateY(12rem);
    box-shadow: 0 0 .5rem #fff;
    transition: all .4s ease;
    text-decoration: none;

    &:hover{
        font-size: medium;
        box-shadow: 0 0 2rem #fff;
        border-radius: 1rem;
        width: 11rem;
        height: 4.4rem;
    }

`