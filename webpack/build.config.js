const config = require('./../config.json')

const htmlOptions = {
  title: config.meta_defaults.title,
  description: config.meta_defaults.description,
  bgcolor: config.meta_defaults.bgcolor,
  site_url: config.meta_defaults.site_url,
  keywords: config.meta_defaults.keywords,
  inject: true,
}

module.exports = {
  htmlOptions
}