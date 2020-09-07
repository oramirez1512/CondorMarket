function removeAproduct(cartDetailId)
{
    let bodyreq=
    {
        cartId:cartDetailId
    }
    fetch('http://localhost:3000/api/ormarket/shoppingcart/remove/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(bodyreq)
    })
            .then(res => res.json())
            .then((res) => {
                 if(res){
                     this.setState({message: 'ok'})
                 }
            })
            .catch(console.log) 
}

function addToCart(productId)
{
    let bodyreq=
    {
        prodId:productId["productid"],
        cartId:"4",
        quantity:"1",
        cartDetId:"0",
        userId:"1"
    }
    fetch('http://localhost:3000/api/ormarket/shoppingcart/add/',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(bodyreq)
    })
            .then(res => res.json())
            .then((res) => {
                 if(res){
                     this.setState({message: 'ok'})
                 }
            })
            .catch(console.log) 
};
module.exports={addToCart,removeAproduct}