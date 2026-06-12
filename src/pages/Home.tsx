import { useNavigate } from 'react-router-dom';

const components = [
    { name: 'Todo List', path: '/todo' },
    { name: 'Tic Tac Toe', path: '/tictactoe' },
    { name: 'Autocomplete', path: '/autocomplete' },
];

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Components</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {components.map((component) => (
                    <div
                        key={component.path}
                        onClick={() => navigate(component.path)}
                        className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:shadow-md hover:border-blue-400 transition-all"
                    >
                        <h2 className="text-lg font-semibold text-gray-700">{component.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};
