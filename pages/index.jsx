import { FeedLayout, Video, Loader } from "../components";
import { useCities } from "../hooks";
import { autoPlayVideoObserver } from "../utils";

const Home = () => {
  const { ref, videoCities, isLoading, error } = useCities();

  const observer = autoPlayVideoObserver();

  return (
    <FeedLayout title="Home">
      {videoCities &&
        videoCities.map((props, index) => (
          <Video key={index} observer={observer} {...props} />
        ))}
      <div className="feed-loader" ref={ref} />
      <Loader isLoading={isLoading} error={error} />
    </FeedLayout>
  );
};

export default Home;
