My-Places:

This app uses the Googla Maps Places Library and includes features like Geolocation (using HTML5 Geolocation), Geocoding and Google Cloud Platform - Cloud Storage to store the locations on the map and retrieve it. 
Initially the user is prompted an alert to allow Google Maps to find the location. If the user selects yes, then the current location is determined and a InfoWIndow shows a message "Location Found" for 3 seconds. A Marker is placed on the current location and if the user clicks on the marker, the current weather conditions in the location is shown in another Infowindow. 
If the user has already saved some locations on the map, then these locations are shown on the map with a marker placed on all of them. The user can click on any of the marker and an InfoWindow will show the details about that location namely the name and address that the user had entered when saving the location. All the saved locations are stored in Google Cloud Storage and retrieved for the user when the "Show Locations" button is pressed.
The heading section shows text box with the "Enter a city or Address" prompt and "Search" button is provided. The User can enter any place or address to be found on the map. Once the user enters a value and presses on the "Search" button, the map re-centers on the location and also a marker is placed on the map. The user can check the current weather conditions in the location by clicking on the marker and the weather data shown will be updated to the new location weather. 
The user can click on any other spot on the map to place a new marker. If the user clicks on the marker, then an InfoWindow opens prompting the user to enter "Name" and "Address" in text boxes. And a button "Save" is provided to store this location. The user can click on multiple locations and save them by providing the information. A button is provided in the footer called "Show Locations". On clicking the button, a marker is placed on every location saved previously by the user. On clicking on any of the markers, the information about that location namely the "Name" and "Address" is shown in a InfoWIndow.
Another button "Remove Locations" has been provided for the user to clear out all the saved locations on the map. On pressing it, all the markers on the saved locations will be removed except for the marker placed on the last saved position.

Instructions: 
Download and unzip the contents. 
Open a terminal and change the path to the downloaded folder. 
Install live-stream using:
	npm install -g live-server
Execute the cmd:
	live-server
on the terminal to start the server and deploy the project on it.