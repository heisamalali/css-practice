import '../../public/styles/cssAnimations/transition-options.css'

document.querySelector("#transitionOptions").innerHTML =`
    <div class="container">
        <div id="ease" class="move">Ease (Default)</div>
        <div id="linear" class="move">Linear</div>
        <div id="ease-in" class="move">Ease-In</div>
        <div id="ease-out" class="move">Ease-Out</div>
        <div id="ease-in-out" class="move">Ease-In-Out</div>
    </div>

`