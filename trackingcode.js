

const trackingData = {
    "ZAF005073892": {
        trackingNumber: "ZAF005073892",
        name: "Sibusiso Ntshangase",
        country: "South Africa",
        state: "KwaZulu Natal",
        city: "Durban",
        addres: "25 dlokwe road, emlandweni",
        status: "Arrived (Pending Clearance)",
        status1: "In Transit",
        deliverytime: "2025-08-011  20:47:21"
    },
    "ZAF005073898" : {
       trackingNumber: "ZAF005073898",
        name: "Phathutshedzo Marandela",
        country: "South Africa",
        state: "Limpopo",
        city: "Makhado",
        addres: "P.O.BOX 48 makhado 0920",
        status: "Arrived (Pending Clearance)",
        status1: "In Transit",
        deliverytime: "2025-08-011  20:47:21"
    },
    "ZAF005073889" : {
        trackingNumber: "ZAF005073889",
        name: "Songezo Mbutye",
        country: "South Africa",
        state: "Eastern Cape",
        city: "Port Elizabeth",
        addres: "Nelson Mandela University, sanlam student village",
        status: "Arrived (Pending Clearance)",
        status1: "In Transit",
        deliverytime: "2025-08-013  08:47:21"
    },
     "ZAF00507388" : {
        trackingNumber: "ZAF00507388",
        name: "Jabulani sifiso Gama",
        country: "South Africa",
        state: "Gaunteng",
        city: "Pretoria",
        addres: "Gaunteng, Pretoria",
        status: "Arrived (Pending Clearance)",
        status1: "In Transit",
        deliverytime: "2025-08-013  08:47:21"
    },
       "ZAF005073880" : {
        trackingNumber: "ZAF005073880",
        name: "Malcolm August",
        country: "South Africa",
        state: "Limpopo",
        city: "Modimolle",
        addres: "Alf makaleng street 463 fh hospital",
        status: "Arrived (Pending Clearance)",
        status1: "In Transit",
        deliverytim: "2025-08-013  08:47:21"
    },
    
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
    <p>${customer.status} ${customer.status1}</p>
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
            2025-08-08
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
                2025/08/010
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
             2025/08/09
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
             2025/08/013
            </p>
            
            <p>
               ${customer.status}${customer.status1}
            </p>
          
            <div>
                09:011:24 am
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
                <img src="location.png" alt="">Address
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
                ${customer.deliverytime}
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
           State
            </p>
            
            <p>
              ${customer.state}
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













