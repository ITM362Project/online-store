let path = window.location.pathname;
if(!path.endsWith('/')) { path += '/'; }


let final_form = document.getElementById("final_form");
if(final_form) {
    final_form.onsubmit = e => {
        e.preventDefault();
        alert("Success!");
    }
}

let inputs = document.getElementsByTagName("input");


for(let i=0; i<inputs.length; i++) {
    inputs[i].onchange = function() {
        
        let inp = inputs[i];
        if(inp.value === "") {
            inp.classList.remove("input-filled");
        } else {
            if(!inp.classList.contains("input-filled")) {
                inp.classList.add("input-filled");
            }
        }
    }
}


