import React from "react"

import Default from "../layouts/Default/Default"
import SEO from "../components/seo"
import Text from "../primitives/Text/Text";

const SecondPage = () => (
  <Default>
    <SEO title="Page two" />
    <Text display3>About Page</Text>
  </Default>
)

export default SecondPage
