<!DOCTYPE html>
<html>
  <head>
    <!--stylesheet imports-->
    <link rel="stylesheet" href="leaflet.css" />
  </head>
  <body>

    <!--left panel-->
    <div style="position: absolute; left: 0px; width: 400px; top: 0; bottom: 0;"></div>
    <!--map-->
    <div id="map" style="position: absolute; right: 0; left: 400px; top: 0; bottom: 0;"></div>

    <!--javascript imports-->
    <script src="leaflet.js"></script>

    <script>

    /* =====================

    # Lab 1, Part 3 — Structured Data

    ## Introduction

    Refactor your week 1 homework assignment to leverage some of the Javascript functionality we
    have been learning about. We will start by improving the way we store data and the amount of
    times we call the L.marker method.

    ## Task 1: Data Storage

    Let's consider a marker for a single restaurant point location. We could store information
    about that marker as an array ([element1, element2, element3...]). Your point location
    array should contain the following three elements in this order: 1. lat, 2. lng, 3. label.

    Create an array of arrays (an array that contains multiple arrays) to represent every
    restaurant in your restaurant data. Save this as variable "restaurantData".

    Here's the simplest array of arrays: [[]]
    Here's an array of arrays with two subarrays: [[], []]

    ## Task 2: Process Data

    Create a marker for each element in "restaurantData". Your final code should only include
    "L.marker" one time.

    ## Task 3: Add Two Additional Markers

    Add two additional restaurants to your data. You should only need to modify "restaurantData"
    to do this. Confirm that these new markers are added to your application.

    ## Task 4: Add Popups to Markers

    Add popups to your markers. The popup should contain the label for your restaurant. Refer
    to the Leaflet documentation for instructions on adding a popup: http://leafletjs.com/reference.html#popup

    ## Task 5: Convert to JS Objects

    *IMPORTANT* Make a commit so that your work to this point is saved. That's how I'll see your efforts
    prior to refactoring.

    We've already seen a better data structure for representing things with multiple attributes: {}.
    The final task in this lab is to convert your array of arrays which holds all restaurant locations
    into an array of objects such that your data carries around metadata about your data's semantics.

    This is still a very simple application. Reflect for a moment on the benefits of objects over arrays
    for keeping track of data and organizing applications around that data

    ===================== */

    var map = L.map('map', {
      center: [39.9522, -75.1639],
      zoom: 14
    });

    var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    }).addTo(map);

    let restaurantData = [[39.95170, -75.15963,'Iron Hill Brewery & Restaurant'],
        [39.94955, -75.16865,'Pizzeria Vetri'], [39.95037, -75.16654,'Oyster House'],
      [39.94246045478315, -75.1545760953931,'Brauhaus Schmitz'], [39.95036962516333, -75.16517191469158,'Chris Jazz Cafe']]

    function create_marker (res_data) {
      for (i = 0; i < res_data.length; i = i + 1) {
        L.marker([res_data[i][0], res_data[i][1]]).addTo(map).bindPopup(res_data[i][2]).openPopup()
      }
    }

    create_marker (restaurantData)

    </script>
  </body>
</html>
