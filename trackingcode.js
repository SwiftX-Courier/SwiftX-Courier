

const trackingData = {
    "ZAF005073892": {
        trackingNumber: "ZAF005073892",
        name: "nkosi zamhole",
        country: "south africa",
        city: "capetown",
        addres: "capetown road 123"
    },
    "ZAF005073898" : {
        trackingNumber: "ZAF005073898",
        name: "siya jknjxd",
        country: "south africa",
        city: "free state",
        addres: "free state road 123"
    },
    "ZAF005073889" : {
          trackingNumber: "ZAF005073889",
          name: "zam jjdjd",
        country: "south africa",
        city: "johhanesburg",
        addres: "johhanesburg road 123"
    }
    };

    const params = new URLSearchParams(window.location.search);

    const trackingNumber = params.get("tracking");

    const customer = trackingData[trackingNumber];

    const detailsDiv = document.getElementById("details");

    if (customer) {
        detailsDiv.innerHTML = `


        <div class="shipment-header">
 <div>
    <img src="location.png" alt="">
    <p>Arrived Pending Clearance</p>
</div> 

 <div>
    Tracking Number: ${customer.trackingNumber}
</div> 
 <div>
<a href="shipment-receipt.html"><button>
    Print Shipment
</button></a>
</div> 
 
</div>

<div class="arrived-status">
    <div style="background-color: rgb(255, 0, 0);" >
Out of orgin country{USA}
    </div> 
 <div style="background-color: rgb(251, 255, 0); "> 
       In Transit{Australia}
    </div>
    <div style="background-color: rgb(255, 0, 0);">
        Arrived{South Africa}
    </div> 
</div>



<div class="collection">
        <div class="Recipient-box">
            <p>
                Sender/Orgin
            </p>
           
        </div>
        <div class="city-box">
            <p class="city">
                <img src="location.png" alt="">  City Collection
            </p>
         
            <p>
                united states
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
             <img src="location.png" alt="">   Orgin City
            </p>
            
            <p>
                Texas
            </p>
            <hr class="hr">
        </div>
        <br>
        <div class="city-box">
            <p class="city">
             <img src="calendar.png" alt="">   Shipping Date
            </p>
            2025-07-28
            <p>
                
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
              <img src="clock.png" alt="">  Shipping-Time
            </p>
           
            <p>
                1-3 days
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
               Shipping-Quantity
            </p>
            
            <p>
              1
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
             Total-weight {lbs}
            </p>
            
            <p>
              6
            </p>
            <hr class="hr">
        </div>

    </div>


     <div style="margin-top: 80px;" class="collection">
         <div style="width: 100%;"  class="Recipient-box"> 
            <p  class="Recipient">
              Shipping History
            </p>
        </div>
<div>
         <div class="city-box">
            <p class="city">
                2025/04/01
            </p>
         
            <p>
              Approved
            </p>
              
            <div>
                03:47:21 pm
            </div>       
        </div>
        <hr>
        <div class="city-box">
            <p class="city">
             2025/04/02
            </p>
            
            <p>
              In Transit
            </p>
          
            
            <div>
                12:12:45 pm
            </div>
        </div>
        <hr>
        <br>
        <div  class="city-box">
            <p class="city">
             2025/04/03 
            </p>
            
            <p>
                Arrived Pending Clearance
            </p>
          
            <div>
                01:01:24 pm
            </div>
        </div>
    </div>
    </div>





 <div id="details" style="margin-top: 80px;" class="collection">
        <div class="Recipient-box">
            <p class="Recipient">
                Recipient/destination
            </p>
        </div>

        <div class="city-box">
            <p class="city">
                <img src="location.png" alt=""> Delivery City 
            </p>
            <p>
                ${customer.addres}
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
             <img src="location.png" alt="">  Destination City
            </p>
            
            <p>
               ${customer.city}
            </p>
            <hr class="hr">
        </div>
        <br>
        <div class="city-box">
            <p class="city">
             <img src="calendar.png" alt="">  Delivery time
            </p>
            
            <p>
                2025-04-03 15:47:21
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
              <img src="clock.png" alt="">  Shipping-Time
            </p>
            
            <p>
                1-3 days
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
               Contact Name
            </p>
            
            <p>
             ${customer.name}
            </p>
            <hr class="hr">
        </div>
        <div class="city-box">
            <p class="city">
           Address
            </p>
            
            <p>
              ${customer.addres}
            </p>
            <hr class="hr">
        </div>
        `
    } else {
        detailsDiv.innerHTML = `
        <p 
        style="color:red;">Invalid or Missing tracking number.</p>
        </div>













      
        
       
        

       
        `
    }
