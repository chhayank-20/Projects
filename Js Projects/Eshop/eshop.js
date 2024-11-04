

function HeaderComponent(){
    let mainDiv = document.querySelector('#main')
    let header = document.createElement('div');
    header.setAttribute("class","bg-dark p-3 text-white")
    header.setAttribute("style", "display:flex ;align-items:center; justify-content:space-around;")
    // background-color:#9c00ad;

    let logo = document.createElement('div');
    logo.setAttribute("style"," display:flex ; align-items:center; justify-content:center; backgroung-color:red; width:10rem; font-size : 1.6rem;")
    // logo.setAttribute("class","p-2 bg-red border-red")
    logo.innerHTML="<strong class='text-danger'>E-</strong><span class='text-danger'>shop</span>"
    
    let searchBox = document.createElement('div');
    searchBox.setAttribute("style","display:flex; align-items:center; justify-content:center; width: 25rem; ");
    
    let input = document.createElement('input');
    input.setAttribute("style","width:24rem; placeholder:search;")
    input.setAttribute("placeholder","Search product");
    searchBox.appendChild(input);

    let signIn = document.createElement('div');
    signIn.setAttribute("style","align-items:center; justify-content:center;backgroung-color:red; cursor:pointer;");
    signIn.innerText="Sign-up"
    signIn.addEventListener('click',signUpPage)
    
    let logIn = document.createElement('div');
    logIn.setAttribute("style","align-items:center; justify-content:center;backgroung-color:red;");
    logIn.innerText="log-in"

    header.appendChild(logo);
    header.appendChild(searchBox);
    header.appendChild(signIn);
    header.appendChild(logIn);
    mainDiv.appendChild(header);
}


function products() {
    let mainDiv = document.getElementById('main');
    let containerDiv = document.createElement('div');
    containerDiv.setAttribute("style","margin:1vh 15vh;");
    mainDiv.appendChild(containerDiv);
    // containerDiv.innerHTML="<h1>da</h1>"
    let colDiv = document.createElement('div')
    colDiv.setAttribute('class','row');
    containerDiv.setAttribute('id','card-container')
    productContainer(getData(),colDiv)
    containerDiv.appendChild(colDiv);
}

function productContainer(data,colDiv) {
    for(product of data){
        let item = document.createElement('div');
        item.setAttribute('style','width: 15rem; display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0.5rem;padding:0.5rem; box-shadow: 10px 10px 10px grey; ')
        // background-color:#f9d3e8;
        let imgDiv = document.createElement('img');
        imgDiv.setAttribute("style","width:70%; height:80%; ")
        imgDiv.setAttribute("src",product.thumbnail);
        item.appendChild(imgDiv);
        let h5 = document.createElement('h6');
        h5.setAttribute("style","display:flex; justify-content:center; align-items:center;");
        h5.innerText=product.title;
        item.appendChild(h5);
        
        let price = document.createElement("p");
        price.innerHTML = `<strong ' style="color:#28a745;">${product.price} Rs.</strong>`
        // price.setAttribute
        item.appendChild(price);
    
        let viewMore = document.createElement("button");
        viewMore.innerText = "View more";
        viewMore.setAttribute("style","width:100%; background-color:#ffc107; border:#ffc107;");

        viewMore.addEventListener("click",function(){
            ViewMoreComponent(product);
          });
        item.appendChild(viewMore);
        
        colDiv.appendChild(item);        
    }
}


// view more tab

function ViewMoreComponent(product){
    let mainDiv = document.querySelector("#main");
    let cardContainer = document.querySelector("#card-container");
    mainDiv.removeChild(cardContainer);
    
    let productDetailContainer = document.createElement("div");
    productDetailContainer.setAttribute("class","container mt-5");
    
    let row = document.createElement("div");
    row.setAttribute("class","row");

    let firstCol = document.createElement('div');
    firstCol.setAttribute("class","col-md-6 d-flex flex-column");
    firstCol.setAttribute('style',"height:500px; box-shadow: 10px 10px 10px grey;");

    let productImage = document.createElement("img");
    productImage.src = product.thumbnail;
    productImage.setAttribute("style","width:100%; height:400px");
    firstCol.appendChild(productImage);

    let smallImages = document.createElement("div");
    smallImages.setAttribute("class","d-flex flex-row justify-content-around align-items-center");
    smallImages.setAttribute("style","height: 100px;");
    for(let image of product.images){
      let imgObj = document.createElement("img");
      imgObj.setAttribute("style","width:30%; height:80px;");
      imgObj.setAttribute("src",image);
      smallImages.appendChild(imgObj);
    }
    firstCol.appendChild(smallImages);
    row.appendChild(firstCol);
 
    let secondCol = document.createElement('div');
    secondCol.setAttribute("class","col-md-6 d-flex flex-column p-3 justify-content-around");
    secondCol.setAttribute('style',"height:500px; box-shadow: 10px 10px 10px grey");

    let productHeader = document.createElement("div");
    productHeader.setAttribute("class","d-flex justify-content-between p-1");

    let titleLabel = document.createElement("label");
    titleLabel.innerHTML = `<strong style='font-size:20px;'>${product.title} [${product.brand}]</strong>`
    productHeader.appendChild(titleLabel);
    
    let priceLabel = document.createElement("label");
    priceLabel.innerHTML = `<del class='text-danger' style='font-size: 25px;'>${product.price} Rs.</del>`
    productHeader.appendChild(priceLabel);
    secondCol.appendChild(productHeader);
    
    let productDescription = document.createElement("p");
    productDescription.innerHTML = product.description;
    secondCol.appendChild(productDescription);
    
    let warrantyInfo = document.createElement("p");
    warrantyInfo.innerHTML = `<strong>Warranty Info : </strong>${product.warrantyInformation}`;
    secondCol.appendChild(warrantyInfo);

    let shippingInfo = document.createElement("p");
    shippingInfo.innerHTML = `<strong>Shipping Info : </strong>${product.shippingInformation}`;
    secondCol.appendChild(shippingInfo);
    
    let returnPolicy = document.createElement("p");
    returnPolicy.innerHTML = `<strong>Return policy : </strong>${product.returnPolicy}`;
    secondCol.appendChild(returnPolicy);
    
    let discountPercentage = document.createElement("p");
    discountPercentage.innerHTML = `<strong>After discount : </strong><label class='text-success' style='font-size: 20px; font-weight: bold;'>${(product.price-((product.price*product.discountPercentage)/100)).toFixed(2)} Rs.</label> <label> ${product.discountPercentage} % off</label>`;
    secondCol.appendChild(discountPercentage);
    
    let rating = document.createElement("p");
    rating.innerHTML = `<strong>Rating : </strong>${product.rating}`;
    secondCol.appendChild(rating);
    
    let buyNow = document.createElement("button");
    buyNow.setAttribute("class","btn btn-warning");
    buyNow.innerHTML = "Buy Now";
    buyNow.setAttribute("style","width:100%; height: 40px;");
    secondCol.appendChild(buyNow);
    row.appendChild(secondCol);

    productDetailContainer.appendChild(row);
    mainDiv.appendChild(productDetailContainer);
    
    let reviewContainer = document.createElement("div");
    reviewContainer.setAttribute("class","container mt-2");
    reviewContainer.setAttribute("style","padding:0;");
    for(let reviewObj of product.reviews){
      let reviewHeader = document.createElement("div"); 
      reviewHeader.setAttribute("class","bg-dark text-white d-flex justify-content-between align-items-center p-2 mt-2");
      reviewHeader.setAttribute("style","height:60px;")
      let reviewerInfo = document.createElement("label");
      reviewerInfo.innerHTML = `<strong>${reviewObj.reviewerName} </strong> [${reviewObj.reviewerEmail}]`;
      reviewHeader.appendChild(reviewerInfo);
      let revieweTime = document.createElement("label");
      revieweTime.innerHTML = `<strong>${reviewObj.date} </strong>`;
      reviewHeader.appendChild(revieweTime);
      reviewContainer.appendChild(reviewHeader);
      let comment = document.createElement("p");
      comment.innerHTML = reviewObj.comment;
      reviewContainer.appendChild(comment);  
    }
    mainDiv.appendChild(reviewContainer);    
}


// log-in 
function signUpPage(){
    let mainDiv = document.querySelector("#main");
    let cardContainer = document.querySelector("#card-container");
    mainDiv.removeChild(cardContainer);

    
    const rightDiv= document.createElement('form');
    rightDiv.setAttribute('style',' height:90%; width:45%; margin:3% 25%; ');
    
    const h1 =document.createElement('h2');
    h1.innerText='Sign Up ';
    h1.setAttribute('style','padding:5px; margin:2%; margin-left:25%; width:45%;');
    

    const name = document.createElement('input');
    name.setAttribute('style','border: 2px solid black;  padding:7px; margin:1%; margin-left:25%; width:45%; border-radius:0.75rem; ');
    name.placeholder='Username';
    name.id='username';
    const usernameError = document.createElement('small');
    usernameError.id='usernameError';
    usernameError.setAttribute('style','color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    name.addEventListener('keyup',validateUsername);
    
    
    const email = document.createElement('input');
    email.setAttribute('style','border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%; border-radius:0.75rem;');
    email.placeholder='Email';
    email.id='email';
    email.addEventListener('keyup',validateEmail);
    const emailError = document.createElement('small');
    emailError.id='emailError';
    emailError.setAttribute('style','color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    
    const number = document.createElement('input');
    number.setAttribute('style','border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    number.placeholder="Phone no.";
    number.id='contact';
    number.addEventListener('keyup',validateContact);
    const contactError = document.createElement('small');
    contactError.id='contactError';
    contactError.setAttribute('style','color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    
    const address = document.createElement('input');
    address.setAttribute('style','border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    address.placeholder='Address';
    address.id='address';
    address.addEventListener('keyup',validateAddress);
    const addressError = document.createElement('small');
    addressError.id='addressError';
    addressError.setAttribute('style','color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    
    
    const pin = document.createElement('input');
    pin.setAttribute('style','border: 2px solid black; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    pin.placeholder='pin-code';
    pin.id='pincode';
    pin.addEventListener('keyup',validatePincode);
    const pincodeError = document.createElement('small');
    pincodeError.id='pincodeError';
    pincodeError.setAttribute('style','color:red; padding:7px; margin:1%; margin-left:25%; width:45%;border-radius:0.75rem;');
    
    const submitBtn = document.createElement('input');
    submitBtn.type="submit";
    submitBtn.setAttribute('style','background:#fb6c79; margin-left:40%; margin-top:5%; padding:5px 14px; border-radius:0.41rem; ');
    rightDiv.addEventListener('submit', (event) => {
        let contactStaus = validateContact();
        let addressStatus = validateAddress();
        let pincodeStatus = validatePincode();
        let usernameStatus = validateUsername();
        let emailStatus = validateEmail();
        //   alert(1);
        if ( contactStaus && addressStatus && pincodeStatus && usernameStatus &&emailStatus)
            return true;
        event.preventDefault(); 
      return false;
    });

    // submitBtn.addEventListener('click', validateContact);
    
    rightDiv.appendChild(h1);
    rightDiv.appendChild(name);
    rightDiv.appendChild(usernameError);
    rightDiv.appendChild(email);
    rightDiv.appendChild(emailError);
    rightDiv.appendChild(number);
    rightDiv.appendChild(contactError);
    rightDiv.appendChild(address);
    rightDiv.appendChild(addressError);
    rightDiv.appendChild(pin);
    rightDiv.appendChild(pincodeError);
    rightDiv.appendChild(submitBtn);

    mainDiv.appendChild(rightDiv);

    function validateContact() {
      let status = true;
      // alert(1);
      let contact = document.getElementById("contact").value;
      let contactError = document.getElementById("contactError");
      if (contact.length == 0) {
          status = false;
          contactError.innerText = "Contact number is required";
      }
      else if (isNaN(contact)) {
          status = false;
          contactError.innerText = "Only digits are allowed";
      }
      else if (contact.length != 10) {
          status = false;
          contactError.innerText = "Contact number must have 10 digits";
      }
      else
          contactError.innerText = "";
      return status;
  }
  function togglePassword(currentObj) {
      let password = document.getElementById("password");
      if (currentObj.innerText == "Show") {
          password.type = "text"
          currentObj.innerText = "Hide";
      }
      else if (currentObj.innerText == "Hide") {
          password.type = "password";
          currentObj.innerText = "Show"
      }
  }
  function validatePassword() {
      let status = true;
      let password = document.getElementById("password").value;
      let passwordError = document.getElementById("passwordError");
      if (password.length == 0) {
          status = false;
          passwordError.innerText = "Password is required";
      }
      else if (password.length < 6 || password.length > 10) {
          status = false;
          passwordError.innerText = "Password length must be between 6 to 10";
      }
      else
          passwordError.innerText = "";
      return status;
  }
  function validateUsername() {
      let status = true;
      let username = document.getElementById("username").value;
      let usernameError = document.getElementById("usernameError");
      if (username.length == 0) {
          status = false;
          usernameError.innerText = "username is required.";
      }
      else
          usernameError.innerText = "";
      return status;
  }
  function validateEmail() {
    let status = true;
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (email.length == 0) {
        status = false;
        emailError.innerText = "Email is required.";
    }
    else
        emailError.innerText = "";
    return status;
}
  function validateAddress() {
    let status = true;
    let address = document.getElementById("address").value;
    let addressError = document.getElementById("addressError");
    if (address.length == 0) {
        status = false;
        addressError.innerText = "Address is required.";
    }
    else
        addressError.innerText = "";
    return status;
}
function validatePincode() {
    let status = true;
    let pincode = document.getElementById("pincode").value;
    let pincodeError = document.getElementById("pincodeError");
    if (pincode.length == 0) {
        status = false;
        pincodeError.innerText = "Pincode is required.";
    }
    else
        pincodeError.innerText = "";
    return status;
}
function validateData() {
      let usernameStatus = validateUsername();
      let passwordStatus = validatePassword();
      let contactStaus = validateContact();
      let captchaStatus = validateCaptcha();
      alert(1)
      if (usernameStatus && contactStaus)
          return true;
      return false;
  }

}

//  fetching data
function getData(){
    let productList = localStorage.getItem("productList");
    productList = JSON.parse(productList);
    return productList;
}


