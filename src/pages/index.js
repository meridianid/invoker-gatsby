import React from "react"

import Default from "./../layouts/Default/Default"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../layouts/Container/Container";
import Text from "../primitives/Text/Text";

const IndexPage = () => (
  <Default>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container
      bleed
      style={{
        alignItems: 'center',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: `calc(100vh - 64px)`,
        maxHeight: '100vh',
      }}>
      <div style={{ width: `128px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Text display2 component="h1">Invoker Gatsby</Text>
    </Container>
  </Default>
)

export default IndexPage
