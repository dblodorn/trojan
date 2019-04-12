const config = require('./../config.json')

const htmlOptions = {
  title: config.meta_defaults.title,
  description: config.meta_defaults.description,
  bgcolor: config.meta_defaults.bgcolor,
  nprogress_color: config.meta_defaults.nprogress_color,
  site_url: config.meta_defaults.site_url,
  keywords: config.meta_defaults.keywords,
  inject: true,
  endpoint: config.wp_endpoint
}

module.exports = {
  htmlOptions
}