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

  - Code 1

    ```javascript
    class App {
      #map;
      #mapEvent;
      constructor() {
        this.#getPosition();
        form.addEventListener("submit", this.#newWorkot.bind(this));
        inputType.addEventListener("change", this.#toggleElevationField);
      }
      #getPosition() {
        console.log(this);
        if (navigator.geolocation)
          navigator.geolocation.getCurrentPosition(
            this.#loadMap.bind(this),
            function () {
              alert("No Promission");
            }
            // { maximumAge: 60_000, timeout: 0, enableHighAccuracy: true }
          );
      }
      #loadMap(position) {
        console.log(position);
        const { latitude, longitude } = position.coords;
        const coords = [latitude, longitude];
        console.log(this);
        this.#map = L.map("map").setView(coords, 13);
        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);
        this.#map.on("click", this.#showForm.bind(this));
      }
      #showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
      }
      #toggleElevationField() {
        inputElevation
          .closest(".form__row")
          .classList.toggle("form__row--hidden");
        inputCadence
          .closest(".form__row")
          .classList.toggle("form__row--hidden");
      }
      #newWorkot(e) {
        e.preventDefault();
        const { lat, lng } = this.#mapEvent.latlng;
        const marker = L.marker([lat, lng], {
          opacity: 0.99,
          riseOnHover: true,
          draggable: true,
        });
        marker
          .addTo(this.#map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: "running-popup",
            })
          )
          .setPopupContent("WorkOut")
          .openPopup();
        this.#clearText();
        this.#hideForm();
      }
      #clearText = function () {
        inputDistance.value = "";
        inputCadence.value = "";
        inputDuration.value = "";
        inputElevation.value = "";
      };
      #hideForm = function () {
        form.classList.add("hidden");
      };
    }
    const app = new App();
    ```
