import RestaurantSource from '../../data/restaurant-source';
import { createTemplateDefault } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__heading">Daftar Restoran</h2>
        <div class="content__card" id="resto"></div>
      </section>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.home();
    const restoContainer = document.querySelector('#resto');
    resto.restaurants.forEach((e) => {
      restoContainer.innerHTML += createTemplateDefault(e);
    });
  },
};

export default Home;
