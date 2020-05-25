import * as React from "react"
import { css } from "@emotion/core"

const Info: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background-color: lightgray;
        align-items: center;
        font-family: "Arial Black";
      `}
    >
      <h1
        css={css`
          font-size: 50px;
        `}
      >
        Andrew Williams
      </h1>
      <a href="mailto:retiredpirate42@gmail.com">Email</a>
      <a href="https://github.com/SuperStuffman">GitHub</a>
      <a href="https://www.linkedin.com/in/real-person-andrew-williams/">
        LinkedIn
      </a>
    </div>
  )
}

export default Info
