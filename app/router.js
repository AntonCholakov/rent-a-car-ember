import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('cars', function() {
    this.route('show', { path: '/:car_id' });
  });
  this.route('semantic-demo');
});

export default Router;
