import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutoComplete } from './components/AutoComplete';
import { Layout } from './components/Layout';
import { LogoMarque } from './components/LogoMarque';
import { TicTacToe } from './components/TicTacToe';
import { TodoList } from './components/TodoList';
import { VirtualListImplementation } from './components/Virtualization';
import { Home } from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<Layout />}>
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                    <Route path="/autocomplete" element={<AutoComplete />} />
                    <Route path="/virtual-list" element={<VirtualListImplementation />} />
                    <Route path="/logo-marque" element={<LogoMarque />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
