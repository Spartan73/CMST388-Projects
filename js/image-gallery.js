// Project 1 JavaScript Document

// Initialize variables to grab all ID’s of photos and then group them in an idArray. Each idArray is equal to 0, 1, 2, 3, and 4 and begins at idArray 0 [thumb1].
var idArray = [
        "thumb1",
        "thumb2",
        "thumb3",
        "thumb4",
        "thumb5"
];

//The process is set to match the image IDs from the idArray with its image source in the project HTML document. The loop applies to each image in the idArray one at a time until an image source is obtained then stops. At the start, the index, "i” begins at 0 of the idArray. The loop is set to run while the condition is true and the index counter is a number less than the number of items in the array. The process is set to add 1 to the index counter for a complete iteration of in the loop.
for (var i = 0; i < idArray.length; i++) {
        var imgSrc = document.getElementById(idArray[i]).getAttribute("src"); //This is set to create a new variable and will search the project HTML document for the applicable element ID associated to the idArray then save the value inside the source attribute which is the image [img] source.
        console.log("The source of " + idArray[i] + " is " + imgSrc); //This is set to log each match between the image ID and the associated image source.
};      
      
      var placeholderImgSrc = document.getElementById(idArray[0]).getAttribute("src"); //This is set to create a new variable that searches the project HTML document for the first item in the idArray associated with the element ID of "thumb1" and save its source value.
      console.log("The source of placeholderImgSrc is " + placeholderImgSrc); //This logs what the placeholder image source is.
      
//This is set to assign the placeholder image to the large preview of the applicable image.
      document.getElementById("largeImage").setAttribute("src", placeholderImgSrc);

//This is set to search the project HTML document for the associated element with the applicable ID "largeImage" and change the attribute "src" from what it is now as blank “ “ to the new value stored in the variable "placeholderImgSrc" which is the image path to "thumb1".
      var largeImgSrc = document.getElementById("largeImage").getAttribute("src");
      console.log("The source of largeImgSrc is " + largeImgSrc); //This is set to log the newly added image source of the “largeImage” window.
      
      
//This swaps the image in the large gallery window to the image of the thumbnail when the user is hovering. The function is summoned by a mouse event, "onmouseover," for each image in the project HTML document.
      function swapImage(hoveredThumb) {
        console.log("Begnning image swap..."); //This logs each image swap.
        console.log("...The mouse hovered over " + hoveredThumb.getAttribute("src")); //This logs the image source of the hovered thumb.
        var newImgSrc = hoveredThumb.getAttribute("src"); //This is set to save the image source of the hovered thumb but in a new variable. The new variable is used to compare against the image source of the current displayed large image in the gallery.
        console.log("...Setting newImgSrc as " + newImgSrc); //This will log the new image source of the large gallery image.

        largeImgSrc = document.getElementById("largeImage").getAttribute("src"); //This saves the old image source of the large gallery image.

        console.log("...Reporting largeImgSrc is " + largeImgSrc); //This logs the old image source of the large gallery image was before the images had swapped.
        if (largeImgSrc != newImgSrc) { //This is set to perform tasks to swap images when the large image source is not equal to the new image source which defines a change is needed.

          console.log("...Replacing old largeImgSrc " + largeImgSrc + " with new newImgSrc " + newImgSrc); //This is set to log what the image source is getting swapped for.
          largeImgSrc === newImgSrc; //This sets the value of the large image source to be the new image source from the hovered thumb.
          document.getElementById("largeImage").setAttribute("src", newImgSrc); //This is set to implement the swap.
          console.log("...Now largeImgSrc is " + largeImgSrc); //This logs confirmation that the large image source matches the associated hovered thumb image source.
        } else {
          console.log("largeImgSrc didn't change."); //This is set to log when the swap is not needed because the image source of the large image already matches the image source of the hovered thumb.
        };
        console.log("Image swap complete!"); //This logs when an image swap ends.
      };
      
//This is set to listen for a mouseover event on each image ID from the idArray and to start an image swap. The loop runs through each image in the idArray one at a time until it has obtained an image source then stops. The index, "i” begins at 0 of the idArray. The loop runs while this condition is true: the index counter is a number less than the number of items in the array. The loop is set to run while the condition is true and the index counter is a number less than the number of items in the array. The process is set to add 1 to the index counter for a complete iteration in the loop. The function is set to run "swapThis" on the current image element with the mouseover.
      for (var i = 0; i < idArray.length; i++) {
        document.getElementById(idArray[i]).addEventListener("mouseover", function() {
          swapImage(this)
        }, false);
      };

      
//This is set to listen for mouseover events on thumbs and if a mouseover is detected it is set to update the caption accordingly. This process is not dynamic like the loop matching image IDs with image sources because each image only has a specific caption associated to it. It is then set to search the document for an applicable image ID.  It is then set to add a listener for the mouse events onmouseover-hovering event and if the browser notices a mouseover being performed it is set to run an unnamed function. The unnamed function is set to search the project HTML document for the element ID caption and targets the project HTML within the element then replaces it with the applicable and associated text. Finally, a capture is not necessary for the event listener so this part is false.
      document.getElementById("thumb1").addEventListener("mouseover", function() {
        document.getElementById("caption").innerHTML = "A hungry roaring Cheetah is not a cat you'd want to play with!";
      }, false);
      document.getElementById("thumb2").addEventListener("mouseover", function() {
        document.getElementById("caption").innerHTML = "A soaring and screaming Eagle is a sight to see, especially when they're hunting.";
      }, false);
      document.getElementById("thumb3").addEventListener("mouseover", function() {
        document.getElementById("caption").innerHTML = "Five cute amigos just hanging out on a branch for the day.";
      }, false);
      document.getElementById("thumb4").addEventListener("mouseover", function() {
        document.getElementById("caption").innerHTML = "Pitbulls get a bad rep, but the truth is they're absolute sweethearts.";
      }, false);
      document.getElementById("thumb5").addEventListener("mouseover", function() {
        document.getElementById("caption").innerHTML = "How does one stop a charging Rhino? You take away their American Express card.";
      }, false);
      
      
//This is set to remove borders from all thumbnail images listed in the array. It is set to create a new function that instructs the web browser to add the "thumbDown" CSS class to the thumbnails. The loop runs through each image one by one in the idArray until it has obtained the "thumbDown" class, then stops. The index, "i", starts at 0 to start at the beginning of the array. This loop runs while this condition is true and the index counter is a number less than the number of items in the idArray. It is set to add 1 to the index counter for each complete iteration of the loop. The className method is set to insert whatever CSS class is specified into the element. Because the class attribute does not exist in the project HTML document, this function adds it and then sets it to "thumbDown" accordingly.
      function removeBorder() {
        for (var i = 0; i < idArray.length; i++) {
          document.getElementById(idArray[i]).className = "thumbDown"; //This is set to find each item in the idArray in the project HTML document and set the CSS class to "thumbDown".
          var imageClass = document.getElementById(idArray[i]).getAttribute("class"); //This is set to save the current CSS class of the thumb as a new variable.
          console.log("The class of " + idArray[i] + " is " + imageClass); //This logs confirmation that each thumbnail image received the "thumbDown" class.
        };
      };
      
//Remove all thumb border except on the thumb being clicked on. Perform a search of the project HTML document for each thumb image by its ID. Listen for the mouse event "onclick" and run the unnamed function. The applicable unnamed function runs the removeBorder function to apply the "thumbDown" CSS class as is applicable to each and every thumb image and this removes all borders. The unnamed function is then set to apply the "thumbUp" CSS class only to the thumb registering a mouse click.
      for (var i = 0; i < idArray.length; i++) {
        document.getElementById(idArray[i]).addEventListener("click", function() {
          removeBorder();
          this.className = "thumbUp";
        }, false);
      };