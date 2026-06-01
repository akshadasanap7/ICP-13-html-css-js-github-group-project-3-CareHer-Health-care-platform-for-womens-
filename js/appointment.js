document.getElementById("appointmentForm")
.addEventListener("submit", function(e) {
  e.preventDefault();

  console.log("📌 Form submitted");

  const appointment = {
    name: name.value,
    email: email.value,
    age: age.value,
    doctor: doctor.value,
    date: date.value,
    time: time.value,
    symptoms: symptoms.value
  };

  console.log("📝 Appointment Object:", appointment);

  localStorage.setItem("appointment", JSON.stringify(appointment));
  console.log("💾 Data saved to localStorage");

  console.log(
    "📦 Stored Data:",
    JSON.parse(localStorage.getItem("appointment"))
  );

  document.getElementById("successMsg").classList.remove("hidden");
  console.log("✅ Success message displayed");

  this.reset();
  console.log("🔄 Form reset");
});
