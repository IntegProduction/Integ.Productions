document.getElementById("headerplace").innerHTML = `<div class="header"> 
<div class="headerright"> 
    <button id="homebutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','home.html');">HOME</button> <button id="loginbutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','pictures.html');">PICTURES</button> <button id="createbutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','charity.html');">CHARITY</button> 
    
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="&#128270" title="Type in an item" style="margin-top: 60px; margin-left: -45%; position: absolute; border: 0px;" onmouseover="inputClicked()"></div> 
    
    <div style="text-align: center;">
        <img src="../logo.png" alt="Dummy Image" style="width: 80px; height: 100px; border-radius: 100px;"> <br> 
        
    </div> 
    <div style="font-size: 40px;">
        Integ.Productions
    </div>
     <br>
</div>
</div>`;
