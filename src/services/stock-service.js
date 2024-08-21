import axios from 'axios';


// const order = [
//     'Mar 21',
//     'Jun 21',
//     'Sep 21',
//     'Dec 21',
//     'Mar 22',
//     'Jun 22',
//     'Sep 22',
//     'Dec 22',
//     'Mar 23',
//     '3 Aug 23',
//     '2 Nov 23',
//     '1 Feb 24',
//     '2 Mai 24',
//     '1 Aug 24',
// ];

const companies = [
    {
        name: 'Apple',
        ticker: 'AAPL',
        image: 'apple.png',
        revenueRow: 5,
        netIncomeRow: 36,
        grossMarginRow: 23
    },
    {
        name: 'Amazon',
        ticker: 'AMZN',
        image: 'amazon.png',
        revenueRow: 9,
        netIncomeRow: 41,
        grossMarginRow: 15
    },
    {
        name: 'Alphabet',
        ticker: 'GOOG',
        image: 'google.png',
        revenueRow: 5,
        netIncomeRow: 41,
        grossMarginRow: 25
    },
    {
        name: 'Meta',
        ticker: 'META',
        image: 'meta.png',
        revenueRow: 5,
        netIncomeRow: 27,
        grossMarginRow: 11
    },
    {
        name: 'Microsoft',
        ticker: 'MSFT',
        image: 'microsoft.png',
        revenueRow: 9,
        netIncomeRow: 30,
        grossMarginRow: 15
    },
    {
        name: 'Nvidia',
        ticker: 'NVDA',
        image: 'nvidia.png',
        revenueRow: 5,
        netIncomeRow: 29,
        grossMarginRow: 11
    },
    {
        name: 'Tesla',
        ticker: 'TSLA',
        image: 'tesla.png',
        revenueRow: 13,
        netIncomeRow: 44,
        grossMarginRow: 26
    }
];

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
            console.error('Error fetching data:', error);
            return [];
        }
    }

    getCompanies() {
        return companies;
    }

    getCompanyConfig(ticker) {
        return companies.find(company => company.ticker === ticker) || {};
    }

    async getCompanyData(ticker) {
        const config = this.getCompanyConfig(ticker);
        if (!config) {
            console.error('Configuration not found for ticker:', ticker);
            return {
                revenue: [],
                netIncome: [],
                grossMargin: [],
                quarters: [],
            };
        }

        const data = await this.fetchData(`$${ticker}`);
        const revenue = data[config.revenueRow] || [];
        const netIncome = data[config.netIncomeRow] || [];
        const grossMargin = data[config.grossMarginRow] || [];
        const quarters = data[1] || [];

        return {
            revenue,
            netIncome,
            grossMargin,
            quarters
        };
    }
}

export const stockService = new StockService(); 