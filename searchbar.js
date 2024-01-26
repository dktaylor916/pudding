const options = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Pineapple",
  "Strawberry",
];

function filterResults() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm)
  );

  displayResults(filteredOptions);
}

function displayResults(filteredOptions) {
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Display results in a dropdown
  filteredOptions.forEach((option) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    resultItem.textContent = option;

    // Attach click event to populate the search input with the selected result
    resultItem.addEventListener("click", () => {
      document.getElementById("search-input").value = option;
      resultsContainer.style.display = "none";
    });

    resultsContainer.appendChild(resultItem);
  });

  // Show or hide the dropdown based on whether there are filtered results
  resultsContainer.style.display =
    filteredOptions.length > 0 ? "block" : "none";
}

// Close the dropdown when clicking outside of it
document.addEventListener("click", function (e) {
  const searchContainer = document.getElementById("search-container");
  const resultsContainer = document.getElementById("results");

  if (
    !searchContainer.contains(e.target) &&
    !resultsContainer.contains(e.target)
  ) {
    resultsContainer.style.display = "none";
  }
});
