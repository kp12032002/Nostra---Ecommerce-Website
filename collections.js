// Selecting sideNav, menuIcon

let sideNav = document.getElementById("sideNav")
let menuIcon = document.getElementById("menuIcon")
let closeNav = document.getElementById("closeNav")

menuIcon.addEventListener("click", function(){
    sideNav.style.right = 0
})

closeNav.addEventListener("click", function(){
    sideNav.style.right = "-50%"
})

// Product Search Functionality

let productContainer = document.getElementById("productContainer")
let search = document.getElementById("search")
let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    let enteredValue = event.target.value.toUpperCase()

    for(count = 0; count<productList.length; count = count+1)
    {
        var productName = productList[count].querySelector("h5").textContent

        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productList[count].style.display="none"
        } else {
            productList[count].style.display="block"
        }
    }
})
