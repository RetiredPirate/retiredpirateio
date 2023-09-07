import * as React from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { Style } from "./Style"
import Hero from "./Hero"

const Container = styled.div``

const Spacer = styled.div`
  height: 50vh;
`

const Name = styled.div`
  width: 100%;
  padding: 40px;
  font-size: 80px;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: ${Style.color.darkGrey};
`

const Www = styled.span`
  color: ${Style.color.red};
`

const Home: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <Container>
      <Spacer />
      <Name>andre<Www>www</Www>illiams</Name>
      <Spacer />
      <Hero text="Experience!" image=""></Hero>
      <Hero text="Experience!" image="" reverse></Hero>
      <Hero text="Experience!" image=""></Hero>
    </Container>
  )
}

export default Home
