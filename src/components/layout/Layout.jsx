import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <main className="main-container">
      <Header />
      <SideBar />
      <section className="content">
        <Outlet />
      </section>
      <footer className="footer"></footer>
    </main>
  );
};
