import React from 'react';
import './App.css';
import result from './apartments';

function App() {
  const apartmentsList = Object.values(result);

  return (
    <div className="App">
      <ul className="apartments-list">
        {apartmentsList.map((item, index) => {
          const {id, location: {address}, area, floor, number_of_floors, number_of_rooms, url, photo, price, priceHistory} = item;
          return (
              <li key={id} className="apartments-item">
                  <img src={photo} alt=""  className="apartments-item--img" />
                  <div className="apartments-item--data">
                      <dl>
                          <div className="apartments-item--data-wrap">
                              <dd>address:</dd><dt>{address}</dt>
                          </div>
                          <div className="apartments-item--data-wrap">
                              <dd>price:</dd><dt>{`${Math.round(price.amount)} ${price.currency}`}</dt>
                          </div>
                          <div className="apartments-item--data-wrap">
                              <dd>link:</dd><dt><a href={url} target="_blank">{url}</a></dt>
                          </div>
                          <div className="apartments-item--data-wrap">
                              <dd>area:</dd><dt>{`${area.total} / ${area.living} / ${area.kitchen}`}</dt>
                          </div>
                          <div className="apartments-item--data-wrap">
                              <dd>rooms:</dd><dt>{number_of_rooms}</dt>
                          </div>
                          <div className="apartments-item--data-wrap">
                              <dd>floor:</dd><dt>{`${floor} / ${number_of_floors}`}</dt>
                          </div>
                      </dl>
                      <h3 className="price-history-heading">price history:</h3>
                      <dl>
                          {priceHistory.map(item => {
                              const historyItemData = Object.entries(item)[0];
                              const [dateStr, price] = historyItemData;
                              const date = new Date(dateStr);
                              const dateFormat = date.toLocaleDateString('en-US', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                              });

                              return (
                                  <div className="apartments-item--data-wrap">
                                      <dd>{dateFormat}:</dd>
                                      <dt>{price}</dt>
                                  </div>
                              )
                          })}
                      </dl>
                  </div>
              </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
