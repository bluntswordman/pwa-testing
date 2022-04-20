import CONFIG from '../../globals/config';

const createTemplateDetail = (resto) => `
  <article class="detail-article">
    <img class="lazyload detail-image" src="${CONFIG.BASE_IMG_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.name}">
    <h3>${resto.restaurant.name}</h3>
    <h4><span class="location-icon"></span>${resto.restaurant.address}, ${resto.restaurant.city} City</h4>
    <p>${resto.restaurant.description}</p>
  </article>
  <div class="menu">
    <div class="menu-food">
      <span class="food-icon"></span>
      <div class="food-list">
        ${resto.restaurant.menus.foods.map((food) => `
          <li>${food.name}</li>
        `).join('')}
      </div>
    </div>
    <div class="menu-food">
      <div class="food-list">
        ${resto.restaurant.menus.drinks.map((drink) => `
          <li>${drink.name}</li>
        `).join('')}
      </div>
      <span class="drink-icon"></span>
    </div>
  </div>
  <div class="review-article">
    ${resto.restaurant.customerReviews.map(
    (csReview) => `
    <div class="card-review">
      <h4>${csReview.name}</h4>
      <h5>${csReview.date}</h5>
      <p>"${csReview.review}"</p>
    </div>
    `,
  ).join('')}
  </div>
`;

const createTemplateDefault = (resto) => `
  <article class="content-article">
    <div class="star-rating"><p>${resto.rating}</p></div>
    <img class="lazyload content-img" src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt="${resto.name}">
    <div class="content-item">
      <h3 class="item-title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
      <h4 class="item-city">${resto.city} City</h4>
      <p class="item-description">${resto.description}</p>
    </div>
  </article>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restoran" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restoran" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createTemplateDefault,
  createTemplateDetail,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
