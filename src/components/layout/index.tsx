import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Map } from '@components/home/map';
import './index.less';
import { ScrollTop } from './scroll-top';

type LayoutProps = WithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Map />
      <ScrollTop />
      <Footer />
    </>
  );
};
