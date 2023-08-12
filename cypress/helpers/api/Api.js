import { ApiBodyRequests } from './ApiBodyRequests';
import { ApiHeadersResponses } from './ApiHeadersResponses';

export class Api {

    static bodyRequests = new ApiBodyRequests();
    static headersResponses = new ApiHeadersResponses();

    static postPet({ body, failOnStatusCode = false }) {
        return cy
            .request({
                method: 'POST',
                url: `/pet`,
                headers: {
                    'content-type': 'application/json'
                },
                body: body,
                failOnStatusCode: failOnStatusCode
            })
            .then(response => {
                response;
            });
    }

    static getPet({ petId, failOnStatusCode = false }) {
        return cy
            .request({
                method: 'GET',
                url: `/pet/${petId}`,
                headers: {
                    'content-type': 'application/json'
                },
                failOnStatusCode: failOnStatusCode
            })
            .then(response => {
                response;
            });
    }
}
