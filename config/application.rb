require File.expand_path("../boot", __FILE__)

require "rails"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "active_resource/railtie"

Bundler.require(:default, Rails.env) if defined?(Bundler)

module Skeleton
  class Application < Rails::Application
    config.autoload_paths += %W[#{config.root}/presenters #{config.root}/lib]
    config.time_zone = "Brasilia"
    config.i18n.load_path += Dir[Rails.root.join("config/locales/**/*.yml").to_s]
    config.i18n.default_locale = :"pt-BR"
    config.encoding = "utf-8"
    config.filter_parameters += [:password]
    config.assets.enabled = false
    config.generators.assets = false
    config.generators.test_framework :rspec, :fixtures => false, :view_specs => false
  end
end