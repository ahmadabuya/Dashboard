import { BrowserRouter, Route, Routes } from "react-router-dom";


import Dashboard from "./page/Dashboard/Dashboard";
import Layout from "./component/Layout/Layout";
import Calendar from "./page/Calendar/Calendar";
import BoardPage from "./page/Board/Board";
import DataGrid from "./page/DataGrid/DataGrid";


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="calendar" element={<Calendar/>}/>
          <Route path="board" element={<BoardPage/>}/>
          <Route path="users" element={<DataGrid/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  
  </div>
};

export default App;
