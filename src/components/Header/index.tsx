import igniteLogo from '../../assets/logo.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite Player" />
    </header>
  );
}