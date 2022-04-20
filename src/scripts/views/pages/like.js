import RestoFavoritedb from '../../data/restofavorite-idb';
import { createTemplateDefault } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__heading">Daftar Restoran yang anda suka</h2>
        <div class="content__card" id="resto"></div>
      </section>
    `;
  },

  async afterRender() {
    const resto = await RestoFavoritedb.getAllresto();
    const restoContainer = document.querySelector('#resto');
    resto.forEach((e) => {
      restoContainer.innerHTML += createTemplateDefault(e);
    });
  },
};

export default Like;
