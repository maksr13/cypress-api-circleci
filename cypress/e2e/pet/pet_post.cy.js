import { Utils } from '../../helpers/Utils';
import { Api } from '../../helpers/api/Api';

describe('Pet Post', () => {

    it('Post a Pet and validate status code, response body', () => {
        const postPetData = Api.bodyRequests.getPostPetBodyRequest();
        Api.postPet({ body: postPetData }).as('postPet');

        // Validate status code
        cy.get('@postPet').its('status').should('eq', 200)

        // Validate response body
        cy.get('@postPet').its('body').should('deep.eq', postPetData);
    });

    it('Post a Pet and validate response headers', () => {
        const postPetData = Api.bodyRequests.getPostPetBodyRequest();
        Api.postPet({ body: postPetData }).then((response) => {
            const responseHeaders = response.headers;

            // Validate response header (excluding 'date' header)
            expect(responseHeaders).to.deep.include(Api.headersResponses.getPostPetHeaderResponse());

            // Validate 'date' in response header
            expect(responseHeaders['date']).to.include(Utils.moment().format('ddd, DD MMM YYYY'));
        })
    });

    it('Post a pet with wrong ID and validate status code, response body', () => {
        const postPetData = Api.bodyRequests.getPostPetBodyRequest({ id: "wrong id" });
        Api.postPet({ body: postPetData }).as('postPet');

        // Validate status code
        cy.get('@postPet').its('status').should('eq', 500)

        // Validate response body
        cy.get('@postPet').then((response) => {
            const responseBody = response.body;

            expect(responseBody.code).to.equal(500);
            expect(responseBody.message).to.equal('something bad happened');
            expect(responseBody.type).to.equal('unknown');

            // Validate number of properties in object from response
            expect(Object.keys(responseBody).length).to.equal(3);
        })
    });

    it('Post a pet with wrong ID and validate response headers', () => {
        const postPetData = Api.bodyRequests.getPostPetBodyRequest({ id: "wrong id" });
        Api.postPet({ body: postPetData }).then((response) => {
            const responseHeaders = response.headers;

            // Validate response header (excluding 'date' header)
            expect(responseHeaders).to.deep.include(Api.headersResponses.getPostPetHeaderResponse());

            // Validate 'date' in response header
            expect(responseHeaders['date']).to.include(Utils.moment().format('ddd, DD MMM YYYY'));
        })
    });
});
