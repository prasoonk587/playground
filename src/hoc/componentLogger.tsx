import React, { JSX, useEffect } from 'react';

export const componentLogger = <P extends object>(Component: React.ComponentType<P>) => {
    const displayName = Component.displayName ?? Component.name ?? 'Component';
    const Wrapped = (props: P) => {
        console.log(`[${displayName}] rendered`);

        useEffect(() => {
            console.log(`[${displayName}] mounted`);
            return () => {
                console.log(`[${displayName}] un-mounted`);
            };
        }, []);

        return <Component {...props} />;
    };
    Wrapped.displayName = `componentLogger(${displayName})`;
    console.log(Wrapped.displayName);
    return Wrapped;
};
