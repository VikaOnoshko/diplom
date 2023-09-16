import { Footer } from '@components/footer';
import { Header } from '@components/header';

type LayoutProps = WithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
