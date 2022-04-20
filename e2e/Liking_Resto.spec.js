const assert = require('assert');

Feature('Liked Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Resto', ({ I }) => {
  I.dontSeeElement('.content-article');
});

Scenario('Liked one Resto', async ({ I }) => {
  I.dontSeeElement('.content-article');
  I.amOnPage('/');
  I.seeElement('.item-title a');

  const firstResto = locate('.item-title a').first();
  const firstTitleResto = await I.grabTextFrom(firstResto);

  I.wait(1);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-article');
  const likedRestoTitle = await I.grabTextFrom('.item-title');

  assert.strictEqual(firstTitleResto, likedRestoTitle);
});

Scenario('UnLiked one Resto', ({ I }) => {
  I.amOnPage('/');

  I.wait(1);
  I.seeElement('.content-article');

  const firstResto = locate('.item-title a').first();

  I.wait(1);
  I.click(firstResto);

  I.wait(1);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-article');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(1);
  I.dontSeeElement('.content-article');
});
