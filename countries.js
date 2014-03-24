// Generated by CoffeeScript 1.7.1
(function() {
  var CountriesProvider, countries,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  countries = angular.module("maha.countries", []);

  countries.provider("Countries", CountriesProvider = (function() {
    function CountriesProvider() {
      this.countriesList = [];
      this.priorityList = [];
      this.$get = function() {
        var countries_list, priority_list;
        countries_list = this.countriesList;
        priority_list = this.priorityList;
        return {
          getCountryByCode: function(code) {
            return countries_list[code];
          },
          getCountries: function() {
            var key, priority, value, _i, _len, _results;
            countries = [];
            if (priority_list.length === 0) {
              _results = [];
              for (key in countries_list) {
                value = countries_list[key];
                _results.push([key, value]);
              }
              return _results;
            } else {
              for (_i = 0, _len = priority_list.length; _i < _len; _i++) {
                priority = priority_list[_i];
                countries.push([priority, countries_list[priority]]);
              }
              for (key in countries_list) {
                value = countries_list[key];
                if (__indexOf.call(priority_list, key) < 0) {
                  countries.push([key, value]);
                }
              }
              return countries;
            }
          }
        };
      };
    }

    CountriesProvider.prototype.setCountriesList = function(countries) {
      return this.countriesList = countries;
    };

    CountriesProvider.prototype.setPriorityList = function(priority_list) {
      return this.priorityList = priority_list;
    };

    return CountriesProvider;

  })());

}).call(this);

//# sourceMappingURL=countries.map
