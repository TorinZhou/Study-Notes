# MaptyApp 1:

## [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

- [Using the Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

- [Cached Positions in the Geolocation API](https://softwareas.com/cached-positions-in-the-geolocation-api/)

- Example

  ```javascript
  navigatior.geolocation.getCurrentPosition(fn(success), fn(fail), option);
  ```

  ```javascript
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        const { latitude, longitude } = position.coords;
        console.log(
          `https://www.google.com/maps/@${latitude},${longitude},10z`
        );
      },
      function () {
        alert("No Promission");
      },
      { maximumAge: 60_000, timeout: 0, enableHighAccuracy: true }
    );
  ```

## [Leaflet Library](https://leafletjs.com/)

- MaptyApp Example

  ```html
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""
  />
  <script
    defer
    src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""
  ></script>
  <script defer src="script.js"></script>
  ```

  > The order of 2 script and the defer attribute is major!

- Architecture

  - DATA STORE

    ![](img/Mapty-architecture-part-1.png)

    ![](img/oop17.png)
