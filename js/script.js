const currentTime = new Date();
console.log("Current time :", currentTime.toString());

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const output = document.getElementById("formOutput");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Greet user
      document.getElementById("welcomeText").textContent = `Hi ${name}`;
  
      // Display submitted data
      output.innerHTML = `
        <h3>Submitted Info</h3>
        <p><strong>Current Time : ${currentTime}</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
  
      // Reset form
      form.reset();
    });
  });
  