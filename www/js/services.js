angular.module('hsb.services', [])

  .factory('Schedule', function () {
    var schedule = [
      {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
      {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
      {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Rooster'},
      {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'BoxStop'},
      {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Banjo'},
      {name: 'Ralph Stanley', timeStart: '12:45pm', timeEnd: '1:50pm', day: 'Friday', stage: 'Chicken'}
    ];

    return schedule;
  });