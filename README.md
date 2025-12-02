# Currency Converter

A simple and efficient web-based Currency Converter application that allows users to convert amounts between different currencies using real-time exchange rates.

## Description

This project provides a user-friendly interface for converting currencies. It fetches the latest exchange rates from the ExchangeRate-API and displays the converted amount. The application also updates the country flags dynamically based on the selected currency, enhancing the visual experience.

## Features

- **Real-time Conversion**: Fetches the latest exchange rates to ensure accurate conversions.
- **Multiple Currencies**: Supports a wide range of global currencies.
- **Dynamic Flags**: Displays the country flag corresponding to the selected currency.
- **Responsive Design**: Works seamlessly on different screen sizes.
- **User-Friendly Interface**: Easy-to-use dropdowns for selecting "From" and "To" currencies.

## Technologies Used

- **HTML5**: For the structure of the application.
- **CSS3**: For styling and layout.
- **JavaScript**: For fetching API data and handling DOM manipulations.
- **[ExchangeRate-API](https://www.exchangerate-api.com/)**: For retrieving real-time exchange rates.
- **[FlagsAPI](https://flagsapi.com/)**: For displaying country flags.
- **[FontAwesome](https://fontawesome.com/)**: For icons.

## Project Structure

```
.
└── currencyConverter/
    ├── index.html   # Main HTML file
    ├── script.js    # JavaScript logic for API calls and UI updates
    ├── style.css    # CSS styles
    └── codes.js     # Mapping of currency codes to country codes
```

## Usage

1.  Clone the repository.
2.  Navigate to the `currencyConverter` directory.
3.  Open `index.html` in your web browser.
4.  Enter the amount you wish to convert.
5.  Select the "From" and "To" currencies from the dropdown menus.
6.  Click the "Get Exchange Rate" button to see the result.

## Note

The application uses an API key for ExchangeRate-API which is included in the `script.js` file. For production use, it is recommended to secure your API keys properly.
