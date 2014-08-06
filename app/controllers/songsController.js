// JavaScript contructor function; used by the 'new' keyword when creating a JS object
// new SongsController{{...}}

// Angular injects the $scope into this Controller when it gets created by Angular
function SongsController($scope){
  // Define songs in the ViewModel, $scope
  $scope.songs = [{title: 'zsong 1', artist: 'xartist1', duration: 100, released: true, price: 150},
    {title: 'asong 5', artist: 'artist5', duration: 100, released: true, price: 150},
    {title: 'bsong 2', artist: 'bartist2', duration: 200, released: false, price: 120},
    {title: 'csong 3', artist: 'cartist3', duration: 300, released: true, price: 130},
    {title: 'dsong 4', artist: 'dartist4', duration: 400, released: false, price: 140}];
}
