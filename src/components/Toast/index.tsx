import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Button } from '../atoms/button';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastContextValue {
    addToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue>({ addToast: () => {} });

const toastColor: Record<ToastType, string> = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-orange-600',
    info: 'bg-blue-600',
};

interface IToast {
    id: number;
    message: string;
    type: ToastType;
}

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const addToast = (message: string, type: ToastType) => {
        const id = Date.now();
        setToasts((prev) => [
            {
                id,
                message,
                type,
            },
            ...prev,
        ]);

        setTimeout(() => {
            setToasts((prev) => prev.filter(({ id: _id }) => _id !== id));
        }, 8000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed top-0 right-0 mr-3 mt-3">
                {toasts.map((toast) => {
                    return (
                        <div
                            key={toast.id}
                            className={`border ${toastColor[toast.type]} rounded-sm px-2 py-2 text-white mb-2`}
                        >
                            <p className="text-sm">{toast.message}</p>
                        </div>
                    );
                })}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const { addToast } = useContext(ToastContext);

    return {
        success: (message: string) => addToast(message, 'success'),
        error: (message: string) => addToast(message, 'error'),
        warning: (message: string) => addToast(message, 'warning'),
        info: (message: string) => addToast(message, 'info'),
    };
};

export const ToastImplementation = () => {
    const { success, warning, error, info } = useToast();
    return (
        <div className="flex h-screen justify-center items-center gap-2">
            <Button onClick={() => success('This is success toast')}>Success Toast</Button>
            <Button onClick={() => warning('This is warning toast')}>Warning Toast</Button>
            <Button onClick={() => error('This is error toast')}>Error Toast</Button>
            <Button onClick={() => info('This is info toast')}>Show Toast</Button>
        </div>
    );
};
