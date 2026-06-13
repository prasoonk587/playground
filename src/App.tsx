import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutoComplete } from './components/AutoComplete';
import { Layout } from './components/Layout';
import { LogoMarque } from './components/LogoMarque';
import { TicTacToe } from './components/TicTacToe';
import { TodoList } from './components/TodoList';
import { VirtualListImplementation } from './components/Virtualization';
import { Home } from './pages/Home';
import { ToastImplementation, ToastProvider } from './components/Toast';

function App() {
    return (
        <ToastProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<Layout />}>
                        <Route path="/todo" element={<TodoList />} />
                        <Route path="/tictactoe" element={<TicTacToe />} />
                        <Route path="/autocomplete" element={<AutoComplete />} />
                        <Route path="/virtual-list" element={<VirtualListImplementation />} />
                        <Route path="/logo-marque" element={<LogoMarque />} />
                        <Route path="/toast" element={<ToastImplementation />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ToastProvider>
    );
}

export default App;
