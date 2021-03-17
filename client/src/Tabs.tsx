import * as React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"

const Container = styled.div`
  height: 100px;
`

const TabLink = styled(Link)``

const Tabs: React.FunctionComponent = () => {
  return (
    <Container>
      <Link to="/">HOME</Link>
      <Link to="info">INFO</Link>
    </Container>
  )
}

export default Tabs
