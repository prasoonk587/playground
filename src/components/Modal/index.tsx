import { FC, ReactNode, useEffect, useId, useState } from 'react';
import { Button } from '../atoms/button';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title?: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

export const Modal: FC<ModalProps> = ({
    open,
    onClose,
    onConfirm,
    title,
    children,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
}) => {
    const titleId = useId();

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, onClose]);

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            className={`fixed inset-0 z-50 transition-opacity duration-200 ${
                open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div className="relative z-10 flex justify-center py-8">
                <div
                    className={`bg-white rounded-lg min-w-[400px] shadow-xl transition-all duration-200 ${
                        open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                    }`}
                >
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        {title ? (
                            <h2 id={titleId} className="text-base font-semibold text-gray-900">
                                {title}
                            </h2>
                        ) : (
                            <span />
                        )}
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="px-4 py-4 text-sm text-gray-700">{children}</div>

                    <div className="flex justify-end gap-2 px-4 py-3 border-t bg-gray-50 rounded-b-lg">
                        <Button variant="secondary" size="sm" onClick={onClose}>
                            {cancelLabel}
                        </Button>
                        {onConfirm && (
                            <Button size="sm" onClick={onConfirm}>
                                {confirmLabel}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export const ModalPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-full flex justify-center items-center">
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={() => setOpen(false)}
                title="This is modal title"
            >
                <div>
                    <h1>This is Modal Body</h1>
                    <p>This is Modal Body</p>
                    <p>This is Modal Body</p>
                    <p>This is Modal Body</p>
                    <p>This is Modal Body</p>
                    <p>This is Modal Body</p>
                </div>
            </Modal>
        </div>
    );
};
