import Loader from "../Loader/Loader";

const LoadingContainer = ({ loading, children }) => {
  if (!loading) {
    return children;
  }

  return <Loader loading={loading} />;
};

export default LoadingContainer;
