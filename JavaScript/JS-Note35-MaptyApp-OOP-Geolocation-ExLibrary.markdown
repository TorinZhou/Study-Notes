# MaptyApp 1:

## [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

- [Using the Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

- [Cached Positions in the Geolocation API](https://softwareas.com/cached-positions-in-the-geolocation-api/)

- Example

  ```javascript
  navigatior.geolocation.getCurrentPosition(fn(), fn(), option);
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
