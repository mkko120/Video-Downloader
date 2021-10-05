const downloadForm = document.querySelector("form");

downloadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = searchForm.elements.searchBar.value;
  const option = e.submitter.name;
});
