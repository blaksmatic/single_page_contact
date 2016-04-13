var data_preset = [
    {name: "Harry S Truman", phone: "111-11111", email: "drarr.kfraft@gamil.com", tag: "My Duck", url: "https://s-media-cache-ak0.pinimg.com/736x/f0/d7/b7/f0d7b715d286503475ca6ca2ab534a3c.jpg"},
    {name: "Lorra Craft", phone: "142-411531", email: "lorra@fuun.com", tag: "Bro's girlfriend", url: "http://static1.squarespace.com/static/4fd280ef84aefc97b18a4abc/t/5267124ae4b0e4777834a640/1382486605475/AboutDisney_LandingPage_CompanyOverview_image.png"},
    {name: "Jeffni Theaf", phone: "218-433331", email: "Theaf@disney.com", tag: "IDO", url: "http://img.lum.dolimg.com/v1/images/nav_disneyjunior_thebitesizedadventuresofsamsandwich_0e14f598.png?region=0,0,300,300"},
    {name: "Bahamut", phone: "114-455551", email: "Bahamut@FF.com", tag: "Who am I", url: "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/1280/720/90/disneyworld.disney.go.com/media/campaigns/1/media/fy16-national-campaign/DP/magic-kingdom.jpg"},
    {name: "Jeroge", phone: "753-455001", email: "JRR@Nighting.com", tag: "NIDEA", url: "https://avatars2.githubusercontent.com/u/5136543?v=3&s=96"}

];

app.controller('mainController', ['$scope', function ($scope) {
    $scope.test = "Test pass";
    $scope.data = data_preset;
}]);


app.controller('detailController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    for (var i = 0; i < data_preset.length; i++) {
        if (data_preset[i].name === $routeParams.name) {
            $scope.current_user = data_preset[i];
        }
    }
}]);

