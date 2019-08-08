import React from "react";
import { AdminPanel } from "./components/AdminPanel";
import { AppNavbar } from "./components/Navbar/AppNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
} from "@elastic/eui";

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <EuiPage>
        {/* <EuiPageSideBar>SideBar nav</EuiPageSideBar> */}
        <EuiPageBody>
          <EuiPageHeader>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentBody>
              <AdminPanel />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
}

export default App;
