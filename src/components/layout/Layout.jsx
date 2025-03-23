import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <main>
      <Header />
      <SideBar />
      <section>
        <Outlet />
      </section>
    </main>
  );
};
