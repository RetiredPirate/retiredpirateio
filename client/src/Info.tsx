import { FunctionComponent, useEffect } from "react"
import * as React from "react"
import styled from "styled-components"
import { RouteComponentProps } from "@reach/router"
import { Link, Element, scrollSpy } from "react-scroll"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 150px;
`

const NavLink = styled(Link)`
  &.active {
    font-weight: bold;
    color: red;
  }
`

const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: lightgray;
  align-items: center;
  font-family: "Arial";
`

const Name = styled.h1`
  font-size: 50px;
`

const Info: FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  useEffect(() => {
    scrollSpy.update()
  })

  return (
    <Container>
      <Sidebar id="sidebar">
        <NavLink
          to="education"
          activeClass="active"
          smooth={true}
          duration={500}
          spy={true}
        >
          Education
        </NavLink>
        <NavLink
          to="job"
          activeClass="active"
          smooth={true}
          duration={500}
          spy={true}
        >
          Job Experience
        </NavLink>
      </Sidebar>
      <Content>
        <Name>Andrew Williams</Name>
        <a href="mailto:retiredpirate42@gmail.com">Email</a>
        <a href="https://github.com/SuperStuffman">GitHub</a>
        <a href="https://www.linkedin.com/in/real-person-andrew-williams/">
          LinkedIn
        </a>
        <p>Andrew M. Williams Portland OR, 97214 619-206-8423</p>
        <p>
          RetiredPirate42@gmail.com GitHub: https://github.com/SuperStuffman
        </p>
        <p>https://www.linkedin.com/in/real-person-andrew-williams/</p>
        <Element id="education">
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
        </Element>
        <Element id="job">
          <h3>RELATED EXPERIENCE</h3>
          <p>
            Software Development Engineer Viewpoint Construction Software Jun.
            2018 — Present Collaborated with a full stack apps team to develop
            enterprise scale Angular/.NET web applications. Attended agile
            stand-ups and participated in quarterly planning sessions. Improved
            collaboration with pair programming and sharing knowledge across
            teams. Spread knowledge and best practices, especially about
            front-end unit testing.
          </p>
          <p>
            Quality Assurance Automation Intern Viewpoint Construction Software
            May. 2017 — Jul. 2017 Developed automated tests for the company’s
            largest software product. Attended agile stand-ups and contributed
            to the development of an automated testing codebase.
          </p>
          <p>
            Software Development Intern General Atomics Aeronautical Systems
            Jun. 2016 — Aug. 2016 Developed code alongside full-time employees
            in the software department of General Atomics ASI. Wrote code and
            documentation, held meetings, fixed bugs, tested and evaluated the
            code of my peers.
          </p>
          <p>
            Senior Design Project Computer Science Capstone, University of
            Portland Aug. 2017 — May 2018 Collaborated with the Global
            Emancipation Network to gather information about suspected human
            traffickers using the Bitcoin blockchain. Designed and developed a
            web application to track suspects known addresses and group them by
            wallet. Enabled clients and law enforcement to search an address and
            gather new information about its owner.
          </p>
        </Element>
        <h3>TECHNICAL SKILLS</h3>
        <p>
          Languages: Javascript/Typescript, HTML, CSS/Sass, Java, C/C++, C#,
          Powershell, Bash, SqlServer, Python
        </p>
        <p>Frameworks: Angular2+, React, .NET Core </p>
        <p>
          Experience With: F#/Haskell, GraphQL, MongoDB, Node.js, Apollo
          (GraphQL)
        </p>
      </Content>
    </Container>
  )
}

export default Info
