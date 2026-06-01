document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const symptoms = Array.from(document.querySelectorAll('.checkbox-group input:checked'))
    .map(cb => cb.value);

  const appointment = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    age: document.getElementById("age").value,
    doctor: document.getElementById("doctor").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    symptoms: symptoms,
    description: document.getElementById("description") ? document.getElementById("description").value.trim() : "",
    createdAt: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
  existing.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(existing));

  document.getElementById("successMsg").classList.remove("hidden");
  this.reset();

  setTimeout(() => document.getElementById("successMsg").classList.add("hidden"), 5000);
});
