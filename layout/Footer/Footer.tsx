import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.container)}>
      <div>OwiTop © 2020 - 2022 Все права защищены</div>
      <div>Пользовательское соглашение</div>
      <div>Политика конфиденциальности</div>
    </div>
  );
};
