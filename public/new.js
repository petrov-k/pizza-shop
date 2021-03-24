

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
function add_to_cart(id){
        var key = 'product_'+id;
        var x = window.localStorage.getItem(key);
        x = x * 1 + 1;
        window.localStorage.setItem(key, x);

        for(var i=0, len=localStorage.length; i<len; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
                console.log(key + " => " + value);
        }

}
function count_cart(){
        for(var i=0, len=localStorage.length; i<len; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
                console.log(key + " => " + value);
        }
}

