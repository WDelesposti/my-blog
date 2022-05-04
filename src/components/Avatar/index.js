import React from "react";
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "wallace-delesposti-nexum.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED width: 60 height: 60 placeholder: TRACED_SVG )
          }
        }
      }
    `
  )
  return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} alt="Erro na imagem" />
}

export default Avatar;  