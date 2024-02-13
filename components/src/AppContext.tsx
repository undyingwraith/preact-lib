import { createContext } from "preact";
import { IApplication } from '@preact-lib/services';
import { PropsWithChildren, useContext } from "preact/compat";
import { useSignal, useSignalEffect } from "@preact/signals";

const AppContext = createContext({} as IApplication<any>)

export function Application<T extends {}>(props: PropsWithChildren<{ setup: () => Promise<IApplication<T>> }>) {
    const app = useSignal<IApplication<T> | undefined>(undefined);
    const error = useSignal<Error | undefined>(undefined);
    console.log('render')

    useSignalEffect(() => {
        console.log('running setup')
        props.setup()
            .then((r) => {
                console.log('setup completed')
                app.value = r;
            })
            .catch((e) => {
                error.value = e;
            });
    });

    console.log('render 2')
    if (error.value) {
        return (
            <div>
                <p><b>Error ({error.value.name})</b></p>
                <code>{error.value.message}</code>
            </div>
        );
    }

    console.log('render3')
    if (!app.value) {
        console.log('render 4sss')
        return <div>Loading...</div>
    }

    return <AppContext.Provider value={app.value}>
        {props}
    </AppContext.Provider>
}

export function useApplication<T extends {}>() {
    return useContext<IApplication<T>>(AppContext);
}
