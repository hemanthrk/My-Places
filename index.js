
//list of weather codes to icon mapping
var WEATHER_CODES_CSS_LOOKUP = JSON.stringify([
	{"code": 200,"pod": "d", "icon": "wi-owm-day-200"},
	{"code": 200,"pod": "n", "icon": "wi-owm-night-200"},

	{"code": 201, "pod":"d", "icon": "wi-owm-day-201"},
	{"code": 201, "pod":"n", "icon": "wi-owm-night-201"},

	{"code": 202, "pod":"d", "icon": "wi-owm-day-202"},
	{"code": 202, "pod":"n", "icon": "wi-owm-night-202"},

	{"code": 230, "pod":"d", "icon": "wi-owm-day-230"},
	{"code": 230, "pod":"n", "icon": "wi-owm-night-230"},

	{"code": 231, "pod":"d", "icon": "wi-owm-day-231"},
	{"code": 231, "pod":"n", "icon": "wi-owm-night-231"},

	{"code": 232, "pod":"d", "icon": "wi-owm-day-232"},
	{"code": 232, "pod":"n", "icon": "wi-owm-night-232"},
	
	{"code": 701,"pod":"d", "icon": "wi-owm-day-701"},
	{"code": 701,"pod":"n", "icon": "wi-owm-night-701"},
	{"code": 711,"pod":"d", "icon": "wi-owm-day-711"},
	{"code": 711,"pod":"n", "icon": "wi-owm-night-711"},
	{"code": 721,"pod":"d", "icon": "wi-owm-day-721"},
	{"code": 721,"pod":"n", "icon": "wi-owm-night-721"},
	{"code": 731,"pod":"d", "icon": "wi-owm-day-731"},
	{"code": 731,"pod":"n", "icon": "wi-owm-night-731"},
	{"code": 741,"pod":"d", "icon": "wi-owm-day-741"},
	{"code": 741,"pod":"n", "icon": "wi-owm-night-741"},
	{"code": 751,"pod":"d", "icon": "wi-owm-day-751"},
	{"code": 751,"pod":"n", "icon": "wi-owm-night-751"},

	{"code": 800,"pod":"d", "icon": "wi-owm-day-800"},
	{"code": 800,"pod":"n", "icon": "wi-owm-night-800"},
	{"code": 801,"pod":"d", "icon": "wi-owm-day-801"},
	{"code": 801,"pod":"n", "icon": "wi-owm-night-801"},
	{"code": 802,"pod":"d", "icon": "wi-owm-day-802"},
	{"code": 802,"pod":"n", "icon": "wi-owm-night-802"},
	{"code": 803,"pod":"d", "icon": "wi-owm-day-803"},
	{"code": 803,"pod":"n", "icon": "wi-owm-night-803"},
	{"code": 804,"pod":"d", "icon": "wi-owm-day-804"},
	{"code": 804,"pod":"n", "icon": "wi-owm-night-804"},
	
	
	
	{"code": 300, "pod":"d", "icon": "wi-owm-day-300"},
	{"code": 300, "pod":"n", "icon": "wi-owm-night-300"},
	{"code": 301,"pod":"d", "icon": "wi-owm-day-301"},
	{"code": 301,"pod":"n", "icon": "wi-owm-night-301"},
	{"code": 302,"pod":"d", "icon": "wi-owm-day-302"},
	{"code": 302,"pod":"n", "icon": "wi-owm-night-302"},
	{"code": 500,"pod":"d", "icon": "wi-owm-day-500"},
	{"code": 500,"pod":"n", "icon": "wi-owm-night-500"},
	{"code": 501,"pod":"d", "icon": "wi-owm-day-501"},
	{"code": 501,"pod":"n", "icon": "wi-owm-night-501"},
	{"code": 502,"pod":"d", "icon": "wi-owm-day-502"},
	{"code": 502,"pod":"n", "icon": "wi-owm-night-502"},
	{"code": 511,"pod":"d", "icon": "wi-owm-day-511"},
	{"code": 511,"pod":"n", "icon": "wi-owm-night-511"},
	{"code": 520,"pod":"d", "icon": "wi-owm-day-520"},
	{"code": 520,"pod":"n", "icon": "wi-owm-night-520"},
	{"code": 521,"pod":"d", "icon": "wi-owm-day-521"},
	{"code": 521,"pod":"n", "icon": "wi-owm-night-521"},
	{"code": 522,"pod":"d", "icon": "wi-owm-day-522"},
	{"code": 522,"pod":"n", "icon": "wi-owm-night-522"},

	{"code": 600,"pod":"d", "icon": "wi-owm-day-600"},
	{"code": 600,"pod":"n", "icon": "wi-owm-night-600"},
	{"code": 601,"pod":"d", "icon": "wi-owm-day-601"},
	{"code": 601,"pod":"n", "icon": "wi-owm-night-601"},
	{"code": 602,"pod":"d", "icon": "wi-owm-day-602"},
	{"code": 602,"pod":"n", "icon": "wi-owm-night-602"},
	{"code": 610,"pod":"d", "icon": "wi-owm-day-610"},
	{"code": 610,"pod":"n", "icon": "wi-owm-night-610"},
	{"code": 611,"pod":"d", "icon": "wi-owm-day-611"},
	{"code": 611,"pod":"n", "icon": "wi-owm-night-611"},
	{"code": 612,"pod":"d", "icon": "wi-owm-day-612"},
	{"code": 612,"pod":"n", "icon": "wi-owm-night-612"},
	{"code": 621,"pod":"d", "icon": "wi-owm-day-621"},
	{"code": 621,"pod":"n", "icon": "wi-owm-night-621"},
	{"code": 622,"pod":"d", "icon": "wi-owm-day-622"},
	{"code": 622,"pod":"n", "icon": "wi-owm-night-622"},
	{"code": 623,"pod":"d", "icon": "wi-owm-day-623"},
	{"code": 623,"pod":"n", "icon": "wi-owm-night-623"},


	]);

	var map, marker, loadmarker, infoWindow_GeoLoc;
	var infoWindow_location, markerLocation;
	var  geocoder , geocoder_location, multiMarkers=[], infoWindow_multi = [];

	
	var dataFromCloud=[];
	 //url to Google Cloud Storage bucket with HTTP Trigger to store and retrieve the map locations
	 var cloudStoreUrl = "https://us-central1-my-places-180501.cloudfunctions.net/getCloudToMap"
$(document).ready(function(){

	

	var imgLookup = JSON.parse(WEATHER_CODES_CSS_LOOKUP);//json to get the weather icon

	var cityToSearch = "Reading";

	

	
	//initialize the map, place an initial marker in Reading, Pa
	//add Lisener to map to place Marker when the user clicks on the map


	function initialize(){

		geocoder = new google.maps.Geocoder();
		geocoder_location = new google.maps.Geocoder();

		var latlng = new google.maps.LatLng(40.3356,-75.9269);//latlong for Reading,Pa

		 map = new google.maps.Map(document.getElementById('map'), {
          center: latlng,
          zoom: 8,
           mapTypeId: google.maps.MapTypeId.ROADMAP
        });

		 marker = new google.maps.Marker({
	  		position: latlng,
	  		map: map
	  });

	 

		 //code to save location in database

	 var content_getLoc =   '<div id="form" >'+
          '<table>'+
            '<tr><td>Name:</td><td><input type="text" id="name"></td></tr>'+
            '<tr><td>Address:</td><td><input type="text" id="address"></td> </tr>'+
            '<tr><td>Type:</td><td><select id="location_type">'+
              '<option value="bar" SELECTED>bar</option>'+
              '<option value="restaurant">restaurant</option>'+
            '</select></td></tr>'+
            '<tr><td></td><td><input id="save_loc" type="button" value="save" ></td></tr>'+
          '</table>'+
        '</div>';

	 infoWindow_location = new google.maps.InfoWindow({
	 	content: content_getLoc
	 });

	

	 markerLocation = new google.maps.Marker();

	 map.addListener( 'click', function(event){

	 	markerLocation.setPosition(event.latLng);
	 	markerLocation.setMap(map);

	 });


	markerLocation.addListener('click',function(){
		console.log("marker location event trig");
		infoWindow_location.open(map, markerLocation);

		 var saveLoc = document.getElementById('save_loc');

		saveLoc.addEventListener('click',function(){

			console.log("inside save loc click function");
			saveData();

		});

	});

	


	}//end of initialize function

	initialize();

	//get the data from the cloud and place markers and populate InfoWindows with data from saved locations
	function putDataonMap(){
		//var info_loadnew = new google.maps.InfoWindow();

		var a;

		

		for(a=0;a<dataFromCloud.length;a++){

			var latlngload = new google.maps.LatLng(dataFromCloud[a].lat,dataFromCloud[a].lng);

			// loadmarker = new google.maps.Marker({
			// 	position: latlngload,
			// 	map: map
			// });

			multiMarkers[a]= new google.maps.Marker({
				position: latlngload,
				map: map
			});
			
			infoWindow_multi[a] = new google.maps.InfoWindow();

			 map.setCenter(multiMarkers[a].getPosition());

			// google.maps.event.addListener(loadmarker, 'click', (function(loadmarker, a) {
   //      		return function() {
   //       	 info_loadnew.setContent('Name: '  +dataFromCloud[a].name + '<br>' + 'Address: '+dataFromCloud[a].address);
   //       	 info_loadnew.open(map, loadmarker);
   //      		}
   //    		})(loadmarker, a));

   			google.maps.event.addListener(multiMarkers[a], 'click', function(innerKey) {
      return function() {
      	infoWindow_multi[innerKey].setContent('Name: '  +dataFromCloud[innerKey].name + '<br>' + 'Address: '+dataFromCloud[innerKey].address);

          infoWindow_multi[innerKey].open(map, multiMarkers[innerKey]);
      }
    }(a));



		}//end of for loop

	}//end of putDataonMap


	//Method called when user clicks on "Show Location" button to show all stored locations
	//make AJAX GET call to Google Cloud Storage URL 
	function loadData(){


		
		var xhp_Get = new XMLHttpRequest();

		

		 xhp_Get.open("GET", cloudStoreUrl,true);

		xhp_Get.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		 xhp_Get.setRequestHeader('X-PINGOTHER', 'pingpong');

		



		 xhp_Get.open("GET", cloudStoreUrl,true);

		 xhp_Get.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		 xhp_Get.setRequestHeader('X-PINGOTHER', 'pingpong');

		 

		xhp_Get.onreadystatechange = function(resp) {
  			if (this.readyState == 4 && this.status == 200) {
   		 console.log("cloud returns data",xhp_Get)
   		 	if(xhp_Get.responseText != "")
   			 	dataFromCloud = JSON.parse(xhp_Get.responseText);
   			 	putDataonMap();
  			}
  		};

  		xhp_Get.send(null);


	}//end of loaddata

	//constructor to store the user entered data on a location on the map
	function Sloc(lat,lng, name, address){
		this.lat = lat;
		this.lng = lng;
		
		this.name = name;
		this.address = address;
	}

	
	var newdata = {};
	//function to save the user location with the data entered
	function saveData(){



		var address_loc = document.querySelectorAll("#form #address")[0].value;
		document.querySelectorAll("#form #address")[0].value = "";
		var name_loc = document.querySelectorAll("#form #name")[0].value;
		document.querySelectorAll("#form #name")[0].value = "";
		var type_loc = document.querySelectorAll("#location_type")[0].value;

		var latlng_loc = markerLocation.getPosition();

		infoWindow_location.close();
		//markerLocation.setMap(null);

		

		 newdata = new Sloc(latlng_loc.lat(), latlng_loc.lng(), name_loc,address_loc);
		
		
		 //_____________________________send data to cloud______________________________

		 cloudAccess(newdata);
		 
		

		

	}//end of saveData location function

	//place AJAX POST call to Google Cloud Storage to save the data
	function cloudAccess(cData){
		 	var xhp = new XMLHttpRequest();

		

		 xhp.open("POST", cloudStoreUrl,true);

		xhp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		// xhp.setRequestHeader('X-PINGOTHER', 'pingpong');

		 xhp.onreadystatechange = function(resp) {
  			if (this.readyState == 4 && this.status == 200) {
   		 console.log("cloud returns data",xhp)
   		 
  		}
  		};


		

		 xhp.open("POST", cloudStoreUrl,true);

		 xhp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		 xhp.setRequestHeader('X-PINGOTHER', 'pingpong');

		 xhp.send(JSON.stringify(cData));

		 }//end of cloud access
		


		 var removeLoc = document.getElementById('removeSavedLoc');
	
			removeLoc.addEventListener('click',function(){

			removeData();

			});

	function removeData(){

		var xhp_del = new XMLHttpRequest();

		xhp_del.open("DELETE", cloudStoreUrl,true);

		xhp_del.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		 xhp_del.setRequestHeader('X-PINGOTHER', 'pingpong');

		 xhp_del.onreadystatechange = function(resp) {
  			if (this.readyState == 4 && this.status == 200) {
   		 console.log("cloud returns data",xhp_del)
   		 	if(xhp_del.responseText != ""){
   		 		
   		 		 
   		 		removeMultiMarkers();
				
				
   			 	
   		 		}
   			 	
  			}
  		};

		 
		 xhp_del.send(null);

	}//end of removeData

	function removeMultiMarkers(){
		 for(var i=0; i<multiMarkers.length; i++){
    	    multiMarkers[i].setMap(null);
    	}
    	multiMarkers.length = 0
	}
	
	//capture the user click of "Show Locations" button
	var showLoc = document.getElementById('showSavedLoc');
	
	showLoc.addEventListener('click',function(){

		loadData();

	});

	//listener to the "Search" button in the heading to trigger the city or address search
	var addSrch = document.getElementById('addSrch');
	addSrch.addEventListener('click',function(){

		codeAddress();
	})


	//__________________________________Geocoding on User Search_________________________________________________

	//parsing the address_components of the returned Geocoding response to get the city and country name
	//used to call the Current Weather API to get the city's weather
	function getCorrectCityAndCOuntry(addCompArr){

		var cityStr = '';

		for(var b=0;b<addCompArr.length;b++ ){

			if(addCompArr[b].types[0] === "locality"){
				cityStr += addCompArr[b].long_name;
				cityStr += "&country=";
			}

			if(addCompArr[b].types[0] === "country"){
				cityStr += addCompArr[b].short_name;
			}
		}//end of for loop

		return cityStr;
	}

	//function to use Geocoding to center the map on the location entered in the text box and after clicking the SEARCH button
	function codeAddress(){

		var address = document.getElementById("address").value;


		geocoder.geocode({'address':address}, function(results, status){

			if(status === "OK"){
				console.log(results[0]);
				map.setCenter(results[0].geometry.location);
				marker.setPosition(results[0].geometry.location);
				//cityToSearch = results[0].address_components[0].long_name + "&country=" + results[0].address_components[results[0].address_components.length-1].short_name;
				cityToSearch = getCorrectCityAndCOuntry(results[0].address_components);
				infoWIndow_weather.close();
			}else{
				alert("Some problem in locating the place of interest"+ status);
			}

		})

	}

	//infoWindow html to show current day's weather when user clicks on the marker
	var contentString = '<div class="container">'+
        '<h3 class="display_today">Hello, <span class="cityName"></span>!</h3>'+
        '<div class="row">'+
        	'<div class="col-md-4">Today\'s Weather<br> <span class="today_dateTime"></span><br> <p><small class="celc_tag" name="temp_format" data-value="celsius">C </small><small >|</small><small name="temp_format" data-value="fahrenheit"> F </small></p>'+
        	'</div>'+
        	'<div class="col-md-1">'+
        		'<span class="today_wea_img_sp"></span>'+
        	'</div>'+
        	'<div class="col-md-5">'+
        		'<span class="today_txt_desc"></span><br><span class="today_Act_temp"></span><br><span class="today_Feels_likeTemp"></span><br><span class="today_precip"></span><br><span class="today_wind"></span><br><span class="today_humid"></span>'+
        	'</div>'+
        	'<div class="col-md-1"></div>'+
        	'<div class="col-md-1"></div>'+
        	'</div></div>';

     //adding infoWindow to show the current day weather for the marked on the map by calling the Weather API

     
     //function to map the code returned by Weather API
     function findIconfromMatchingCode(arr,ajaxcode){
		var res = arr.filter(function(o){ 
			if((o.code == ajaxcode.weather.code)&& (o.pod === ajaxcode.pod))
				return o;  
			}
		);
		return res? res[0].icon : null;
	}

     function ajaxCalltogetIcon(iconCode, idPassed){
		
    var icon = document.createElement("i");
    icon.setAttribute("class","wi " + iconCode);

    if(document.getElementsByClassName('today_wea_img_sp')[0].children.length >0)
    	document.getElementsByClassName('today_wea_img_sp')[0].removeChild(document.getElementsByClassName('today_wea_img_sp')[0].children[0]);

	
	$("."+idPassed)[0].append(icon);

	}// end of function to get png icon for weather
	
	function processToGetIcon(ajaxData, pngImgId){

		//call function to get the icon from the array of objects by passing weather code returned
			var icontoFetch = findIconfromMatchingCode(imgLookup, ajaxData);
			
			
			 ajaxCalltogetIcon(icontoFetch, pngImgId);
			

		
	}

	// AJAX GET call to Weather API to get weather information and show in InfoWIndow marker for the city or address
	//searched by the user by typing on the text box in the header
	function callWeatherApi(){

		var urlapi = "https://api.weatherbit.io/v2.0/current?city="+cityToSearch+"&key=f9788b32cebc4fd79821bb11a1b30ec4";


	var encurl = encodeURI(urlapi);

		$.ajax({
		type: "GET",
		url: encurl,
		dataType: "json",
		success:function(weatherdata,  textStatus, jqXHR ){
			console.log("successful",weatherdata,jqXHR.status);

			if(jqXHR.status === 200){
				$(".today_txt_desc").text(weatherdata.data[0].weather.description);

			$(".cityName").text(weatherdata.data[0].city_name + ", " + weatherdata.data[0].country_code);
			//var temp = "wea_img";
			var temp = "today_wea_img_sp";
			processToGetIcon(weatherdata.data[0],temp );

			$(".today_Act_temp").text("Actual Temp " + weatherdata.data[0].app_temp +" \xB0C" );

			$(".today_Feels_likeTemp").text("Feels Like " + weatherdata.data[0].temp +" \xB0C" );
			$(".today_wind").text(" Wind " + weatherdata.data[0].wind_spd + "\xA0m/s");
			
			var date = new Date();
			$(".today_dateTime").text(date.toDateString());
			
			if(!weatherdata.data[0].precip)
				$(".today_precip").text(" Precipitation 0 %");
			else
				$(".today_precip").text(" Precipitation " + weatherdata.data[0].precip  + "%");
			
			$(".today_humid").text(" Humidity " + weatherdata.data[0].rh + "%");
			}

			

		},
		error: function(e){
			console.log("not right",e);
		}

	});

	}//end of function to get current weather  

	//code to handle switch between C or F option for the weather


	//function to handle switch between C | F scale for the weather data
	function cOrFChanges(currT){

		if(currT.data('value') == "fahrenheit"){
			temp_format = "I";
		}else{
			temp_format = 'default';
		}

		currT.parent().children().each(function(){

			$(this).removeClass("celc_tag");
		});

		currT.addClass("celc_tag");
		if(temp_format == "I"){
			urlapi = "https://api.weatherbit.io/v2.0/current?city="+cityToSearch+"&units="+temp_format+"&key=f9788b32cebc4fd79821bb11a1b30ec4";
		}else{
			urlapi = "https://api.weatherbit.io/v2.0/current?city="+cityToSearch+"&key=f9788b32cebc4fd79821bb11a1b30ec4";
		}

		var encurl = encodeURI(urlapi);
		$.ajax({
		type: "GET",
		url: encurl,
		dataType: "json",
		success:function(weatherdata,  textStatus, jqXHR ){
			console.log("successful",weatherdata,jqXHR.status);

			if(jqXHR.status === 200){

				if(temp_format == "I"){
				$(".today_Act_temp").text("Actual Temp " + weatherdata.data[0].app_temp + " \xB0F" );

				$(".today_Feels_likeTemp").text("Feels Like " + weatherdata.data[0].temp +" \xB0F" );

				$(".today_wind").text(" Wind " + weatherdata.data[0].wind_spd + "\xA0mph");

			}else{
				$(".today_Act_temp").text("Actual Temp " + weatherdata.data[0].app_temp +" \xB0C" );

				$(".today_Feels_likeTemp").text("Feels Like " + weatherdata.data[0].temp +" \xB0C" );
				$(".today_wind").text(" Wind " + weatherdata.data[0].wind_spd + "\xA0m/s");
			}
				
			
			}// only if status is 200

		}

			});//end of ajax

	}


	//____________________________________Adding Geolocation to get the current location to fix a marker_______________

		infoWindow_GeoLoc = new google.maps.InfoWindow();

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow_GeoLoc.setPosition(pos);
            infoWindow_GeoLoc.setContent('Location found.');
            infoWindow_GeoLoc.open(map);

           

            marker.setPosition(pos);
            marker.setMap(map);

            setTimeout(function(){
            	infoWindow_GeoLoc.close();
            },3000);

            loadData();

            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow_GeoLoc, map.getCenter());
          });

        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow_GeoLoc, map.getCenter());
        }
      

      function handleLocationError(browserHasGeolocation, infoWindow_GeoLoc, pos) {
        infoWindow_GeoLoc.setPosition(pos);
        infoWindow_GeoLoc.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow_GeoLoc.open(map);
      }
	

    var infoWIndow_weather = new google.maps.InfoWindow({
    	content: contentString
    });
	
	 marker.addListener('click',function(){
	 	infoWIndow_weather.open(map,marker);
	 	callWeatherApi();

	 	var corF;
	 	for(var t=0;t<document.getElementsByName('temp_format').length;t++){

	 		cOrF = document.getElementsByName('temp_format')[t];
	 		cOrF.addEventListener('click',function(){
	 			cOrFChanges($(this));
	 		})
	 	}
	 	
	 });

	 


      
});
	



