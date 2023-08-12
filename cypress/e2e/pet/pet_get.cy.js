import { Utils } from '../../helpers/Utils';
import { Api } from '../../helpers/api/Api';

describe('Pet Get', () => {

    it('Get a pet by ID and validate status code and response body', () => {
        // Create Pet that we will use for Get request
        const postPetData = Api.bodyRequests.getPostPetBodyRequest();
        Api.postPet({ body: postPetData }).then((response) => {
            const petId = response.body.id;

            Api.getPet({ petId: petId }).as('getPet');

            // Validate status code
            cy.get('@getPet').its('status').should('eq', 200)

            // Validate response body
            cy.get('@getPet').its('body').should('deep.eq', postPetData);
        })
    });

    it('Get a pet by ID and validate response headers', () => {
        // Create Pet that we will use for Get request
        const postPetData = Api.bodyRequests.getPostPetBodyRequest();
        Api.postPet({ body: postPetData }).then((response) => {
            const petId = response.body.id;

            Api.getPet({ petId: petId }).then((response) => {
                const responseHeaders = response.headers;

                // Validate response header (excluding 'date' header)
                expect(responseHeaders).to.deep.include(Api.headersResponses.getPostPetHeaderResponse());

                // Validate 'date' in response header
                expect(responseHeaders['date']).to.include(Utils.moment().format('ddd, DD MMM YYYY'));
            })
        })
    });
});
