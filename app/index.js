var IndexPage = {
  show: function () {
    var result = document.createElement("span");
    result.innerHTML = "INDEX SHOW";
    document.querySelector("body").appendChild(result);
  }
};

module.exports = IndexPage;
