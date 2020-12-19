import { useRef, useState } from 'react'
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

  return (
    <>

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
