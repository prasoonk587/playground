import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutoComplete } from './components/AutoComplete';
import { TicTacToe } from './components/TicTacToe';
import { TodoList } from './components/TodoList';
import { Home } from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/autocomplete" element={<AutoComplete />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
