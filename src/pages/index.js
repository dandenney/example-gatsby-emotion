import React from "react"
import { Link } from "gatsby"

import { songs } from "../data/songs"

import Layout from "../components/layout"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const PropsPage = () => (
  <Layout>
    <section>
      {songs.map(({ imgUrl, title, artist, playUrl }) => (
        <article
          css={css`
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
          `}
        >
          <img
            css={css`
              margin: 0;
            `}
            src={imgUrl}
          />
          <div
            css={css`
              @media screen and (min-width: 600px) {
                padding-left: 1.5rem;
              }
            `}
          >
            <h3
              css={css`
                font-size: 1.25rem;
                margin: 0 0 0.25rem 0;

                @media screen and (min-width: 600px) {
                  font-size: 2rem;
                  margin: 0 0 0.75rem 0;
                }
              `}
            >
              {title}
            </h3>
            <p
              css={css`
                @media screen and (min-width: 600px) {
                  font-size: 1.5rem;
                  margin-bottom: 2rem;
                }
              `}
            >
              {artist}
            </p>
            <a
              css={css`
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
              `}
              href={playUrl}
            >
              Play on Spotify
            </a>
          </div>
        </article>
      ))}
    </section>

    <nav
      css={css`
        margin: 2rem 0;
      `}
    >
      <Link
        css={css`
          margin-right: 1rem;
        `}
        to="/"
      >
        Prop Version
      </Link>
      <Link
        css={css`
          margin-right: 1rem;
        `}
        to="/styled/"
      >
        Styled Version
      </Link>
      <Link to="/import/">Import Version</Link>
    </nav>
  </Layout>
)

export default PropsPage
