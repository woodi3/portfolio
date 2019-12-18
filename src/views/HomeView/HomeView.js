import React from 'react'
import { Nav, Layout, CustomLink, Divider, Image, Button } from '../../components'
import { Row, Col } from "styled-bootstrap-grid";
import { theme } from '../../constants'
import './HomeView.css'
import profile from '../../../assets/alex_portrait.jpeg'
import beerGallery from '../../../assets/beer-gallery-screenshot.png'
import quizMaker from '../../../assets/quiz-maker-screenshot.png'
import socialMediaSucks from "../../../assets/social-media-sucks.jpeg"
import flappyBird from "../../../assets/flappy-bird.jpeg"
import resumeBuilder from "../../../assets/resume-builder-screenshot.png"
import Resume from '../../../assets/Detailed_Resume.pdf'
import ProjectItem from './ProjectItem'

export const HomeView = () => {
    const navItems = [
        {
            path: 'https://github.com/woodi3',
            title: 'GitHub Account',
        },
        {
            path: 'mailto:woodawilliam@gmail.com',
            title: 'Contact'
        }
    ]
    const projectItems = [
      {
        projectTitle: "QUIZ MAKER",
        projectDescription: `An Angular application that allows you to take a pre-generated quiz.
            The purpose of the application is to demo Angular skills and common Angular design. I would like
            to add more analytics (ie. time taken to take quiz, time taken to answer single question, etc.).`,
        img: quizMaker,
        links: [
          {
            url: "https://gracious-bhabha-488a9b.netlify.com",
            text: "VIEW LIVE"
          },
          {
            url: "https://github.com/woodi3/quiz-maker",
            text: "VIEW GITHUB"
          }
        ]
      },
      {
        projectTitle: "VUE.JS RESUME BUILDER",
        projectDescription: `A resume generator that outputs a PDF file. 
        I built the application using Vue.js with Vuex as the store. 
        It's a simple utility that still has some more work to do (mobile layouts, more templates, etc.).`,
        img: resumeBuilder,
        links: [
          {
            url: "https://mystifying-perlman-e05aac.netlify.com/#/",
            text: "VIEW LIVE"
          },
          {
            url: "https://github.com/woodi3/vue-resume",
            text: "VIEW GITHUB"
          }
        ]
      },
      {
        projectTitle: "VUE.JS BEER GALLERY",
        projectDescription: `A beer gallery application using the free beer api. I built the application using Vue.js with Vuex as the store.
                    Would like to further the user interface some more. The purpose
                    of this project was to get some practice using Vuex.`,
        img: beerGallery,
        links: [
          {
            url: "https://tender-nobel-73c216.netlify.com/",
            text: "VIEW LIVE"
          },
          {
            url: "https://github.com/woodi3/beer-gallery",
            text: "VIEW GITHUB"
          }
        ]
      },
      {
        projectTitle: "Social Media Sucks",
        projectDescription: `A React Front End application that makes api calls to a .NET
                    Core API connected to MongoDB. The application is a simple "make
                    a post" app. I would like to add some more social media
                    features, such as commenting, profiles, etc. This has not been
                    deployed yet.`,
        img: socialMediaSucks,
        links: [
          {
            url: "https://github.com/woodi3/react-social-media-sucks",
            text: "VIEW GITHUB"
          }
        ]
      },
      {
        projectTitle: "VUE.JS FLAPPY BIRD",
        projectDescription: `A Vue.js project building the infamous Flappy Bird game. 
            The project is mostly a fork of a React project that re-built the game. 
            I wanted to practice translating React.js to Vue.js as well playing a fun game.`,
        img: flappyBird,
        links: [
          {
            url: "https://confident-ramanujan-149ee3.netlify.com/",
            text: "VIEW LIVE"
          },
          {
            url: "https://github.com/woodi3/vue-flappy",
            text: "VIEW GITHUB"
          }
        ]
      }
    ];
    const introText = `hello! my name is`
    const nameText = (
        <span>
            william wood <span className="and-symbol" style={{color: theme.primary.bgLight}}>&</span> 
            <br />
            I'm a software developer
        </span>
    )
    const elevatorPitch = (
        <span>
            I'm a determined software developer currently improving the efficiency of client and employee benefit enrollment at The Benefit Company. 
            You can find my recent projects below or on my github: <CustomLink bold href="https://github.com/woodi3">woodi3</CustomLink>
        </span>
    )
    const skillSetHeading = (
      <h2 className="skillset-heading">
        front end, user experience,{" "}
        <span className="and-symbol" style={{ color: theme.primary.bgLight }}>
          &
        </span>{" "}
        back end
      </h2>
    );
    const portfolioText = (
        <p>
            I specialize in building complex applications focusing on the front-end development
            with understanding of server processing and development. As well, I have some experience with 
            mobile development. I enjoy delivering effortless user experience and bringing designs to life.
            Working to solve complex and challenging problems is what makes me enjoy programming
            as much as I do. My favorite languages are Javascript and C#. Aside from the developing, I enjoy teaching newcomers about programming
            and the awesome things you can do with code. Currently, I am a Software Developer at
            The Benefit Company.
        </p>
    )
    
    return (
      <Layout fluid style={{ marginTop: 68 }}>
        <Layout>
          <Row>
            <Col sm={12} md={6}>
              <Nav navItems={navItems} />
              <div className="banner-container">
                <div
                  className="subtitle weird-transform"
                  style={{ color: theme.primary.text }}
                >
                  {introText}
                </div>
                <h1 className="banner-name-text weird-transform">{nameText}</h1>
                <p className="banner-elevator-pitch">{elevatorPitch}</p>
              </div>
            </Col>
            <Col hiddenSmDown md={6}>
              <Image
                width={500}
                height={700}
                src={profile}
                style={{ borderRadius: 333 }}
              />
            </Col>
          </Row>
        </Layout>
        <Divider />
        <Layout style={{ paddingTop: 120 }}>
          <Row>
            <Col sm={12} md={6}>
              <div className="subtitle" style={{ color: theme.primary.text }}>
                my skillset
              </div>
              {skillSetHeading}
            </Col>
            <Col sm={12} md={6}>
              {portfolioText}
            </Col>
          </Row>
        </Layout>
        <Divider />
        <Layout className="my-projects-container">
          <Row className="my-projects-header">
            <Col sm={12} md={6}>
              <h1 style={{ fontSize: "50px", lineHeight: "83px" }}>MY PROJECTS</h1>
            </Col>
            <Col
              md={6}
              alignSelf="center"
              hiddenSmDown
              style={{ textAlign: "center"}}
            >
              <Button onClick={() => window.location.assign("https://github.com/woodi3")}>VIEW GITHUB</Button>
            </Col>
          </Row>
          {projectItems.map((project, i) => (
            <ProjectItem isImgRight={i % 2 !== 0} {...project} key={i} />
          ))}
        </Layout>
        <Divider />
        <Layout style={{ paddingTop: 85, paddingBottom: 85 }}>
          <Row>
            <Col col style={{ textAlign: "center" }}>
              <h2>Want to see details about work experience?</h2>
              <Button onClick={() => window.location.assign(Resume)}>
                GET MY RESUME{" "}
                <span style={{ color: theme.grey.bgLight }}>(.PDF)</span>
              </Button>
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
}