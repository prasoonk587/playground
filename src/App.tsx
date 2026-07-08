import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutoComplete } from './components/AutoComplete';
import { Layout } from './components/Layout';
import { LogoMarque } from './components/LogoMarque';
import { TicTacToe } from './components/TicTacToe';
import { TodoList } from './components/TodoList';
import { VirtualListImplementation } from './components/Virtualization';
import { Home } from './pages/Home';
import { ToastImplementation, ToastProvider } from './components/Toast';
import { Assignment } from './components/Assignment';
import { AccordionImplementation } from './components/Accordion';
import { DesignSystem } from './pages/DesignSystem';
import { ModalPage } from './components/Modal';
import { OTPInput, OTPPage } from './components/OTPInput';
import { RatingPage } from './components/Rating';

function App() {
    // return <Assignment />;
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
                        <Route path="/accordion" element={<AccordionImplementation />} />
                        <Route path="/design-system" element={<DesignSystem />} />
                        <Route path="/modal" element={<ModalPage />} />
                        <Route path="/otp" element={<OTPPage />} />
                        <Route path="/rating" element={<RatingPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ToastProvider>
    );
}

export default App;
