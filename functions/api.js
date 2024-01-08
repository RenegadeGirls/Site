export function onRequest(ctx) {
    return fetch("https://worker-api.president-a04.workers.dev/");
}