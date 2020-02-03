$(document).ready(function () {
    var mr = new mumbleReader(
  'YOUR_OWN JSON_URL',
  'mum0'
) //init the object
mr.settooltip(false) //to disable the tooltip change true to false
mr.setuseservername(true) //Use the server name as name of the root channel
mr.setlenght(50) //Set the max lenght for displaying or remove this line to have no limit
mr.setimgpath('icons/') //Set the image path the local subdirectory MAKE SURE THAT U UPLOAD THE ICONS
mr.setuseservername(true) //Do not show root in the Root channel but the given servername
function load_mum() {
  mr.start() //This will reload the viewer
}
load_mum() //This will to the loading the first time
window.setInterval(() => {
  load_mum()
}, 50000)
  })
