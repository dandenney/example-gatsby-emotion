import React from "react"
import { Link } from "gatsby"

import { songs } from "../data/songs"

import Layout from "../components/layout"

import styled from "@emotion/styled"

const StyledPage = () => (
  <Layout>
    <section>
      {songs.map(({ imgUrl, title, artist, playUrl, Nav }) => (
        <Song>
          <Img src={imgUrl} />
          <Wrapper>
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
            <Play href={playUrl}>Play on Spotify</Play>
          </Wrapper>
        </Song>
      ))}
    </section>

    <Nav>
      <Link to="/">Prop Version</Link>
      <Link to="/styled/">Styled Version</Link>
      <Link to="/import/">Import Version</Link>
    </Nav>
  </Layout>
)

const Song = styled.article`
  border: 1px solid #e5e5e5;
  padding: 1rem;
  text-align: center;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  @media screen and (min-width: 600px) {
    align-items: center;
    display: flex;
    padding: 1.5rem;
    text-align: left;

    &:not(:first-of-type) {
      margin-top: 2rem;
    }
  }
`

const Img = styled.img`
  margin: 0;
`

const Wrapper = styled.div`
  @media screen and (min-width: 600px) {
    padding-left: 1.5rem;
  }
`

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
    margin: 0 0 0.75rem 0;
  }
  font-size: 1.25rem;
  margin: 0 0 0.25rem 0;

  @media screen and (min-width: 600px) {
    font-size: 2rem;
    margin: 0 0 0.75rem 0;
  }
`

const Artist = styled.p`
  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`

const Play = styled.a`
  background: #1db954;
  border-radius: 24px;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    backround-color: #4bdf80;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.25rem;
  }
`

const Nav = styled.nav`
  margin: 2rem 0;

  a:not(:first-of-type) {
    margin-left: 1rem;
  }
`

export default StyledPage
