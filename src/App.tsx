import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutoComplete } from './components/AutoComplete';
import { TicTacToe } from './components/TicTacToe';
import { TodoList } from './components/TodoList';
import { Home } from './pages/Home';
import { VirtualListImplementation } from './components/Virtualization';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/autocomplete" element={<AutoComplete />} />
                <Route path="/virtual-list" element={<VirtualListImplementation />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
