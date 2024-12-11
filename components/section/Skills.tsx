// react
import * as React from "react";
// @mui
import {
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Typography,
  styled,
} from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import SkillProgress from "components/common/SkillProgress";
// custom icons
import Node from "components/icon/Node";
import HTML5 from "components/icon/HTML5";
import Tailwindcss from "components/icon/Tailwindcss";
import PhotoshopIcon from "components/icon/Javascript";
// context
import ComponentsContext from "context/componentsContext";
import Nextjs from "components/icon/Nextjs";
import ReactNative from "components/icon/ReactNative";
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: (
        <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />
      ),
      title: "Javascript",
      progressValue: 70,
    },
    {
      Icon: (
        <HTML5 fontSize="large" />
      ),
      title: "HTML",
      progressValue: 100,
    },
    {
      Icon: (
        <Tailwindcss
          fontSize="large"
        />
      ),
      title: "Tailwind CSS",
      progressValue: 100,
    },
    {
      Icon: (
        <Node
          fontSize="large"
        />
      ),
      title: "Nodejs",
      progressValue: 70,
    },
    {
      Icon: (
        <Nextjs
          fontSize="large"
        />
      ),
      title: "Nextjs",
      progressValue: 65,
    },
    {
      Icon: (
        <ReactNative
          fontSize="large"
        />
      ),
      title: "React Native",
      progressValue: 50,
    },
  ];

  return (
    <>
      <CustomContainer id="skills" maxWidth={containerMaxWidth}>
        <Typography component="h2" variant="h4" textAlign="center">
          My Skills
        </Typography>
        <ContainerGrid marginTop="2rem">
          {skills.map((skill, index) => (
            <CustomGridItem
              item
              key={`${skill.title} - ${skill.progressValue} - ${index}`}
              xs={12}
              sm={6}
              md={4}
            >
              <SkillProgress
                size={100}
                value={skill.progressValue}
                Icon={skill.Icon}
                subtitle={`${skill.title} | ${skill.progressValue}%`}
              />
            </CustomGridItem>
          ))}
        </ContainerGrid>
      </CustomContainer>
    </>
  );
};

export default Skills;
