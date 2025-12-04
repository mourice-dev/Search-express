/** @format */

// 1. Get the current query string from the browser window's location
const queryString = window.location.search;

// 2. Create a URLSearchParams object from the string
const params = new URLSearchParams(queryString);

console.log("Original URL Parameters:");
console.log(`Category: ${params.get("category")}`); // Output: Category: electronics
console.log(`Sort: ${params.get("sort")}`); // Output: Sort: price:asc

// 3. Modify the parameters using methods
params.set("category", "computers"); // Update the category
params.delete("sort"); // Remove the sort parameter
params.append("filter", "onsale"); // Add a new filter

// 4. Generate the new query string
const newQueryString = params.toString();
console.log("New Query String: " + newQueryString);
// Output: New Query String: category=computers&filter=onsale

// 5. Update the browser's URL (optional, keeps the page from reloading)
// history.pushState({}, '', `?${newQueryString}`);
