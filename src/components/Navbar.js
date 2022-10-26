import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const HamburgerButton = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  font-size: 2.1rem;
  z-index: 2;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.elevation_2};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 35%;
  flex-direction: column;
  padding: 4rem 0.5rem;
  gap: 2rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
  transition: transform 150ms ease-in;
  a:first-child {
    text-decoration: none;
  }
  a {
    color: white;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.elevation_2};
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;
  max-width: 100%;
  height: 15%;
  gap: 3rem;
  font-size: 1.5rem;
  a:first-child {
    margin-right: auto;
    &:hover {
      text-decoration: none;
    }
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const Navbar = () => {
  const [navOpen, setNav] = useState(false);
  return (
    <>
      <HamburgerButton className="fas fa-bars" onClick={() => setNav(c => !c)} />

      <MobileMenu open={navOpen}>
        <Link to="/" onClick={() => setNav(false) } >
          <h1>Taregas</h1>
        </Link>
        <Link to="/" onClick={() => setNav(false)}>
          <p>Lista de Tarefas</p>
        </Link>
        <Link to="/form" onClick={() => setNav(false)} >
          <p>Adicionar</p>
        </Link>
      </MobileMenu>

      <DesktopMenu>
        <Link to="/">
          <h1>Tarefas</h1>
        </Link>
        <Link to="/">
          <p>Lista</p>
        </Link>
        <Link to="/form">
          <p>adicionar</p>
        </Link>
      </DesktopMenu>
      </>
  );
};

export {Navbar};