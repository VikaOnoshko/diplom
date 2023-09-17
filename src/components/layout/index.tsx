import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Map } from '@components/home/map';
import './index.less';

type LayoutProps = WithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Map />
      <Footer />
    </>
  );
};
