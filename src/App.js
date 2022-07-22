import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Sidebar, Navbar } from './components';
import { Ecommerce, Orders } from './pages';
import { checksContext } from './context/ContextProvider';
import AppDetails from './pages/appDetails/AppDetails';
function App() {
  const {
    activeMenu,
    themeSetting,
    setthemeSetting,
    currentColorSelected,
    currentMode,
  } = checksContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full
              ${activeMenu ? 'md:ml-60   ' : 'flex-2'}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSetting && <ThemeSettings />}

              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/dashboard" element={<Ecommerce />} />

                <Route path="/apps" element={<Orders />} />

                <Route path="/appdetails" element={<AppDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
