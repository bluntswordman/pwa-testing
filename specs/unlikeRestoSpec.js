import RestoFavoritedb from '../src/scripts/data/restofavorite-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestoFavoritedb.putresto({ id: 1 });
  });

  afterEach(async () => {
    await RestoFavoritedb.deleteresto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restoran"]')).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this restoran"]')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));

    expect(await RestoFavoritedb.getAllresto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await RestoFavoritedb.deleteresto(1);
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));

    expect(await RestoFavoritedb.getAllresto()).toEqual([]);
  });
});
