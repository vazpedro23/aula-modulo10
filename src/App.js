import Header from "./components/header";
import Menu from "./components/menu";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import { DataGrid } from '@mui/x-data-grid';
import DataGrid from "./components/datagrid";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Login />  
      <ListarTarefa />
    </div>
  );
}

export default App;
