$(document).ready(function () {

  var modal = document.getElementById('myModal');
  var configURL = "config.json"

  fetch(configURL)
    .then(function (response) { return response.json(); })
    .then(function (data) {

      // Set page title.
      document.title = data["title"]

      var jumboTemplate = $("#jumbo-hb").html()
      var jumboTemplateScript = Handlebars.compile(jumboTemplate)
      jumboHtml = jumboTemplateScript(data)
      $("#jumbo-div").append(jumboHtml)

      $("#jumbo").css("background", data["primary-background"])
      $("body").css("background", data["secondary-background"])

      // Footer
      var footerTemplate = $("#footer-hb").html()
      var footerTemplateScript = Handlebars.compile(footerTemplate)
      footerHtml = footerTemplateScript(data)
      $("#footer").append(footerHtml)

      // Build the body with catalog data.
      buildCatalog(data)
    });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
})

function buildCatalog(data) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Iterate through the catalog and create entries for all the items per
  // category.
  catalog = data["catalog"]
  for (var catIndex = 0; catIndex < catalog.length; catIndex++) {
    category = catalog[catIndex]
    catDataURL = category['dataURL']

    // Fetch category data.
    fetch(catDataURL)
      .then(function (response) { return response.json(); })
      .then(function (categoryData) {
        var categoryTemplate = $("#list-category-hb").html()
        var categoryTemplateScript = Handlebars.compile(categoryTemplate, { noEscape: true })
        categoryHtml = categoryTemplateScript(categoryData)
        $("#listing").append(categoryHtml)
      })
      .then(function () {
        // Add click event on all the images for preview.
        var imgs = $(".card-img-top")
        imgs.each(function () {
          $(this).click(function () {
            modal.style.display = "block"
            modalImg.src = this.src
            captionText.innerHTML = this.alt
          })
        })
      });
  }
}
