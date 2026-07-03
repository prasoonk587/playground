import { FC, ReactNode, useState } from 'react';
import { Button } from '../atoms/button';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    close: () => void;
    onClose?: () => void;
    title?: string;
}

export const Modal: FC<ModalProps> = ({ open, close, title, children }) => {
    return createPortal(
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <div className="absolute inset-0 bg-black/60" onClick={close} />
            <div className="relative z-10 flex justify-center py-8">
                <div
                    className={`relative bg-white rounded-md py-4 px-4 min-w-[400px] transition-all duration-200 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                >
                    {title && (
                        <div className="border-b-2">
                            <h1 className="">{title}</h1>
                        </div>
                    )}
                    <div className="py-4">{children}</div>
                    <div className="flex justify-end gap-2">
                        <Button variant={'secondary'} size="sm" onClick={close}>
                            Cancel
                        </Button>
                        <Button size="sm">Confirm</Button>
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
            <Button onClick={() => setOpen(!open)}>Open Modal</Button>
            <Modal open={open} close={() => setOpen(false)} title={'This is modal title'}>
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
