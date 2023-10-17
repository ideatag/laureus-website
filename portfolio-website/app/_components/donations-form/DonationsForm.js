'use client';
import './DonationsForm.css';
import { useState } from 'react';
import { checkout } from './checkout';
import { donation, monthlyDonation } from './products';

const DonationsForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('eur');
  const [inputNumber, setInputNumber] = useState(10);
  const [selectedMonthly, setSelectedMonthly] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(donation[0]);
  const currencySymbols = {
    aud: 'A$',
    cad: 'C$',
    eur: '€',
    gbp: '£',
    usd: '$',
  };

  const exchangeRates = {
    eur: 1,
    gbp: 0.86,
    usd: 1.1,
    aud: 1.68,
    cad: 1.48,
  };

  const handleDonationButtonClick = donationItem => {
    setSelectedDonation(donationItem);
    const convertedPrice = (
      donationItem.price * exchangeRates[selectedCurrency]
    ).toFixed(2);
    {
      currencySymbols[selectedCurrency];
    }
    setInputNumber(convertedPrice);
  };

  const handleMonthlyButtonClick = isMonthly => {
    setSelectedMonthly(isMonthly);

    const selectedDonationProduct = selectedDonation.product;

    const donationIndex = donation.findIndex(
      item => item.product === selectedDonationProduct,
    );

    if (isMonthly) {
      setSelectedDonation(
        monthlyDonation.find(
          monthlyItem => monthlyItem.product === selectedDonationProduct,
        ),
      );
    } else {
      setSelectedDonation(donation[donationIndex]);
    }
  };

  const handleCurrencyChange = event => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    const convertedPrice = (
      selectedDonation.price * exchangeRates[event.target.value]
    ).toFixed(2);
    setInputNumber(convertedPrice);
  };

  const handleCheckout = async () => {
    if (selectedDonation) {
      const selectedPriceId = selectedDonation.priceIds[selectedCurrency];

      await checkout({
        priceId: selectedPriceId,
        quantity: 1,
        mode: selectedMonthly ? 'subscription' : 'payment',
      });
    }
  };

  return (
    <div className="donate-box-container">
      <h1>Spendenbetrag</h1>
      <div className="donate-button-container">
        <button
          className={`donate-button-${!selectedMonthly ? 'selected' : 'basic'}`}
          onClick={() => handleMonthlyButtonClick(false)}
        >
          Einmalig
        </button>
        <button
          className={`donate-button-${selectedMonthly ? 'selected' : 'basic'}`}
          onClick={() => handleMonthlyButtonClick(true)}
        >
          Monatlich
        </button>
      </div>
      <div className="donate-amount-selector">
        {selectedMonthly
          ? monthlyDonation.map(donationItem => (
              <button
                key={donationItem.product}
                className={`donate-button-${
                  selectedDonation === donationItem ? 'selected' : 'basic'
                }`}
                onClick={() => handleDonationButtonClick(donationItem)}
              >
                {currencySymbols[selectedCurrency]}
                {(donationItem.price * exchangeRates[selectedCurrency]).toFixed(
                  2,
                )}
              </button>
            ))
          : donation.map(donationItem => (
              <button
                key={donationItem.product}
                className={`donate-button-${
                  selectedDonation === donationItem ? 'selected' : 'basic'
                }`}
                onClick={() => handleDonationButtonClick(donationItem)}
              >
                {currencySymbols[selectedCurrency]}
                {(donationItem.price * exchangeRates[selectedCurrency]).toFixed(
                  2,
                )}
              </button>
            ))}
      </div>

      <div className="donate-input-container">
        <div className="donate-currency-selector">
          <p>{currencySymbols[selectedCurrency]}</p>
          <select
            name="currency"
            onChange={handleCurrencyChange}
            value={selectedCurrency}
          >
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="cad">CAD</option>
          </select>
        </div>
        <input
          className="donate-input-over-two"
          type="text"
          value={inputNumber}
          readOnly
        />
      </div>
      <div className="donate-continue">
        <button onClick={handleCheckout}>Weitermachen</button>
      </div>
    </div>
  );
};

export default DonationsForm;
