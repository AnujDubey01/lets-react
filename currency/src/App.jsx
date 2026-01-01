import { useState, useEffect } from 'react'
import { Input } from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'

// MAIN CURRENCY CONVERTER APP COMPONENT
// This is the root component that manages all the currency conversion logic

function App() {
  // STATE MANAGEMENT - Using useState hook to manage component state
  // These states control the entire currency conversion functionality
  
  const [amount, setAmount] = useState(0);           // Amount to convert (can be number or empty string)
  const [fromCurrency, setFromCurrency] = useState("inr"); // Source currency (default: Indian Rupee)
  const [toCurrency, setToCurrency] = useState("usd");     // Target currency (default: US Dollar)
  const [convertedAmount, setConvertedAmount] = useState(0); // Result of conversion

  // CUSTOM HOOK - Fetches currency exchange rates based on 'fromCurrency'
  // This hook handles API calls and returns exchange rates for the selected currency
  const currencyInfo = useCurrencyInfo(fromCurrency);

  // EXTRACT CURRENCY OPTIONS - Get all available currencies from the API response
  // Object.keys() converts the currency object into an array of currency codes
  const options = Object.keys(currencyInfo || {});

  // SWAP FUNCTION - Switches 'from' and 'to' currencies and their amounts
  // This provides a quick way to reverse the conversion direction
  const swap = () => {
    const tempAmount = amount;           // Store current amount
    const tempConverted = convertedAmount; // Store current converted amount
    
    // Swap the currencies
    setFromCurrency(toCurrency);         // 'To' becomes 'From'
    setToCurrency(fromCurrency);         // 'From' becomes 'To'
    
    // Swap the amounts
    setConvertedAmount(tempAmount);      // Original amount becomes converted amount
    setAmount(tempConverted);            // Converted amount becomes original amount
  }

// CONVERSION FUNCTION - Performs the actual currency conversion calculation
const convert = () => {
  // Handle empty input by converting to number (empty string becomes 0)
  const numericAmount = Number(amount) || 0;
  
  // VALIDATION - Check if exchange rate exists for target currency
  if (!currencyInfo[toCurrency]) {
    alert(`Exchange rate for ${toCurrency.toUpperCase()} is not available`);
    return;
  }
  
  // CALCULATION - Multiply amount by exchange rate and format to 4 decimal places
  // currencyInfo[toCurrency] contains the exchange rate from API
  setConvertedAmount((numericAmount * currencyInfo[toCurrency]).toFixed(4));
};

  return (
        // MAIN CONTAINER - Full screen with background image
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                // INLINE STYLES - Background image for visual appeal
                backgroundImage: `url('https://media.fortuneindia.com/fortune-india/import/2022-05/1e3457f5-efbd-4697-9308-6c12c6775e1b/Indian_Currency_06133_copy.jpg?rect=0,0,2700,1418&w=1200&ar=40:21&auto=format,compress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100')`,
            }}
        >
            <div className="w-full">
                {/* FORM CONTAINER - Centered card with backdrop blur effect */}
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    
                    {/* FORM ELEMENT - Handles form submission for conversion */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault(); // Prevent page refresh on form submit
                            convert();          // Call conversion function
                        }}
                    >
                        {/* FROM CURRENCY INPUT - Source currency and amount */}
                        <div className="w-full mb-1">
                            <Input
                                label="From"                    // Display label
                                amount={amount}                 // Current amount value
                                onAmountChange={setAmount}      // Function to update amount
                                currencyOptions={options}      // Available currencies
                                selectCurrency={fromCurrency}  // Currently selected currency
                                onCurrencyChange={(currency) => setFromCurrency(currency)} // Update currency
                            />
                        </div>
                        
                        {/* SWAP BUTTON - Positioned between the two input fields */}
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"  // Not a submit button
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap} // Call swap function
                            >
                                swap
                            </button>
                        </div>
                        
                        {/* TO CURRENCY INPUT - Target currency and converted amount */}
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"                      // Display label
                                amount={convertedAmount}        // Converted amount (read-only)
                                amountDisabled={true}           // Disable amount input (result only)
                                currencyOptions={options}      // Available currencies
                                selectCurrency={toCurrency}    // Currently selected target currency
                                onCurrencyChange={(currency) => setToCurrency(currency)} // Update target currency
                            />
                        </div>
                        
                        {/* CONVERT BUTTON - Triggers the conversion calculation */}
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                            {/* DYNAMIC TEXT - Shows current conversion details */}
                            {
                            amount >= 0 && fromCurrency && toCurrency ? 
                                ` ${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}` 
                                : ""
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

  export default App;
  