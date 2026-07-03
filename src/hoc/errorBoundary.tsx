import { Component, ComponentType, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorboundaryState {
    error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorboundaryState> {
    state: ErrorboundaryState = {
        error: null,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            error: error,
        });
    }

    render(): ReactNode {
        const { error } = this.state;
        const { children } = this.props;

        if (error === null) {
            return children;
        }
        return (
            <div>
                <h2>Something went wrong!</h2>
            </div>
        );
    }
}

export const errorBoundary = <P extends object>(Component: ComponentType<P>) => {
    const wrapper = (props: P) => {
        return (
            <ErrorBoundary>
                <Component {...props} />
            </ErrorBoundary>
        );
    };

    return wrapper;
};
