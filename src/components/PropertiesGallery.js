let propertiesArr;
let galleryDiv;
const initialPropertiesGallery = (propertiesArrFromHomePage) => {
  propertiesArr = propertiesArrFromHomePage;
  galleryDiv = document.getElementById("home-page-properties-gallery");
createGallery()
};
const createCard = (name, description, price, img) => {
  return `
     <div class="col">
                <div class="card">
                  <img
                    src="${img}"
                    class="card-img-top"
                    alt="${name}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
          ${description}
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${price}</li>
                  </ul>
                  <div class="card-body">
                    <button type="button" class="btn btn-success">
                      Success</button
                    ><button type="button" class="btn btn-warning">
                      Warning</button
                    ><button type="button" class="btn btn-danger">
                      Danger
                    </button>
                  </div>
                </div>
              </div>
            
`;
};
const createGallery = () => {
  for (let property of propertiesArr) {
    galleryDiv.innerHTML += createCard(
      property.name,
      property.description,
      property.price,
      property.img
    );
  }
};

export default initialPropertiesGallery;
