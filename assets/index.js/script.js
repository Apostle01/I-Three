!DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <title>My Dreadlocks Salon</title>
            <link rel="stylesheet" href="assets/css/style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                integrity="sha384-5fG8uIweTo6+t1r+Lkz8Z+9sVYTaf9RNnccBLVNTJGcxFCN06a5pjqg4ws2jGMkb" crossorigin="anonymous" />
            !-- Include the Google Maps JavaScript API script --
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4Yeg39bQw2HYX_jwfgi3uqWqzqUmN8vc"></script>
            !-- Font Awesome CSS --
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />
        </head>
        <body>
            <header>
                <h1>I-Three Dreadlocks Salon</h1>
                <p>A Touch of Excellence</p>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="packages.html">Packages</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html" class="active">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section>
                    <h2>Contact</h2>
                    <p>If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible. You can also reach us by phone or email.</p>


                    <form action="mailto:nanaafianyamekye2@gmail.com" method="post">
                        <fieldset>
                            <legend>Send Message</legend>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required="" />
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required="" />
                            <label for="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required="" input />
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="5" cols="30" required=""></textarea>
                            <button type="submit">Send</button>
                        </fieldset>
                    </form>
                    <div id="map" style="width: 100%; height: 400px;"></div>

                </section>
            </main>
            <script src="my-script.js"></script>
        </body>
    </html >