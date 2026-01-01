import {useEffect, useState} from "react"

// CUSTOM HOOK - useCurrencyInfo
// This is a reusable hook that fetches currency exchange rates from an API
// Custom hooks allow us to extract and reuse stateful logic across components

function useCurrencyInfo(currency){
    // STATE - Stores the fetched currency exchange rates
    // Initially empty object, gets populated with exchange rates after API call
    const [data, setData] = useState({})
    
    // useEffect HOOK - Handles side effects (API calls)
    // Runs when component mounts and whenever 'currency' parameter changes
    useEffect(() => {
        // INPUT VALIDATION - Ensure currency parameter is valid
        // Prevents API calls with invalid data and potential security issues
        if (!currency || typeof currency !== 'string' || !/^[a-z]{3}$/.test(currency)) {
            setData({}); // Reset data if invalid currency
            return;      // Exit early, don't make API call
        }
        
        // PRIMARY API CALL - Try to fetch from the main currency API
        // Using a specific date version for stability instead of @latest
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => {
            // HTTP ERROR HANDLING - Check if response is successful
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json(); // Parse JSON response
        })
        .then((res) => {
            // SUCCESS HANDLING - Process the API response
            console.log('API Response:', res); // Debug log for development
            
            // EXTRACT EXCHANGE RATES - Get rates for the specified currency
            // API returns: { "inr": { "usd": 0.012, "eur": 0.011, ... } }
            setData(res[currency] || {}); // Set exchange rates or empty object
        })
        .catch((error) => {
            // PRIMARY API FAILED - Log error and try fallback API
            console.error("Error fetching currency data:", error);
            
            // FALLBACK API - Use alternative service if primary fails
            // This provides better reliability for users
            fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('Fallback API Response:', res);
                // Different API structure: { "rates": { "USD": 1.2, "EUR": 1.1 } }
                setData(res.rates || {}); // Extract rates from different structure
            })
            .catch((fallbackError) => {
                // BOTH APIS FAILED - Log error and set empty data
                console.error("Fallback API also failed:", fallbackError);
                setData({}); // Ensure component doesn't break
            });
        });

    }, [currency]) // DEPENDENCY ARRAY - Re-run effect when currency changes
    
    // RETURN DATA - Provide exchange rates to consuming component
    // This data will be used to populate currency options and perform conversions
    return data
}

// EXPORT - Make hook available for import in other components
export default useCurrencyInfo;