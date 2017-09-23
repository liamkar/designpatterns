  class Cat {
    constructor(name, idNumber) {
      this.name = name;
      this.clickCounter = 0;
      this.idNumber = idNumber;
      this.imageFilePrefix = "cat"
    }

    increaseClick() {
      this.clickCounter += 1;
    }

    getClickCount() {
      return this.clickCounter;
    }
  }

  $(document).ready(function() {
    let catCounter = 0;

    let cat1 = new Cat("Juma", 1);
    let cat2 = new Cat("Dana", 2);

    let cats = new Map();
    cats.set("1", cat1);
    cats.set("2", cat2);

    let catName = "catName";
    let catImage = "catImage";

    //populate cat names to page.
    for (var key of cats.keys()) {
      let cat = cats.get(key);
      let catNameUnique = catName + cat.idNumber;
      $("div[name=" + catNameUnique + "]").text(cat.name);
    }

    //increase correct cat click counter when image clicked
    $("[name*='catImage']").click(function(e) {
      let catImageId = e.target.name.slice(catImage.length);
      cat = cats.get(catImageId);
      cat.increaseClick();
      let catClickCount = cat.getClickCount();
      $("#clickCount" + catImageId + "").text(catClickCount);
    });
  });
