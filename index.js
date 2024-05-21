const categoriesData = [
  { img: "images/img-1.jpg", content: "Design" },
  { img: "images/img-2.jpg", content: "Development" },
  { img: "images/img-3.jpg", content: "Marketing" },
  { img: "images/img-4.jpg", content: "IT and Software" },
  { img: "images/img-5.jpg", content: "Personal Development" },
  { img: "images/img-6.jpg", content: "Bussiness" },
  { img: "images/img-7.jpg", content: "Photography" },
  { img: "images/img-8.jpg", content: "Music" },
];
let category = document.querySelector("#categories");
categoriesData.forEach((element) => {
  category.innerHTML += `
     <div class="col-lg-3 col-md-6">
          <div class="card_">
            <div class="card-img d-flex justify-content-center">
              <img src="${element.img}" alt="" />
            </div>
            <div class="card-content mt-2">
              <p class="ms-5 ms-md-4 ms-lg-3">${element.content}</p>
            </div>
          </div>
        </div>
    `;
});
