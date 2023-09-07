import * as React from "react"
import styled from "styled-components"

const Container = styled.div<{ reverse: boolean }>`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: ${p => p.reverse ? 'row-reverse' : 'row'};
`

const Text = styled.div<{ reverse: boolean }>`
  text-align: ${p => p.reverse ? 'left' : 'right'};
  font-size: 40px;
  flex: 1 0;
  padding: 40px;
`

const Image = styled.div`
  background-color: red;
  flex: 1 0 0;
`

interface HeroProps {
  reverse?: boolean;
  text: string;
  image: string;
}

export default function Hero({ reverse = false, text, image }: HeroProps) {
  return (
    <Container reverse={reverse}>
      <Text reverse={reverse}>{text}</Text>
      <Image>{image}</Image>
    </Container>
  )
}
