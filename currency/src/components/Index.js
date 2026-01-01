// BARREL EXPORT FILE - Index.js
// This file serves as a central export point for all components in the components folder
// It allows for cleaner imports in other files

// IMPORT - Bring in the Input component from the local file
import Input from "./input";

// NAMED EXPORT - Re-export Input component for use in other parts of the app
// This allows other files to import like: import { Input } from './components/Index'
// Instead of: import Input from './components/input'

// BENEFITS OF BARREL EXPORTS:
// 1. Cleaner import statements in consuming files
// 2. Single source of truth for component exports
// 3. Easy to add more components later
// 4. Consistent import patterns across the application

export { Input };