(function() {
  function escapeRegex(str) {
    // credit to https://github.com/lodash/lodash/blob/4.1.2-npm-packages/lodash.escaperegexp/index.js#L159
    return str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  }

  // Summaries extracted by LexRank
  var lexRankSummaries = [
    "(b) The State Department of Public Health shall develop an affidavit attesting to an applicant’s status as a homeless person or homeless child or youth.",
    "(a) Except as otherwise provided in subdivisions (b), (c), and (d) of this section, subdivision (c) of Section 13002, and subdivision (c) of Section 14900, upon an application for an identification card a fee of twenty dollars ($20), and on and after January 1, 2010, a fee of twenty-six dollars ($26), shall be paid to the department."
  ];

  var highlightConfigs = [
    {
      regex: new RegExp(
        "(" + lexRankSummaries.map(escapeRegex).join("|") + ")",
        "g"
      ),
      classname: "text-summarization-summary",
      checkboxId: "highlight-summary"
    },
    {
      regex: /(homeless)/gi,
      classname: "text-summarization-term-1",
      checkboxId: "highlight-term-1"
    },
    {
      regex: /(identification card)/gi,
      classname: "text-summarization-term-2",
      checkboxId: "highlight-term-2"
    }
  ];

  var highlightClassname = "text-summarization-highlight";
  var billText = document.getElementById("bill-text");

  highlightConfigs.forEach(function(config) {
    // Add the highlight <span> tags around each highlightable area
    billText.innerHTML = billText.innerHTML.replace(
      config.regex,
      '<span class="' + config.classname + '">$1</span>'
    );
    // Add change listeners to checkboxes that toggle highlighted state
    document
      .getElementById(config.checkboxId)
      .addEventListener("change", function(event) {
        var elements = billText.querySelectorAll("." + config.classname);
        // `elements` doesn't have `forEach` in IE11, so do this instead
        [].forEach.call(elements, function(element) {
          if (event.target.checked) {
            element.classList.add(highlightClassname);
          } else {
            element.classList.remove(highlightClassname);
          }
        });
      });
  });
})();
