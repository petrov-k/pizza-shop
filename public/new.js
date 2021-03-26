

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

        update_orders_input();
        update_orders_button();
        // for(var i=0, len=localStorage.length; i<len; i++) {
        //         var key = localStorage.key(i);
        //         var value = localStorage[key];
        //         console.log(key + " => " + value);
        // }

}
function count_cart(){
        var cnt = 0;
        for(var i=0; i<window.localStorage.length; i++) {
             var key = window.localStorage.key(i);
             var value = window.localStorage.getItem(key);   
             if(key.indexOf('product_') == 0){
                cnt += value*1;
             }
        }
        return cnt;
}
function cart_get_orders(){
        var orders = '';
        for(var i=0; i<window.localStorage.length; i++) {
             var key = window.localStorage.key(i);
             var value = window.localStorage.getItem(key);   
             
             if(key.indexOf('product_') == 0){
                orders += 'pizza'+(i+1)+ '=' + value + ', ';
             }
        }
        return orders;
}

function update_orders_input(){
        var orders = cart_get_orders();
        $('#orders_input').val(orders);
}
function update_orders_button(){
        var text = 'Cart (' + count_cart() + ')';
        $('#orders_button').val(text);
}

function table_orders(z){
        var orders = '';
        var key = window.localStorage.key(z);
        var value = window.localStorage.getItem(key);                          
        orders += value;
        $('#pizza'+(z+1)+'_amount').val(orders);             
}
function update_order_input(){
        var orders = cart_get_orders();
        $('#products_order_input').val(orders);
}



