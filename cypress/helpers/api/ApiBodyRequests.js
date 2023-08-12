import { Utils } from '../Utils.js';

export class ApiBodyRequests {

    getPostPetBodyRequest({ id, categoryId, categoryName, name, photoUrls, tags, status } = {}) {
        return {
            "id": id ? id : Utils.getRandromNumberLong(),
            "category": {
                "id": categoryId ? categoryId : 0,
                "name": categoryName ? categoryName : "string"
            },
            "name": name ? name : Utils.uniquify("doggie"),
            "photoUrls": photoUrls ? photoUrls : [
                "string"
            ],
            "tags": tags ? tags : [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": status ? status : "available"
        }
    }
}
