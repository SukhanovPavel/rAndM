import { Header } from './header/ui';
import { Footer } from './footer/ui';

import styles from './ui.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles._}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
