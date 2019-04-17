import React from "react"
import { Link } from "gatsby"

import { songs } from "../data/songs"

import Layout from "../components/layout"
import {
  Song,
  Img,
  Wrapper,
  Title,
  Artist,
  Play,
  Nav,
} from "../components/separate"

const ImportPage = () => (
  <Layout>
    <section>
      {songs.map(({ imgUrl, title, artist, playUrl }) => (
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

export default ImportPage
