module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/get-promocode/:utm_campaign/:utm_source',
     handler: 'get-promocode.mainAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
