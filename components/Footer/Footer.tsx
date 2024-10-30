import React, { FC } from 'react';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

const Footer: FC<FooterProps> = ({ ...props }): JSX.Element => {
  return (
    <footer className={styles.footer} {...props}>
      <p className={styles.rules}>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </p>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
