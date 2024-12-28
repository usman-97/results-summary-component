var loadCategoryData = () => {
    fetch("data.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to load category data.`);
      }
      return res.json();
    })
    .then((data) => {
        buildCategoryData(data);
    })
    .catch((error) => {
      console.error(`Unable to fetch category data: ${error}`);
    });
}

let buildCategoryData = (data) => {
    if (data !== null || data === "undefined") {
        let categoriesContainer = document.getElementById("categories");

        for (let i = 0; i < data.length; i++) {
          let category = data[i];

          let categoryContainer = document.createElement("div");
          categoryContainer.classList.add("category");
          categoryContainer.classList.add(category.category.toLowerCase());

          let categoryLabelContainer = document.createElement("div");
          categoryLabelContainer.classList.add("label-container");

          let categoryIcon = document.createElement("img");
          categoryIcon.src = category.icon;
          categoryIcon.alt = `${category.category} icon`;

          let categoryText = document.createElement("span");
          categoryText.textContent = category.category;

          categoryLabelContainer.appendChild(categoryIcon);
          categoryLabelContainer.appendChild(categoryText);

          let categoryScoreContainer = document.createElement("div");
          categoryScoreContainer.classList.add("category-score-container");

          let categoryScore = document.createElement("span");
          categoryScore.classList.add("category-score");
          categoryScore.textContent = category.score;

          let categoryTotalScore = document.createElement("span");
          categoryTotalScore.classList.add("category-total-score");
          categoryTotalScore.textContent = " / 100";

          categoryScore.appendChild(categoryTotalScore);
          categoryScoreContainer.appendChild(categoryScore);

          categoryContainer.appendChild(categoryLabelContainer);
          categoryContainer.appendChild(categoryScoreContainer);
          categoriesContainer.appendChild(categoryContainer);
        }
      }
}