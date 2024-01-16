'use strict';

/**
 * home-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-story.home-story');
