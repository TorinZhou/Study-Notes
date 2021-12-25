# Advanced DOM 4

## Sticky navbar (The Intersection Observer API)

- Bad Way with bug (won't work if resized the viewpord after initial)

  ```javascript
  const initialCoords = section1.getBoundingClientRect().top + window.scrollY;
  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > initialCoords) {
      nav.classList.add("sticky");
    } else nav.classList.remove("sticky");
  });
  ```

- Intersection Observer API

  > The root intersection rectangle can be adjusted further by setting the root margin, rootMargin, when creating the IntersectionObserver. The values in rootMargin define offsets added to each side of the intersection root's bounding box to create the final intersection root bounds (which are disclosed in IntersectionObserverEntry.rootBounds when the callback is executed).

  ```javascript
  const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
    } else nav.classList.remove("sticky");
  };
  const navHeight = nav.getBoundingClientRect().height;
  console.log(navHeight);
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });
  headerObserver.observe(header);
  ```

  ![](img/mingblow1.jfif)

## Revealing Sections (The Intersection Observer API : Advance)

    ```javascript
    const sections = document.querySelectorAll(".section");
    const revealSections = function (entries, observer) {
      const [entry] = entries;
      console.log(entry, observer);
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };
    const sectionObserver = new IntersectionObserver(revealSections, {
      root: null,
      threshold: 0.15,
    });
    sections.forEach((section) => {
      section.classList.add("section--hidden");
      sectionObserver.observe(section);
    });
    ```
