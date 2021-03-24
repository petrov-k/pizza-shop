

function something(){
        var x = window.localStorage.getItem('bbb');
                    
        x = x * 1 + 1;
        window.localStorage.setItem('bbb', x);
        
        alert(x);        
}

function reset(){
        window.localStorage.removeItem('aaa');
        window.localStorage.removeItem('bbb');
}

function more() {
        alert('more bl**t');
}
function add_to_cart(){
        alert('You added pizza to the cart successfully');
}