var headerText = 
`<div id="name">
    <a href="/index.html">
        <div id="nametxt">GRAND THEFT KOROVAN</div>
    </a>
</div>
<nav>
    <a href="/index.html">Главная</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/leaderboard.html">Лидеры набигания</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/about.html">О Корованах</a>
</nav>`;

var footerText = 
`<p> Grand Theft Korovan 2022&nbsp;&nbsp; &copy; &nbsp;&nbsp;All rights stealed </p>`;

function setHeader() {
  var header = document.createElement("header");
  header.innerHTML = headerText;
  document.body.insertAdjacentElement('afterbegin', header);
}

function setFooter() {
    var footer = document.createElement("footer");
    footer.innerHTML = footerText;
    document.body.insertAdjacentElement('beforeend', footer);
}

setHeader();
setFooter();