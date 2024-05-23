// Import necessary modules from react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Import components and pages
import ChartsMaps from "./pages/ChartsMaps";
import Contacts from "./pages/Contacts";
import Sidebar from "./components/Sidebar";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    // Set up the router
    <Router>
      <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
        <Sidebar />
        <main className=" flex flex-col items-center justify-center flex-1 ">
          <Routes>
            {/* Redirect any invalid routes to contact form */}
            <Route path="*" element={<Navigate to="/contactform" />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/charts_maps" element={<ChartsMaps />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/updateContact/:contactId" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
