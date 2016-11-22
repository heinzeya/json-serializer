'use strict';

const _ = require('lodash');

module.exports = function (t, opts) {
  this.serialize = function (data) {
    var payload = {};

    function multiple() {
      payload.data = [];

      records.forEach(function (data) {
        payload.data.push(resource(data));
      });

      return payload;
    }

    function single (data) {
      payload.data = resource(data)
      return payload;
    }

    function relationships(d, t) {
      if (_.isArray(d)) {
        _.map(d, function(k){
          return {
            type: t,
            id: k._id
          }
        });     
      } else {
        return {
          type: t,
          id: d
        }
      }
    }

    function resource (data) {
      var obj = {};

      for(var i in opts.relationships) {
        obj[i] = {
          data: relationships(data[i],opts.relationships[i].type)
        }
      }

      return {
        type: type,
        id: data._id,
        attributes: _.pick(data, opts.attributes)
      }
    }

    if (_.isArray(data)) {
      return multiple(data);
    } else {
      return single(data);
    }
  }
};
