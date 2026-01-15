document.getElementById("eventForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("eventType").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  const text = 
`Event Booking Request
Name: ${name}
Phone: ${phone}
Event: ${type}
Date: ${date}
Guests: ${guests}
Message: ${message}`;

  const url = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});
