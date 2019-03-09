import { fxAuth } from 'fx-web';

class RequestService {
    async getRequestInstance() {
        const loadedModule = await import('axios')
        const { default: axios } = loadedModule;
        const bearerToken = fxAuth.getToken();
        const requestInstance = axios.create({
            headers: {
                'x-access-token': bearerToken
            }
        });
        return requestInstance;
    }

    async upload(url, formData) {
        const requestInstance = await this.getRequestInstance();
   
        const res = await requestInstance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return res;
    }
}

export const requestService = new RequestService();