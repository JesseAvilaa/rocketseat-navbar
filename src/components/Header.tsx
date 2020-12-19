import { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import RocketseatLogo from '../assets/rocketseat.svg'

import {
  Container,
  Div,
  ManifestLink,
  MobileButton,
  ButtonJoin,
  IconMobile
} from '../styles/pages/Home'
import styled from 'styled-components'

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = (): void => {
    setMenuOpen(!menuOpen)
  }

  const Clickable = styled.div`
    width: 100%;
    height: 100%;
    ::after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 2;
      display: ${menuOpen ? 'block' : 'none'};
    }
  `
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Clickable onClick={() => setMenuOpen(false)} />
      <Div ref={headerRef} isMenuOpen={menuOpen}>
        <Container as="header" isMenuOpen={menuOpen}>
          <div className="logo">
            <Link href="/" aria-label="Link para a página inicial">
              <RocketseatLogo aria-hidden="true" />
            </Link>
          </div>
          <Link href="https://rocketseat.com.br/manifesto">
            <ManifestLink isMenuOpen={menuOpen}>Manifesto</ManifestLink>
          </Link>

          <Link href="https://app.rocketseat.com.br">
            <ButtonJoin isMenuOpen={menuOpen}>Entrar</ButtonJoin>
          </Link>

          <MobileButton
            onClick={handleMenuOpen}
            aria-label="Abrir menu do site"
          >
            <IconMobile isMenuOpen={menuOpen} />
          </MobileButton>
        </Container>
      </Div>
    </>
  )
}

export default Header
