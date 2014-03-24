angular-maha-countries
======================

Usage
-----

Just include countries.js and proper language file

```html
<script src="/angular-maha-countries/countries.js"
type="text/javascript"></script>
<script src="/angular-maha-countries/en.js"
type="text/javascript"></script>
```

And in your controller just inject the provider:

```js

indexApp.controller("IndexController", ['$scope', 'Countries', 
  function($scope, Countries) {
    "use strict";
    $scope.countriesList = Countries.getCountries();
    $scope.country = Countries.getCountryByCode('GB');
  }]);
```

coffeescript

```coffeescript
indexApp.controller "IndexController",
  class IndexController
    constructor: (@$scope, @Countries) ->
      $scope.countriesList = Countries.getCountries()
      $scope.country = Countries.getCountryByCode "GB"
```

### Select and ng-options ###

*Countries.getCountries()* returns a list of 2-element arrays.
```
[
  ['PL', 'Poland'],
  ['DE', 'Germany']
  ...
]
```

Ng-options usage:

```html
<select 
  ng-options="country[0] as country[1] for country in countries"></select>
```

Have fun :)

Configuration
-------------

#### Prioritising countries. ####
Sometimes you want certain countries to be shown upfront, like your
country, or neighbours. You can configure it like that:

```js
yourApp.config(function(CountriesProvider) {
  CountriesProvider.setPriorityList(['PL', 'DE', 'FR', 'GB']);
});
```

or coffeescript:

```coffeescript
yourApp.config (CountriesProvider) ->
  CountriesProvider.setPriorityList ['PL', 'DE', 'FR', 'GB']
```

Source
------

List of countries from https://github.com/umpirsky/country-list
converted using: https://github.com/MichalMazurek/country-list-converter

