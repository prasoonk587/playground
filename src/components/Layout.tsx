import { NavLink, Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/atoms/button';
import { Icon } from '@/components/atoms/icon';
import { useTheme } from '@/hooks/useTheme';

interface NavItem {
    label: string;
    path: string;
}

export const navItems: NavItem[] = [
    { label: 'Design System', path: '/design-system' },
    { label: 'Todo List', path: '/todo' },
    { label: 'Tic Tac Toe', path: '/tictactoe' },
    { label: 'Autocomplete', path: '/autocomplete' },
    { label: 'Virtual List', path: '/virtual-list' },
    { label: 'Logo Marque', path: '/logo-marque' },
    { label: 'Toast', path: '/toast' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Modal', path: '/modal' },
    { label: 'OTP Input', path: '/otp' },
    { label: 'Rating', path: '/rating' },
];

export const Layout = () => {
    const { theme, toggle } = useTheme();

    return (
        <div className="flex min-h-screen bg-background">
            <aside className="fixed top-0 left-0 h-screen w-56 border-r border-sidebar-border bg-sidebar flex flex-col py-4 px-2 z-10">
                <p className="px-3 py-2 mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Components
                </p>
                <nav className="flex-1 flex flex-col gap-0.5 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) =>
                                cn(
                                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                                    'w-full justify-start font-normal text-sidebar-foreground',
                                    isActive &&
                                        'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <div className="border-t border-sidebar-border pt-2 mt-2">
                    <button
                        onClick={toggle}
                        className={cn(
                            buttonVariants({ variant: 'ghost', size: 'sm' }),
                            'w-full justify-start gap-2 font-normal text-sidebar-foreground'
                        )}
                    >
                        <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={15} />
                        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    </button>
                </div>
            </aside>
            <main className="ml-56 flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};
