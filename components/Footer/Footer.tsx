import React, { FC } from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

const Footer: FC<FooterProps> = ({ ...props }): JSX.Element => {
  return <footer {...props}>Footer</footer>;
};

export default Footer;
