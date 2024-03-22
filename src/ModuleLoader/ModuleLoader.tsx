import Home from "../components/Catrancher/Catrancher";
import { useSystem } from "../contexts/SystemContext/useSystem";
import { PAGES } from "../config/appConstants";

import FallbackPage from "../components/FallbackPage/FallbackPage";

import Modal from "../components/Elements/Modal/Modal";

export default function ModuleLoader() {

  const formattedDate: string = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const { location, showModal, setshowModal, setSelectedCats } = useSystem();

  const renderComponent = () => {
    switch (location?.page) {
      case PAGES.HOME:
        return <Home />;
      default:
        return <FallbackPage heading={"404"} description={"Page not found"} />;
    }
  };

  return (
    <div className="flex flex-col h-screen" data-testid="module-loader">
      <main className="flex-1 overflow-y-auto">
        <h2 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Catrancher
        </h2>
        <p className="font-normal text-gray-400 text-xl text-center">
          {formattedDate}
        </p>
        {renderComponent()}
      </main>
      {showModal && (
        <Modal
          content="Modal content to be customized"
          title="Modal title to be customized"
          show={showModal}
          primaryButton={{
            title: "Ok",
            onClick: () => {
              setshowModal(false);
              setSelectedCats([]);
            },
          }}
        />
      )}
    </div>
  );
}
