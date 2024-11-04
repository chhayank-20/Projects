
function getData() {
    const eventsList = localStorage.getItem("events");
    if (eventsList) {
      return JSON.parse(eventsList);
    } else {
      // Handle the case when there's no data or invalid data
      console.error("No events data found in local storage");
      return []; // Or return a default value
    }
  }


function headerComponent(){
    const mainDiv = document.querySelector('#main');
    mainDiv.setAttribute('style',' padding:1rem; border: 2px solid black;')

    const nav = document.querySelector('#nav');
    nav.setAttribute('style',' padding:1rem; border: 2px solid red;')
}


function navBar(){

    const navbar = document.createElement('nav');
    navbar.setAttribute('style','margin:0; padding:1rem; align-items:center; justify-content:center; display:flex;')

    // Create the Eventbrite logo
    const navLogo = document.createElement('a');
    navLogo.setAttribute('style','color:red; font-weight:bold; font-size:1.5rem; margin-left:0rem; margin-right:3rem;');
    navLogo.textContent = 'EventHub';
    navbar.appendChild(navLogo);


    // Create the search bar
    const searchBar = document.createElement('div');
    searchBar.style.display = 'flex';
    searchBar.style.alignItems = 'center';

    // search icon
    // const searchIcon = document.createElement('i');
    // searchIcon.classList.add('fa', 'fa-search');
    // searchIcon.style.marginRight = '5px';
    // searchIcon.setAttribute('style','border:2px solid red;')
    // searchBar.appendChild(searchIcon);

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search events';
    searchInput.setAttribute('style','display:flex; align-items:center; margin:0; padding:0.75rem; box-shadow: 5px 5px 20px red; border-top-left-radius: 1rem; border-bottom-left-radius: 1rem  ;');
    searchBar.appendChild(searchInput);

    navbar.appendChild(searchBar);  



    // Create a select element
    const locationDropdown = document.createElement('select');
    locationDropdown.id = 'mySelect';
    locationDropdown.setAttribute('style','display:flex; align-items:center; margin:0; padding:0.75rem; box-shadow: 5px 5px 20px red; border-top-right-radius: 1rem; border-bottom-right-radius: 1rem  ;')

    const options = [' Select City ', ' Pune ', ' Indore ', ' Hydrabad ', 'Bengalore '];
    for(op of options){
      const option = document.createElement('option');
      option.value=op;
      option.textContent = op;
      locationDropdown.appendChild(option);
    }

    navbar.appendChild(locationDropdown);

    const svgSearch = document.createElement('span');
    svgSearch.setAttribute('id','svg1');
        const svgContent1=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>`;
    svgSearch.innerHTML = svgContent1; 
    svgSearch.setAttribute('style','background-color:white; padding:0.5rem; margin:5px; border-radius:50%;');
        navbar.appendChild(svgSearch);

    // navigation links
    const navLinks = document.createElement('ul');
    navLinks.style.listStyleType = 'none';
    navLinks.style.margin = '0';
    navLinks.style.padding = '0';
    navLinks.style.display = 'flex';

    const navItems = ['Find Events', 'Create Events', 'My Tickets', 'Log In', 'Sign Up'];
    navItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#'; 
      a.textContent = item;
      a.style.color='red';
      a.style.textDecoration='none';
      a.style.fontFamily='cursive';
      a.style.fontWeight='900';
    a.id=item;
      li.appendChild(a);
      li.setAttribute('style','padding:1rem; ')
      navLinks.appendChild(li);
    });
    navbar.appendChild(navLinks);
    document.body.appendChild(navbar);

    const findEvents = document.getElementById('Find Events');
    // findEvents.style.color='red';

    const createEvents = document.getElementById('Create Events');
    // createEvents.style.color='red';

    const findMyTickets = document.getElementById('Find My Tickets');
    // findMyTickets.style.color='red';

    const logIn = document.getElementById('Log In');
    // logIn.style.color='red';

    const signUp = document.getElementById('Sign Up');
    // signUp.style.color='red';

}


function slidesDiv() {
    const mainDiv = document.querySelector('#main');
    const slidesDiv = document.createElement('div');
    slidesDiv.classList.add('slides-container'); // Add a class for styling
  
    // Create image elements directly, not with innerHTML
    const image1 = document.createElement('img');
    image1.src = 'slide1.jpg';
    image1.alt = 'Slide 1';
    image1.style.width = '100%';
    image1.style.height = '400px'; 
    image1.classList.add('slide-image'); // Add a class for styling
  
    const image2 = document.createElement('img');
    image2.src = 'slide2.jpg';
    image2.alt = 'Slide 2';
    image2.style.width = '100%';
    image2.style.height = '400px';
    image2.classList.add('slide-image');
  
    const image3 = document.createElement('img');
    image3.src = 'slide3.jpg';
    image3.alt = 'Slide 3';
    image3.style.width = '100%';
    image3.style.height = '400px';
    image3.classList.add('slide-image');
  
    // Append images directly to slidesDiv
    slidesDiv.appendChild(image1);
    slidesDiv.appendChild(image2);
    slidesDiv.appendChild(image3);
  
    // Style the container and images (adjust as needed)
    slidesDiv.style.display = 'flex';
    slidesDiv.style.flexDirection = 'column';
    // slidesDiv.style.height='100vh';
    // slidesDiv.style.width='100vh';
    // const slideImages = document.querySelectorAll('.slide-image');
    // slideImages.forEach(image => {
    //   image.style.width = '100px';
    //   image.style.height = '100px';
    // //   image.style.objectFit = 'cover'; // Ensure images fit container
    // });
  
    let currentImageIndex = 0;
  
    function showNextImage() {
      const images = slidesDiv.querySelectorAll('.slide-image');
      images.forEach(image => image.style.display = 'none'); // Hide all images
      images[currentImageIndex].style.display = 'block'; // Show current image
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    setInterval(showNextImage, 2500);
  
    mainDiv.appendChild(slidesDiv);
  }

function eventsDiv(){
    eventCard(getData());
}


function eventCard(eventsList){
      const eventsDiv = document.createElement('div');
      eventsDiv.setAttribute('style','margin:1rem; padding:1rem; display:flex; flex-wrap:wrap;');

    for(anEvent of eventsList){
  
      const card = document.createElement('div');
      card.setAttribute('style','margin:1rem; padding:1rem; box-shadow: 10px 10px 10px grey; width:26%;');
  
      const cardImage = document.createElement('div');
      const image = document.createElement('img');
      image.src = anEvent.image; 
      image.alt = 'Card Image';
      image.style.width = '90%';
      image.style.height = '60%';
      image.style.objectFit = 'cover';
      cardImage.appendChild(image);
  
      // Create the card content container
      const cardContent = document.createElement('div');
      const title = document.createElement('h2');
      title.textContent = anEvent.title;
      cardContent.appendChild(title);
  
      const description = document.createElement('p');
      description.textContent = anEvent.description;
      cardContent.appendChild(description);

      const date = document.createElement('p');
      date.textContent = anEvent.date;
      cardContent.appendChild(date);

      const time = document.createElement('p');
      time.textContent = anEvent.time;
      cardContent.appendChild(time);

      const location = document.createElement('p');
      location.textContent = anEvent.location;
      cardContent.appendChild(location);
  
      // Create the card footer container
      const cardFooter = document.createElement('div');
      cardFooter.textContent = 'Card Footer';
  
      // Append the image, content, and footer to the card
      card.appendChild(cardImage);
      card.appendChild(cardContent);
    //   card.appendChild(cardFooter);
  
      const mainDiv = document.querySelector('#main');
      eventsDiv.appendChild(card);
      mainDiv.appendChild(eventsDiv);
    }
}


function logIn(){
    // alert(8);
    const logIn = document.createElement('div');
    logIn.setAttribute('style','box-shadow: 1px 1px 20px red; border-radius:1rem; background:#f2f2f2; position: fixed; width:70%; height:70%; margin:2% 15%; display:flex; ');
    const body = document.querySelector('#body');
    // document.body.appendChild(logIn);
    body.appendChild(logIn);

    const leftDiv= document.createElement('div');    
    leftDiv.setAttribute('style','height:90%; width:45%;  margin:2%;');
    logIn.appendChild(leftDiv);
    leftDiv.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509711!2d144.95373531531943!3d-37.81627997975142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sYour%20Location%20Name!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

    const rightDiv= document.createElement('form');
    rightDiv.setAttribute('style','background:#ffd6d6; height:90%; width:45%; margin:2%; ');
    
    const h1 =document.createElement('h2');
    h1.innerText='Sign-Up';
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
    submitBtn.setAttribute('style','background:rgb(255,2,2,0.3); margin-left:40%; margin-top:5%; padding:5px 14px; border-radius:0.41rem; ');
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

    logIn.appendChild(rightDiv);

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






