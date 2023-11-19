// import { sequence } from '@sveltejs/kit/hooks'
// import { handleRemult } from './hooks/handleRemult'

// export const handle = sequence(handleRemult)

import { AsyncLocalStorage } from 'node:async_hooks'

import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

    if (event.url.pathname.startsWith("/api")){
        const x = new AsyncLocalStorage();
        return new Response('hello world');
    }

    return await resolve(event);
}