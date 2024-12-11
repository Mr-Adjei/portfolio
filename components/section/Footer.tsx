// react
import * as React from "react";
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardContent,
  CardContentProps,
  Typography,
  styled,
} from "@mui/material";
// custom component
import TextLink from "components/common/TextLink";
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import LinkdInLink from "components/common/LinkedInLink";
// custom context
import ConstantsContext from "context/constantsContext";
// type
interface FooterProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: "1rem",
  padding: "1rem",
  [theme.breakpoints.up("sm")]: {
    margin: "2rem",
    padding: "2rem",
  },
}));

const CustomCardContent = styled(CardContent)<CardContentProps>(
  ({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0.5rem",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    a: {
      marginBottom: "1rem",
      [theme.breakpoints.up("sm")]: {
        marginBottom: 0,
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
      },
    },
  })
);

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <>
      <CustomCard>
        <CustomCardContent>
          {navLinks!.map((navLink, index) => (
            <TextLink key={navLink.label + index} href={navLink.href}>
              {navLink.label}
            </TextLink>
          ))}
        </CustomCardContent>
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <InstagramIconLink
            href="https://www.instagram.com/_.mr.adjei/"
            target="_blank"
          />
          <LinkdInLink href="https://www.linkedin.com/in/mr-adjei-347706256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
        </CardContent>
      </CustomCard>
      <Typography
        component="p"
        variant="body1"
        textAlign="left"
        style={{ paddingLeft: "32px" }}
      >
        &copy; {new Date().getFullYear()} Japhet Adofo-Adjei. All rights
        reserved.
      </Typography>
    </>
  );
};

export default Footer;
