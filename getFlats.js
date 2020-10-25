const fs = require('fs');
const axios = require('axios');
const requestUrl = 'https://pk.api.onliner.by/search/apartments?resale=true&price%5Bmin%5D=4186&price%5Bmax%5D=140000&currency=usd&bounds%5Blb%5D%5Blat%5D=53.93378981876284&bounds%5Blb%5D%5Blong%5D=27.622563059149133&bounds%5Brt%5D%5Blat%5D=53.94636994710753&bounds%5Brt%5D%5Blong%5D=27.655178720770227&page=1&v=0.11396016563081557';

const init = async () => {
    const date = new Date();
    const currYear = date.toLocaleDateString('en-US', {year: 'numeric'});
    const currMonth = date.toLocaleDateString('en-US', {month: 'short'});
    const currDay = date.toLocaleDateString('en-US', {day: 'numeric'});
    const responseData = await axios.get(requestUrl).then((res) => res.data);
    const responseStr = JSON.stringify(responseData, null, 2);

    fs.writeFileSync(`src/responses/${currDay}_${currMonth}_${currYear}.json`, responseStr, (err) => {
        console.log(err);
    });

    const apartmentsList = fs.readFileSync('src/apartments.json');
    const apartmentsListData = JSON.parse(apartmentsList);

    const apartmentsArr = responseData.apartments;

    apartmentsArr.forEach(item => {
        const {id, price: {amount, currency}} = item;
        const path = `src/apartments/${id}.json`;
        const fullPrice = `${Math.round(amount)} ${currency}`;

        if (fs.existsSync(path)) {
            const infoData = fs.readFileSync(path);
            const info = JSON.parse(infoData);
            const prevPriceHistory = info.priceHistory;

            if (Object.values(prevPriceHistory[prevPriceHistory.length - 1])[0] !== fullPrice) {
                item.priceHistory = [...prevPriceHistory, {[date.toISOString()]: fullPrice}];
            } else {
                item.priceHistory = prevPriceHistory;
            }
        } else {
            item.priceHistory = [{[date.toISOString()]: fullPrice}];
        }

        apartmentsListData[id] = item;

        fs.writeFileSync(path, JSON.stringify(item, null, 2));
        fs.writeFileSync('src/apartments.json', JSON.stringify(apartmentsListData, null, 2));
    });
};

init();