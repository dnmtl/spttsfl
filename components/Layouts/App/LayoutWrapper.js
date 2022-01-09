import AppContainer from "./LayoutContainer";
import Dashboard from "../../Dashboard";

const LayoutWrapper = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div>sidebar here</div>

      <AppContainer>
        <Dashboard />
      </AppContainer>
    </div>
  );
};

export default LayoutWrapper;
