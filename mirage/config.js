export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
   */

  this.namespace = '/api';
  let cars = [
    {
      type: 'cars',
      id: 'toyota-yaris',
      attributes: {
        title: "Toyota Yaris",
        owner: "John Doe",
        city: "Los Angeles",
        category: "Cars",
        doors: 5,
        image: "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2018/yaris/040/1.png?q=85&fm=jpg&w=1024&fit=max&cs=strip&bg=fff",
        description: "This Toyota Yaris ..."
      }
    },
    {
      type: 'cars',
      id: 'chevrolet-aveo',
      attributes: {
        title: "Chevrolet Aveo",
        owner: "Jack Hit",
        city: "Boston",
        category: "Cars",
        doors: 5,
        image: "https://crdms.images.consumerreports.org/c_lfill,w_555/prod/cars/chrome/white/2011CHE002b_640_01",
        description: "This Chevrolet Aveo ..."
      }
    },
    {
      type: 'cars',
      id: 'opel-corsa',
      attributes: {
        title: "Opel Corsa",
        owner: "John Doe",
        city: "Los Angeles",
        category: "Cars",
        doors: 5,
        image: "http://www.opel.ie/content/dam/opel/master/vehicles/corsa-5-door/bbc/mmg/Opel_Corsa_5D_MY17_576x322_mrm.png",
        description: "This Opel Corsa ..."
      }
    }
  ];

  this.get('/cars', function (db, request) {
    if (request.queryParams.city !== undefined) {
      let filteredCars = cars.filter(function (i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return {data: filteredCars};
    } else {
      return {data: cars};
    }
  });

  this.get('/cars/:id', function (db, request) {
    return {data: cars.find((car) => request.params.id === car.id)};
  });

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
