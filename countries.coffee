
countries  = angular.module "maha.countries", []

countries.provider "Countries",
  class CountriesProvider
    constructor: ->
      @countriesList = []
      @priorityList = []

      @$get = ->
        countries_list = @countriesList
        priority_list = @priorityList

        getCountryByCode: (code) ->
          countries_list[code]

        getCountries: ->
          countries = []
          if priority_list.length is 0
            [key, value] for key, value of countries_list
          else
            countries.push [priority, countries_list[priority]] for priority in priority_list
            countries.push [key, value] for key, value of countries_list when key not in priority_list
            countries

    setCountriesList: (countries) ->
      @countriesList = countries

    setPriorityList: (priority_list) ->
      @priorityList = priority_list

