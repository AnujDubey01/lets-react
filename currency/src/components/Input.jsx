import React, { useId, useCallback } from 'react'

// REUSABLE INPUT COMPONENT
// This component handles both amount input and currency selection
// It's designed to be reused for "From" and "To" currency inputs

function Input({
    // PROPS DESTRUCTURING - These are the properties passed from parent component
    label,                    // Text label like "From" or "To"
    amount,                   // Current amount value (controlled by parent)
    onAmountChange,          // Function to update amount in parent component
    onCurrencyChange,        // Function to update selected currency in parent
    currencyOptions = [],    // Array of available currencies (default: empty array)
    selectCurrency = "inr",  // Currently selected currency (default: INR)
    amountDisabled = false,  // Whether amount input should be disabled
    currencyDisabled = false, // Whether currency dropdown should be disabled
    className = "",          // Additional CSS classes for styling
}) {
   // useId HOOK - Generates unique ID for accessibility
   // Links the label with input field for screen readers and better UX
   const amountInputId = useId();

   // useCallback HOOK - Memoizes the function to prevent unnecessary re-renders
   // Only recreates function when onAmountChange dependency changes
   const handleAmountChange = useCallback((e) => {
       // Check if parent provided an amount change handler
       if (onAmountChange) {
           const inputValue = e.target.value;
           
           // ALLOW EMPTY INPUT - Let user clear the field completely
           // This prevents the annoying "0" that can't be deleted
           if (inputValue === '') {
               onAmountChange(''); // Pass empty string to parent
               return;
           }
           
           // VALIDATE AND CONVERT - Ensure input is a valid positive number
           const value = Number(inputValue);
           if (!isNaN(value) && value >= 0) {
               onAmountChange(value); // Pass valid number to parent
           }
           // If invalid input, do nothing (keeps previous valid value)
       }
   }, [onAmountChange]); // Dependency array - recreate only if onAmountChange changes

   // useCallback for currency selection - same optimization as above
   const handleCurrencyChange = useCallback((e) => {
       if (onCurrencyChange) {
           onCurrencyChange(e.target.value); // Pass selected currency to parent
       }
   }, [onCurrencyChange]);

    return (
        // MAIN CONTAINER - Flexbox layout with white background
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            
            {/* LEFT SIDE - Amount Input Section */}
            <div className="w-1/2">
                {/* ACCESSIBILITY - Label linked to input via htmlFor and id */}
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label} {/* Dynamic label: "From" or "To" */}
                </label>
                
                {/* CONTROLLED INPUT - Value comes from parent state */}
                <input
                    id={amountInputId}           // Links to label for accessibility
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"                // HTML5 number input with built-in validation
                    placeholder="Amount"
                    disabled={amountDisabled}    // Can be disabled for "To" field
                    value={amount}               // CONTROLLED - value from parent state
                    onChange={handleAmountChange} // Calls our memoized handler
                />
            </div>

            {/* RIGHT SIDE - Currency Selection Section */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                
                {/* CONTROLLED SELECT - Currency dropdown */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}        // CONTROLLED - current selection from parent
                    onChange={handleCurrencyChange} // Calls our memoized handler
                    disabled={currencyDisabled}
                >
                    {/* CONDITIONAL RENDERING - Show currencies or fallback message */}
                    {currencyOptions.length > 0 ? (
                        // MAP OVER CURRENCIES - Create option for each available currency
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency} {/* Display currency code like "usd", "inr" */}
                            </option>
                        ))
                    ) : (
                        // FALLBACK - Show when no currencies are loaded yet
                        <option value="" disabled>No currencies available</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default Input;