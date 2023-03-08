document.getElementById("footerplace").innerHTML = '<div id="footerback"><div id="footerlogo"><div>Integ.Productions</div><div><button type="button" id="about" class="footerbutton" onclick="about()">About Us</button><button type="button" id="review" class="footerbutton" onclick="review()">Contact Us</button><button type="button" id="follow" class="footerbutton" onclick="follow()">Follow Us</button></div></div><div id="footercontent"></div><div id="footerbaseline">Copyright &copy; 2023 Integniklyde Inc. All Rights Reserved</div></div>';

function about() {
    document.getElementById("footercontent").innerHTML = "<div class='footercontent' style='animation-name: goUp; animation-duration: 1.5s;'><p>About Our Company:</p><p>Integ.Productions from the company of Integniklyde Inc. is a production company that sells different eco-friendly goods and items serving a way to give people both entertainment and functionality of such items. This production was made possible by the people in Integrity due to a performance task in Social Studies made by Ma'am Khally Patalud.</p><p><a href='privacypolicy.html'>Privacy Policy</a> <a href='termsandconditions.html'>Terms and Conditions</a></p></div>";
}
function review() {
    document.getElementById("footercontent").innerHTML = "<div class='footercontent' style='animation-name: goUp; animation-duration: 1.5s;'><p>Company Contact: 2053 3584</p></div>";
}
function follow() {
    document.getElementById("footercontent").innerHTML = '<div class="footercontent" style="animation-name: goUp; animation-duration: 1.5s;"><a href="https://www.instagram.com/integ.productions/" class="fa fa-instagram"></a><a href="mailto:integprods@gmail.com?subject=Mail to the Site" class="fa fa-google"></a>'
}