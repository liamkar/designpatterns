  class Cat {
    constructor(name, idNumber) {
      this.name = name;
      this.clickCount = 0;
      this.idNumber = idNumber;
      this.imageFilePrefix = "cat"
    }

    increaseClick() {
      this.clickCount += 1;
    }

    getClickCount() {
      return this.clickCount;
    }
  }

  $(document).ready(function() {

    let cats = new Map();

    //create cat objects by giving the cat names as array lists-
    function createCats(catNames) {
      for (let i = 0; i < catNames.length; i++) {
          let id = i+1;
          let cat = new Cat(catNames[i], id);
          cats.set(""+id,cat);
      }
    }

    let catNames = ["Juma", "Dana", "Rontti", "Pekka", "Blakkis"];
    createCats(catNames);

    const catName = "catName";
    const catImage = "catImage";

    //create HTML list of cats
    function createCatList(cats) {
      let catListHTML = "<UL>";
      for (var key of cats.keys()) {
        let cat = cats.get(key);
        let catNameUnique = catName + cat.idNumber;
        catListHTML += `<LI name="${catNameUnique}"> ${cat.name} </LI>`;
      }
      return catListHTML+"</UL>";
    }

    let catListHTML = createCatList(cats);
    $("#catList").append(catListHTML);

    //create HTML presentation for one selected cat.
    function createCatPresentation(catId) {
      let cat = cats.get(catId);

      $("#catPresentation").empty();
      let catFileId = "cat"+cat.idNumber;
      let catImageId = "catImage"+cat.idNumber;

      let catPresentationHTML = "";
        catPresentationHTML+=`<DIV>${cat.name}</DIV>`;
        catPresentationHTML+=`<IMG name="${catImageId}" SRC="images/${catFileId}.jpg"/>`;
        catPresentationHTML+=`<p> Number of times image has been clicked:<b ID="clickCount${cat.idNumber}">${cat.clickCount}</b></p>`;
        $("#catPresentation").append(catPresentationHTML);
    }

    //clicking cat name in the list opens cat presentation.
    $("[name*='catName']").click(function(e) {
      let catId = e.target.getAttribute("name").slice(catName.length);
      createCatPresentation(catId);
    });

    //clicking image of cat presentation will increase image click count.
    $( "#catPresentation" ).on( "click", "img", function(e) {
      let catImageId = e.target.name.slice(catImage.length);
      cat = cats.get(catImageId);
      cat.increaseClick();
      let catClickCount = cat.getClickCount();
      $("#clickCount" + catImageId + "").text(catClickCount);
    });

  });
