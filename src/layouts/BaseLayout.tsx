import Footer from "@/components/Footer";
import Header from "@/components/Hearder";
import HeaderPanel from "@/components/Hearder/HeaderPanel";
import Sidebar from "@/components/Sidebar";
import useBoolean from "@/hooks/useBoolean";
import { Col, Row } from "antd";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styles from './layout.module.css';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const handleMenuClick = useBoolean()
  return (
    <>
      <Row>
        <Col xl={4} md={8} xs={24}>
          <Sidebar open={handleMenuClick.open} handleMenuClick={handleMenuClick.onToggle} />
        </Col>
        <Col xl={20} md={16} xs={24}>
          <div className={styles.layout_box}>
            <div>
              <Header />
              <HeaderPanel />
              <div className={styles.main_content}>
                {children || <Outlet />}
              </div>
            </div>
            <Footer />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BaseLayout;
