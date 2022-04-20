import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createTemplateDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <section class="detail">
        <div class="card-detail" id="resto-detail"></div>
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createTemplateDetail(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: url.id,
        pictureId: resto.restaurant.pictureId,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
      },
    });
  },
};

export default Detail;
