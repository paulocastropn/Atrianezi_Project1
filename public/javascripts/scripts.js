// collection of frontend JS functions
// Delete Confirmation
function confirmDeletion() {
    return confirm("Are you sure?");
}
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const tableRows = document.querySelectorAll("table tbody tr");
  
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
  
        tableRows.forEach((row) => {
          const rowText = row.textContent.toLowerCase();
          row.style.display = rowText.includes(filter) ? "" : "none";
        });
      });
    }
  });
  