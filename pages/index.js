import React from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";
import RecentProject from "../components/RecentProject";
import ContributionOption from "../components/ContributionOption";
import BorderBox from "../components/BorderBox";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import { attributes } from '../content/home.md';
import "@fontsource/sora/500.css";
import "@fontsource/sora/800.css";
import { useRouter } from "next/router";

// This is the default breakpoint
createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em"
})

const FeaturedProjectsList = () => {
  const { projects, bottom_image } = attributes;
  
  return (
    <>
      <SubHeading
        title="Recently Active Projects"
      />

      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(5, 1fr)"
        gap={6}
        backgroundPosition={["100% 58%", "center"]}
        backgroundRepeat="no-repeat"
        backgroundSize={["100%", "75% 75%"]}
        backgroundImage={"url('" + bottom_image + "')"}
        marginTop="2rem">

        {projects.slice(0,2).map((project, index) => {
            return (
              <React.Fragment
                key={`project_${index}`}>
                {
                  index % 2 != 0 &&
                    <GridItem
                      display={["none", "block"]} />
                }
                <RecentProject 
                  project={project}
                />
              </React.Fragment>
            )
          })
        }

        <GridItem
          colStart={[1,3]}
          colSpan={[7, 3]}>
            <Heading as="h5" fontSize="18px" marginY="2rem" fontWeight="800" size="md" textStyle="caps" textTransform="uppercase" textAlign="center">
              <StyledButton href="projects" content={"Browse all projects"} />
            </Heading>
        </GridItem>

        {projects.slice(2,4).map((project, index) => {
            return (
              <React.Fragment
                key={`project_2_${index}`}>
                {
                  index % 2 != 0 &&
                    <GridItem
                      display={["none", "block"]} />
                }
                <RecentProject 
                  project={project}
                />
              </React.Fragment>
            )
          })
        }
      </Grid>
    </>
  )
}

const Partners = () =>{
  return(
    <>
      <SubHeading
        title="Our Partners"
      />
      <Grid
        px="1rem"
        templateColumns="repeat(5, 1fr)"
        gap={6}
        marginBottom={9}
        marginTop="2rem"
        >
        <GridItem mx={["auto", 0]} colSpan={[5, 2]} colStart={[1, 2]}>
          <Image h="90px" src="img/assets/drawdown_europe.png" alt="DrawDown Europe" />
        </GridItem>
        <GridItem mx={["auto", 0]} colSpan={[5, 2]}>
          <Image h="90px" src="img/assets/CoLab.png" alt="CoLab Coop" />
        </GridItem>
        <GridItem mx={["auto", 0]} colSpan={[5, 2]} colStart={[1, 2]}>
          <Image h="90px" marginX={[0, "auto"]} src="img/assets/drawdown_us.png" alt="Project Drawdown" />
        </GridItem>
        <GridItem mx={["auto", 0]} colSpan={[5, 1]}>
          <Image h="90px" marginX={[0, "auto"]} src="img/assets/projectdrawdown.png" alt="Drawdown GA" />
        </GridItem>
      </Grid>
    </>
  )
}

const Contribution = () => {
  return (
    <Container>
      <Image mx="auto" my="4rem" src="img/assets/wavy2.png" />

      <Heading as="h4" textAlign="center" fontSize={["2xl", "3xl"]}>
        Are you Interested in Contributing?
      </Heading>

      <ContributionOption
        title="Have a Resource to Add?"
        buttonTitle="GET STARTED"
        image={<Image marginX="auto" src="img/assets/Linear2.png" alt="Segun Adebayo" />}
        onClick={() => { window.open("/connect") }}/>
      <ContributionOption
        title="Engergized by this but not sure how to contibute?"
        buttonTitle="CONNECT ON SLACK"
        image={<Image marginX="auto" src="img/assets/Linear.png" alt="Segun Adebayo" />}
        onClick={() => { window.open("/connect") }}/>
      <ContributionOption
        title="Propose your own project."
        buttonTitle="CONTACT US"
        image={<Image marginX="auto" src="img/assets/Linear3.png" alt="Segun Adebayo" />}
        onClick={() => { window.open("/connect") }}/>
    </Container>
  )
}

const SneakPeek = () => {
  return (
    <Container>
      <Image mx="auto" mt={["0", "4rem"]} mb="4rem" src="img/assets/wavy2.png" />
      <Heading as="h4" fontSize={["2xl", "3xl"]} whiteSpace={["normal", "nowrap"]}>
        See a sneak peek of software in development
      </Heading>
      <Box mt="2rem">
        <ContributionOption
          title="Drawdown Global Research Platform Web UI repo"
          buttonTitle="WEB UI PREVIEW"
          image={<Image marginX="auto" src="img/assets/git_logo.png" alt="Web UI Preview" />}
          onClick={() => { window.open("https://github.com/ProjectDrawdown/global-research-platform") }}/>
        <ContributionOption
          title="Drawdown solutions in python repo"
          buttonTitle="PYTHON PREVIEW"
          image={<Image marginX="auto" src="img/assets/git_logo.png" alt="Web UI Preview" />}
          onClick={() => { window.open("https://github.com/ProjectDrawdown/solutions") }}/>
      </Box>
    </Container>
  )
}

const AboutUs = ({ project_image }) => {
  return (
    <>
      <SubHeading
        title="Who We Are"
      />
      
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={[4, 64]}
        mx={[0, "5rem"]}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={["100%", "75% 75%"]}
        backgroundImage={"url('" + project_image + "')"}
        marginTop={9}
      >
          <GridItem colSpan={[2, 1]}>
            <Grid
              templateRows="repeat(3, 1fr)"
              mx={["1rem", 0]}
              gap={4}>
                <GridItem>
                  <BorderBox textAlign="center" padding="1rem" backgroundColor="#ffffff">
                    <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 12 </Heading>
                    <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px"> Countries </Heading>
                  </BorderBox>
                </GridItem>
                <GridItem>
                  <BorderBox textAlign="center" padding="1rem" backgroundColor="#ffffff">
                    <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 300 </Heading>
                    <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px"> Collaborators </Heading>
                  </BorderBox>
                </GridItem>
                <GridItem>
                  <BorderBox textAlign="center" padding="1rem" backgroundColor="#ffffff">
                    <Heading as="h2" mt="5" size="md" fontWeight="700" fontStyle="normal" fontSize={["40px","40px","48px"]}> 500 </Heading>
                    <Heading as="h4" mt="5" size="md" color="blue" fontWeight="400" fontSize="36px"> Projects </Heading>
                  </BorderBox>
                </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={[2, 1]}
              mx={["1rem", 0]}>
            <Grid
              templateRows="repeat(2, 1fr)"
              height="100%">
                <GridItem>
                  <BorderBox height="100%" padding="1rem" backgroundColor="#ffffff">
                    <Text>
                      Drawdown Solutions aims to determine when and how reaching drawdown is possible, using existing, well-proven, and scalable climate solutions. To uncover that answer, the team reviews and evaluates the potential performance of technologies and practices that reduce greenhouse gas emissions and/or enhance carbon sequestration while providing many co-benefits to human society.
                    </Text>
                  </BorderBox>
                </GridItem>
              </Grid>
          </GridItem>
      </Grid>
    </>
  )
}

const Home = () => {
  let { title, description, header_image, project_image, bottom_image } = attributes;

  const router = useRouter()

  if (router.query.formsuccess === "true") {
    alert("Thank you for reaching out, someone will get in touch with you soon!")
  }

  return (
    <div style={{margin: 'auto', position: 'relative'}}>
      <Header title={title} description={description} image={header_image}/>
      <Partners />
      <FeaturedProjectsList />
      <Contribution />
      <AboutUs project_image={project_image} />
      <SneakPeek />
      <Footer bottom_image={bottom_image} />
    </div>
  )
}

export default Home;
