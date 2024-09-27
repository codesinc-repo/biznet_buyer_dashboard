const slides = [
    "https://via.placeholder.com/900x500.png?text=Slide+1",
    "https://via.placeholder.com/900x500.png?text=Slide+2",
    "https://via.placeholder.com/900x500.png?text=Slide+3",
    "https://via.placeholder.com/900x500.png?text=Slide+4",
    "https://via.placeholder.com/900x500.png?text=Slide+5"
  ];

  let currentPage = 1;
  const totalPages = slides.length;
  const currentPageInput = document.getElementById("current-page");
  const presentationImage = document.getElementById("presentation-image");

  document.querySelector(".prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePresentation();
    }
  });

  document.querySelector(".next-page").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePresentation();
    }
  });

  function updatePresentation() {
    currentPageInput.value = currentPage;
    presentationImage.src = slides[currentPage - 1];
  }