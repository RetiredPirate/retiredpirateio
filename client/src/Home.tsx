import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 100px;
`

const Home: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return <Container>HOME!</Container>
}

export default Home
