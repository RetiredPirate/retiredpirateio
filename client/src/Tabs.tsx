import * as React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"

const Container = styled.div`
  align-items: center;
  display: flex;
  position: fixed;
  height: 3rem;
  z-index: 100;
`

const Tab = styled(Link)`
  padding: 1rem;
`

const Title = styled.div`
  font-size: 30px;
`

const Tabs: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Andrew Williams</Title>
      <Tab to="/">HOME</Tab>
      <Tab to="info">INFO</Tab>
    </Container>
  )
}

export default Tabs
