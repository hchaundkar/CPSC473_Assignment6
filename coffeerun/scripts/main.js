(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var RANGE_SELECTOR= '[data-coffee-order="sliderStrength"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler= App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    var formHandler = new FormHandler(FORM_SELECTOR);
    var rangeSelector = new FormHandler(RANGE_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
    rangeSelector.displayValueOnslide();
    console.log(formHandler);
    window.myTruck = myTruck;
})(window);
