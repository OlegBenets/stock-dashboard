import axios from 'axios';

const order = [
    'Mar 21',
    'Jun 21',
    'Sep 21',
    'Dec 21',
    'Mar 22',
    'Jun 22',
    'Sep 22',
    'Dec 22',
    'Mar 23',
    '3 Aug 23',
    '2 Nov 23',
    '1 Feb 24',
    '2 Mai 24',
    '1 Aug 24',
];

const companyNameMapping = {
    AAPL: "Apple",
    MSFT: "Microsoft",
    TSLA: "Tesla",
    NVDA: "NVIDIA",
    AMZN: "Amazon",
    META: "Meta",
    GOOG: "Alphabet"
};

class StockService {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://sheetdb.io/api/v1/ovhyxpqm1yzbh'
        });
    }

    async fetchData(sheetName) {
        try {
            const response = await this.apiClient.get(`?sheet=${sheetName}`);
            console.log('Datenstruktur:', response.data);
            return response.data;
        } catch (error) {
            console.error('Erro fetching data:', error);
            return [];
        }
    }

    async getRevenue(sheetName) {
        const data = await this.fetchData(sheetName);
        return order.map(key => data[3][key]);
    }
    
    getCompanyName(ticker) {
        return companyNameMapping[ticker] || "Unknown Company";
    }
}

export const stockService = new StockService(); 