
// declaration tableau des images (url from freepik website)
var images = [
    "https://img.freepik.com/free-photo/beautiful-scenery-green-landscape-mountains-enveloped-fog_181624-9636.jpg?w=1060&t=st=1682108552~exp=1682109152~hmac=d87cbd635be62172ea4438cf0565027eca30915a74d80b2f3c9d672c75766aa3",
    "https://img.freepik.com/free-photo/ortakoy-mosque-viewed-from-bosphorus-riveristanbul-turkey_628469-169.jpg?w=1060&t=st=1682108612~exp=1682109212~hmac=de397772cfbe95ff1fcf56bacfca2994cf6e5c48b12a8e3defffecea6d28f98a",
    "https://img.freepik.com/free-photo/long-shot-multi-colored-hot-air-balloons-floating-mountains_181624-5586.jpg?w=1060&t=st=1682108675~exp=1682109275~hmac=ce5fe2310175c9136dca4e9c17851f5557239f09ef4db4d7ccf0d05ad9253e9e",
  ];

  // declaration de variable index qui increment quand onclick sur next et decrement quand onclick sur previous et on initiale a -1
  // Pourquoi -1 => le premier index du tableau est 0, donc on met -1 => onclick next => index ++ => index 0 (premier element) => onclick previous => images.lenght - 1 => index 2 (dernier element)
  var selectedImageIndex = -1;
  var selectedImageElement = document.getElementById("selected-image"); //  recupere l'objet par id=> <img id="selected-image"/>   
  var hideButton = document.getElementsByTagName("button")[2]; // recupere l'objet par tagName sous form d'un tableau de 4 buttons tableau[2] = hideButton 
  var showButton = document.getElementsByTagName("button")[3]; // recupere l'objet par tagName sous form d'un tableau de 4 buttons tableau[3] = showButton 
  const title = document.getElementById("title"); // recupere l'objet par id => <h2 id="title"></h2> 


  // image par default

selectedImageElement.src = "https://img.freepik.com/free-photo/long-shot-multi-colored-hot-air-balloons-floating-mountains_181624-5586.jpg?w=1060&t=st=1682108675~exp=1682109275~hmac=ce5fe2310175c9136dca4e9c17851f5557239f09ef4db4d7ccf0d05ad9253e9e"
title.innerHTML = `image 3 : Capadokia`
//-------------------------

// fonction pour la selection de l'image quand on click sur l'image
// parametre de la fonction => imageUrl
function imageName(index) {
  return  index == 1 ? title.innerHTML = `image ${index} : Trabzon` : index == 2 ? title.innerHTML = `image ${index} : Istanbul` : title.innerHTML = `image ${index} : Capadokia` 
}  

function selectImage(imageUrl) {
    selectedImageIndex = images.indexOf(imageUrl); // affectation l'index où se trouve l'url de l'image dans le tableau image au selectedImageIndex
    selectedImageElement.src = imageUrl; // affectation l'url au source de l'image selectionné
   
   
    imageName(selectedImageIndex + 1) // titre de l'image  

    showImage(); // afficher l'image
  }

// fonction previous => afficher l'image précédente

 function previousImage() {
    if (selectedImageIndex > 0) { // decrementer selectedImageIndex 
      selectedImageIndex--;
    } else {
      selectedImageIndex = images.length - 1; // la taille du tableau - 1
    }
    selectedImageElement.src = images[selectedImageIndex];  // affectation l'url au source à travers l'index
    
    imageName(selectedImageIndex + 1)// titre de l'image  

    showImage();
  }

  function nextImage() {
    if (selectedImageIndex < images.length - 1) { // incrementer selectedImageIndex
      selectedImageIndex++;
    } else {
      selectedImageIndex = 0; // revenir au premier element du tableau
    }
    selectedImageElement.src = images[selectedImageIndex]; // affectation l'url au source à travers l'index
imageName(selectedImageIndex + 1)
    showImage();
  }

  function hideImage() {
    selectedImageElement.style.display = "none"; // masquer l'element on utilisant css property => diplay="none" 
    title.style.visibility = "hidden"; // masquer le titre on utilisant css property => visibility="hidden" 
  }

  function showImage() {
    selectedImageElement.style.display = "block"; // afficher l'element on utilisant css property => diplay="block" 
    title.style.visibility = "visible"; // afficher l'element on utilisant css property => visibility="visible" 
  }