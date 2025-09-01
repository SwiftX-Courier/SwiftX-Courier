const validTrackingNumber = [
    "ZAF005073893",
    "ZAF005073898",
    "ZAF005073889",
    "ZAF005073880",
    "ZAF00507388",
    "ZAF005073889",
     "ZAF005073899",
     "ZAF005073898",
     "ZAF005073897",
     "ZAF005073894",
     "ZAF005073895",
     "ZAF005073896",
    "ZAF0050738910",
    "ZAF0050738912",
    "ZAF0050738911",
     "ZAF0050738913",
    "ZAF0050738914",
    "ZAF0050738915",
    "ZAF0050738916",
    "ZAF0050738917",
    "ZAF0050738918",
    "ZAF0050738919",
    "ZAF0050738920",
    "ZAF0050738921",
    "ZAF0050738922",
     "ZAF0050738923",
     "ZAF0050738924",
     "ZAF0050738925",
];

document.getElementById("trackingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("trackingNumber").value.trim().toUpperCase();
    const errorMsg = document.getElementById("error");
    if (validTrackingNumber.includes(input)) {
        errorMsg.textContent="";
        window.location.href = `
        trackingcode.html?tracking=${input}
        `;
    }
     else {
          errorMsg.textContent = "Invalid tracking number. Please try again";
        }

});






