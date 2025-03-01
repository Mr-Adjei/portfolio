// react
import * as React from 'react';
// data
import navLinks from 'constants/navLinks';
import pages from 'constants/pages';
import projectsData, { Project } from 'constants/projectsData';
// type
import { NavLink } from 'constants/navLinks';
import { Pages } from 'constants/pages';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
  projects?: Project[];
}

const context: ContextProps = {
  navLinks,
  pages,
  projects: projectsData,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
