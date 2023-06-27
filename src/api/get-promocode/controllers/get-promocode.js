'use strict';

const strapiUtils = require('@strapi/utils');

module.exports = {
  mainAction: async (ctx, next) => {
    try {
      const nextPromocode = (await strapi.entityService.findMany('api::promocode.promocode', {
        fields: ['value'],
        filters: {is_issued: false},
        limit: 1,
        sort: {value: 'ASC'},
      }))[0];
      await strapi.entityService.update('api::promocode.promocode', nextPromocode.id, {
        data: {
          utm_campaign: ctx.params.utm_campaign,
          utm_source: ctx.params.utm_source,
          is_issued: true,
        }
      });
      ctx.body = nextPromocode;
    } catch (err) {
      ctx.body = err;
    }
  }
};
