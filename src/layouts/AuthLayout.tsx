

import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
  children?: ReactNode;
}

const AuthLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <>{children || <Outlet />}</>;
};
export default AuthLayout;
