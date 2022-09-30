import { NavBar, Head } from "..";
import Div100vh from "react-div-100vh";

export const FeedLayout = ({ children, title, description, otg }) => {
  return (
    <Div100vh>
      <div className="feed-layout">
        <Head title={title} description={description} otg={otg} />
        <NavBar />
        <main className="feed-main">{children}</main>
      </div>
    </Div100vh>
  );
};
