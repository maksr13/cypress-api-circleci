export class ApiHeadersResponses {

    getPostPetHeaderResponse({ date, server } = {}) {
        let headers = {
            "content-type": "application/json",
            "transfer-encoding": "chunked",
            "connection": "keep-alive",
            "access-control-allow-origin": "*",
            "access-control-allow-methods": "GET, POST, DELETE, PUT",
            "access-control-allow-headers": "Content-Type, api_key, Authorization",
        };
        if (date) {
            headers.date = date
        }
        if (server) {
            headers.server = server
        }
        return headers;
    }
}
