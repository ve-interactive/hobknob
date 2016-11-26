'use strict';

var config = require(__base + '/../config/server.json');
var feature = function() {
  switch (config.dataSource.toLowerCase()) {
    case 'api':
      // TODO: fix me
      return require(__base + '/domain/etcd/feature');

    case 'etcd':
      return require(__base + '/domain/etcd/feature');

    default:
      return null;
  }
};

module.exports = {
    getFeatureCategories: function (applicationName, cb) {
      feature().getFeatureCategories(applicationName, cb);
    },

    getFeature: function (applicationName, featureName, cb) {
      feature().getFeature(applicationName, featureName, cb);
    },

    addFeature: function (applicationName, featureName, featureDescription, categoryId, req, cb) {
      feature().addFeature(applicationName, featureName, featureDescription, categoryId, req, cb);
    },

    updateFeatureToggle: function (applicationName, featureName, value, req, cb) {
      feature().updateFeatureToggle(applicationName, featureName, value, req, cb);
    },

    updateFeatureDescription: function (applicationName, featureName, value, req, cb) {
      feature().updateFeatureDescription(applicationName, featureName, newFeatureDescription, req, cb);
    },

    addFeatureToggle: function (applicationName, featureName, toggleName, req, cb) {
      feature().addFeatureToggle(applicationName, featureName, toggleName, req, cb);
    },

    updateFeatureMultiToggle: function (applicationName, featureName, toggleName, value, req, cb) {
      feature().updateFeatureMultiToggle(applicationName, featureName, toggleName, value, req, cb);
    },

    deleteFeature: function(applicationName, featureName, req, cb) {
      feature().deleteFeature(applicationName, featureName, req, cb);
    }
};
