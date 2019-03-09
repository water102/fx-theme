import { default as webConfig } from '../../config/web.json';

import { requestService } from './request.service';

class DataService {
    async getCountries() {
        const request = await requestService.getRequestInstance();
        const res = await request
            .get(webConfig.apiUrls.getCountries, {});
        const { data } = res;
        return data;
    }
}

export const dataService = new DataService();