// react
import * as React from 'react';
// @mui icon
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface LinkdInLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const LinkdInLink: React.FunctionComponent<LinkdInLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = '#',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label="Twitter button" href={href} {...otherProps}>
      <LinkedInIcon color={iconColor} fontSize={iconSize} />
    </IconButtonLink>
  );
};

export default LinkdInLink;
