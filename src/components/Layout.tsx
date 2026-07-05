import { NavLink, Outlet } from 'react-router-dom';

interface NavItem {
    label: string;
    path: string;
}

export const navItems: NavItem[] = [
    { label: 'Todo List', path: '/todo' },
    { label: 'Tic Tac Toe', path: '/tictactoe' },
    { label: 'Autocomplete', path: '/autocomplete' },
    { label: 'Virtual List', path: '/virtual-list' },
    { label: 'Logo Marque', path: '/logo-marque' },
    { label: 'Toast', path: '/toast' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Modal', path: '/modal' },
    { label: 'OTP Input', path: '/otp' },
];

export const Layout = () => {
    return (
        <div className="flex min-h-screen">
            <nav className="w-52 shrink-0 bg-gray-900 text-gray-300 flex flex-col py-6 px-3 gap-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 px-3 mb-3">
                    Components
                </p>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        className={({ isActive }) =>
                            `rounded-lg px-3 py-2 text-sm transition-colors ${
                                isActive
                                    ? 'bg-gray-700 text-white font-medium'
                                    : 'hover:bg-gray-800 hover:text-white'
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};
