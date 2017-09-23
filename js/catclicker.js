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
    let cats = new Map();

    function createCats(catNames) {
      for (let i = 0; i < catNames.length; i++) {
          let id = i+1;
          let cat = new Cat(catNames[i], id);
          cats.set(""+id,cat);
      }
    }

    let catNames = ["Juma", "Dana", "Rontti", "Pekka", "Blakkis"];
    createCats(catNames);


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
