<script>
  /*
    //how we would maybe do this
    //we have a hidden element that when add to cart is clicked becomes visible
    //after x amount of time the element is hidden again
    //make alert stick to position if scrolled NOTE could do something similar for header/menubar to keep sticky

     const addedToCart = document.getElementById("addedToCart") //this syntax will not work with svelte
     sticky = addedToCart.offsetBottom; //we want this do be displayed at the bottom no matter where we scroll on page
     function stickyCartAlert() {
        //changes from a hidden element to displayed element
        addedToCart.style = "display: flex"

        if(window.pageYOffset >= sticky){
            addedToCart.classList.add()
        }
        //after 1.5 second the alert is hidden again
        setTimeout(() => {
            addedToCart.style = "display: none;"
        }, 1500);
    }
    */
</script>

<div
  id="addedToCart"
  class="bg-teal-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed-bottom"
  role="alert"
>
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">Added product to cart.</span>
</div>

<style>
  #addedToCart {
    display: flex; /* if add to cart button is clicked on the product card change to flex */
  }
</style>
