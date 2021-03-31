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
  padding-top: 3rem;
  position: fixed;
  width: 150px;
`

const NavLink = styled(Link)`
  padding: 10px;

  &.active {
    font-weight: bold;

    ::before {
      content: ">  ";
    }
  }
`

const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  background-color: lightgray;
  align-items: center;
  padding-bottom: 10rem;
`

const Name = styled.h1`
  font-size: 50px;
`

const Section = styled(Element)`
  padding: 2rem;
`

const Info: FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  useEffect(() => {
    scrollSpy.update()
  }, [scrollSpy])

  const tabs = [
    { id: "me", label: "It's Me!" },
    { id: "education", label: "Learning!" },
    { id: "job", label: "Career!" },
    { id: "skills", label: "Skillz!" }
  ]

  return (
    <Container>
      <Sidebar>
        {tabs.map(tab => (
          <NavLink
            to={tab.id}
            activeClass="active"
            smooth={true}
            duration={500}
            spy={true}
          >
            {tab.label}
          </NavLink>
        ))}
      </Sidebar>
      <Content>
        <Section id="me">
          <Name>Andrew M. Williams</Name>
          <p>Portland OR, 97214</p>
          <p>619-206-8423</p>
          <a href="https://github.com/RetiredPirate">Github</a>
          <a href="mailto:RetiredPirate42@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/real-person-andrew-williams/">
            LinkedIn
          </a>
        </Section>
        <Section id="education">
          <h3>📚 EDUCATION</h3>
          <h4>University of Portland!</h4>
          <h5>Portland OR Aug. 2014 — May 2018</h5>
          <p>
            Bachelor of Science, Computer Science and Physics. I'm just one of
            those wierdos who likes physics. I'm not sorry. <br />
            GPA: 3.88
            <br />
            Relevant Courses: Compiler Design, Computer Architecture,
            Programming Languages, Data Structures, Operating Systems,
            Object-Oriented Design, Software Engineering, Artificial
            Intelligence
          </p>
          <h4>Saint Augustine High School</h4>
          <h5>San Diego CA Aug. 2010 — May 2014</h5>
          <p>
            I was definitely very cool in high school. My mom said so
            <br />
            GPA: 3.96, Graduated Summa Cum Laude (That's a really good laude)
          </p>
        </Section>
        <Section id="job">
          <h3>🖥️ RELATED EXPERIENCE</h3>

          <h4>
            Software Development Engineer -- Viewpoint Construction Software
          </h4>
          <h5>Portland OR Jun. 2018 — Present</h5>
          <p>
            Collaborated with a full stack apps team to develop enterprise scale
            Angular/.NET web applications. <br />
            Attended agile stand-ups and participated in quarterly planning
            sessions. <br />
            Improved collaboration with pair programming and sharing knowledge
            across teams. <br />
            Spread knowledge and best practices, especially about front-end unit
            testing. <br />
          </p>

          <h4>
            Quality Assurance Automation Intern -- Viewpoint Construction
            Software
          </h4>
          <h5>Portland OR May. 2017 — Jul. 2017</h5>
          <p>
            Developed automated tests for the company’s largest software
            product.
            <br />
            Attended agile stand-ups and contributed to the development of an
            automated testing codebase.
          </p>

          <h4>
            Software Development Intern -- General Atomics Aeronautical Systems
          </h4>
          <h5>Poway CA Jun. 2016 — Aug. 2016</h5>
          <p>
            Developed code alongside full-time employees in the software
            department of General Atomics ASI.
            <br />
            Wrote code and documentation, held meetings, fixed bugs, tested and
            evaluated the code of my peers.
          </p>

          <h4>
            Senior Design Project Computer Science Capstone -- University of
            Portland
          </h4>
          <h5>Portland OR Aug. 2017 — May 2018</h5>
          <p>
            Collaborated with the Global Emancipation Network to gather
            information about suspected human traffickers using the Bitcoin
            blockchain.
            <br />
            Designed and developed a web application to track suspects known
            addresses and group them by wallet.
            <br />
            Enabled clients and law enforcement to search an address and gather
            new information about its owner.
          </p>
        </Section>
        <Section id="skills">
          <h3>⚡ TECHNICAL SKILLZ</h3>

          <h4>Languages</h4>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>C#</li>
            <li>SqlServer</li>
            <li>Powershell</li>
            <li>Bash/Zshell</li>
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
          </ul>

          <h4>Frameworks</h4>
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>.NET Core</li>
            <li>Node.js</li>
          </ul>

          <h4>Libraries</h4>
          <ul>
            <li>rxjs</li>
            <li>Redux/ngrx</li>
            <li>Entity Framework</li>
          </ul>

          <h4>Tools</h4>
          <ul>
            <li>Storybook (UI)</li>
            <li>Git / Github / Azure Devops</li>
          </ul>

          <h4>Some Experience With</h4>
          <ul>
            <li>F#/Haskell</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Apollo (GraphQL)</li>
          </ul>
        </Section>
      </Content>
    </Container>
  )
}

export default Info
