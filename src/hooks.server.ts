// import { sequence } from '@sveltejs/kit/hooks'
// import { handleRemult } from './hooks/handleRemult'

import type { Handle } from "@sveltejs/kit";

// export const handle = sequence(handleRemult)

export const handle: Handle = async ({ event, resolve }) => {

    if (event.url.pathname.startsWith("/api"))
        return new Response('hello world');

    return await resolve(event);
}