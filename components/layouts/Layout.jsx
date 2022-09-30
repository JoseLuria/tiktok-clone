import { NavBar, Head } from "..";

export const Layout = ({ children, title, description, otg }) => {
  return (
    <div>
      <Head title={title} description={description} otg={otg} />
      <NavBar />
      <div className="layout-container">
        <div className="main-container">{children}</div>
      </div>
    </div>
  );
};
