// Code used from knowledge of learning JavaScript through code institute and W3 Schools.
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Hide booking modal
    $("#bookNowModal").modal("hide");
    // Show the "Thank You" modal
    $("#thankYouModal").modal("show");
    // Resets the form
    this.reset();
  });
// !DOCTYPE html>
// <html lang="en">

//         <head>
//             <meta charset="UTF-8" />
//             <title>My Dreadlocks Salon</title>
//             <link rel="stylesheet" href="assets/css/style.css" />
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
//                 integrity="sha384-5fG8uIweTo6+t1r+Lkz8Z+9sVYTaf9RNnccBLVNTJGcxFCN06a5pjqg4ws2jGMkb" crossorigin="anonymous" />
//             !-- Include the Google Maps
//             !-- Font Awesome CSS --
//             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />
//         </head>
//         <body>
//             <header>
//                 <h1>I-Three Dreadlocks Salon</h1>
//                 <p>A Touch of Excellence</p>
//                 <nav>
//                     <ul>
//                         <li><a href="index.html">Home</a></li>
//                         <li><a href="packages.html">Packages</a></li>
//                         <li><a href="gallery.html">Gallery</a></li>
//                         <li><a href="contact.html" class="active">Contact</a></li>
//                     </ul>
//                 </nav>
//             </header>

//             <main>
//                 <section>
//                     <h2>Booking</h2>
//                     <p>let's embark on a journey to discover the perfect
//                         hairstyle that reflects the radiant and
//                         unique you. Your satisfaction is my top priority, and I can't wait to see the smile on your face when
//                         you leave the salon with a look you love.

//                         Feel free to reach out for consultations or to discuss your dream hairstyle. I'm here to make every hair
//                         moment extraordinary! Ready to book your appointment? Check out our packages page to see our prices and
//                         services. You can also
//                         browse our gallery page to see some of our amazing work. If you have any questions or inquiries, feel
//                         free to contact us anytime. We look forward to seeing you soon!</p>


// /* Book Now Modal taken from bootstrap and modified
// <div class="modal fade" id="bookNowModal" tabindex="-1" role="dialog" aria-labelledby="bookNowModalTitle"
//      aria-hidden="true">
// <div class="modal-dialog modal-dialog-centered" role="document">
// <div class="modal-content">
// <div class="modal-header">
//  <h5 class="modal-title" id="bookNowModalTitle">
//      I-Three Saloon Booking Form
//  </h5>
 
// </div>
// <div class="modal-body">
// <form id="bookingForm">
// <div class="form-group">
//     <label for="name">Full Name*</label>
//     <input type="text" class="form-control" id="name" placeholder="Joe Bloggs"
//         name="name" required />
// </div>
// <div class="form-group">
//     <label for="email">Email address*</label>
//     <input type="email" class="form-control" id="email" placeholder="name@example.com"
//         name="email" required />
// </div>
// <div class="form-group">
//     <label for="telephone">Telephone Number*</label>
//     <input type="tel" class="form-control" id="telephone" pattern="[0-9]{11}"
//         name="telephone" placeholder="01612332423" required />
// </div>
// <div class="form-group">
//     <label for="packageSelect">Select Your Package*</label>
//     <select class="form-control" id="packageSelect" size="3" name="package" required>
//         <option>Starter</option>
//         <option>Maintainance</option>
//         <option>Styling Perfection</option>
//     </select>
// </div>
// <div class="form-group">
//     <label for="booking-time">Choose a date and time for your appointment*</label>
//     <input type="datetime-local" id="booking-time" name="booking-time"
//         min="2023-11-22T09:00" max="2024-11-22T17:00" required />
// </div>
// <div class="form-group text-area">
//     <label for="textArea">Any additional information</label>
//     <textarea class="form-control" id="textArea" name="textArea" rows="3"></textarea>
// </div>
// <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-dismiss="modal">
//         Close
//     </button>
//     <button type="submit" class="btn btn-primary">Book</button>
//   </div>
//  </form>
// </div>
// </div>
// </div>
// </div>

// /*Thank You Modal - Bootstrap Modal Modified 
// <div class="modal" tabindex="-1" role="dialog" id="thankYouModal">
// <div class="modal-dialog" role="document">
// <div class="modal-content">
// <div class="modal-header">
// </div>
// <div class="modal-body">
// <p class="text-center">
// Thank you for choosing I-Three Dreadlocks Saloon!
// </p>
// <p>
// We're thrilled to have the opportunity to enhance your beauty
// with locks. Get ready for a <em>Touch of Excellence</em>!
// </p>
// </div>

// </div>
// </div>
// </div>
// <iframe
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37972.97996219722!2d-2.129249130921633!3d53.498635217240896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bac41e344c3eb%3A0xdc7abd07eba9e86c!2sAshton-under-Lyne!5e0!3m2!1sen!2suk!4v1710924088492!5m2!1sen!2suk"
// width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
// refererpolicy="no-referer-when-downgrade">
// </iframe>

// </section>
// </main>
// /*Scripts for Booking form validation  
//     <script src="assets/index.js/script.js"></script>
// </body>
// </html >