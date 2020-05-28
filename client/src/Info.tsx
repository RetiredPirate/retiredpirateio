import * as React from "react"
import { css } from "@emotion/core"

const Info: React.FunctionComponent = () => {
  return (
    <div
      css={css`
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background-color: lightgray;
        align-items: center;
        font-family: "Arial";
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
      <p>Andrew M. Williams Portland OR, 97214 619-206-8423</p>
      <p>RetiredPirate42@gmail.com GitHub: https://github.com/SuperStuffman</p>
      <p>https://www.linkedin.com/in/real-person-andrew-williams/</p>
      <h3>EDUCATION</h3>
      <p>
        University of Portland, Portland OR Aug. 2014 — May 2018 Bachelor of
        Science, Computer Science and Physics GPA: 3.88 Relevant Courses:
        Compiler Design, Computer Architecture, Programming Languages, Data
        Structures, Operating Systems, Object-Oriented Design, Software
        Engineering, Artificial Intelligence
      </p>
      <p>
        Saint Augustine High School, San Diego CA Aug. 2010 — May 2014 GPA:
        3.96, Graduated Summa Cum Laude
      </p>
      <h3>RELATED EXPERIENCE</h3>
      <p>
        Software Development Engineer Viewpoint Construction Software Jun. 2018
        — Present Collaborated with a full stack apps team to develop enterprise
        scale Angular/.NET web applications. Attended agile stand-ups and
        participated in quarterly planning sessions. Improved collaboration with
        pair programming and sharing knowledge across teams. Spread knowledge
        and best practices, especially about front-end unit testing.
      </p>
      <p>
        Quality Assurance Automation Intern Viewpoint Construction Software May.
        2017 — Jul. 2017 Developed automated tests for the company’s largest
        software product. Attended agile stand-ups and contributed to the
        development of an automated testing codebase.
      </p>
      <p>
        Software Development Intern General Atomics Aeronautical Systems Jun.
        2016 — Aug. 2016 Developed code alongside full-time employees in the
        software department of General Atomics ASI. Wrote code and
        documentation, held meetings, fixed bugs, tested and evaluated the code
        of my peers.
      </p>
      <p>
        Senior Design Project Computer Science Capstone, University of Portland
        Aug. 2017 — May 2018 Collaborated with the Global Emancipation Network
        to gather information about suspected human traffickers using the
        Bitcoin blockchain. Designed and developed a web application to track
        suspects known addresses and group them by wallet. Enabled clients and
        law enforcement to search an address and gather new information about
        its owner.
      </p>
      <h3>TECHNICAL SKILLS</h3>
      <p>
        Languages: Javascript/Typescript, HTML, CSS/Sass, Java, C/C++, C#,
        Powershell, Bash, SqlServer, Python
      </p>
      <p>Frameworks: Angular2+, React, .NET Core </p>
      <p>
        Experience With: F#/Haskell, GraphQL, MongoDB, Node.js, Apollo (GraphQL)
      </p>
    </div>
  )
}

export default Info
