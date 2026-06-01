const API = "http://localhost:3000/api";

document.getElementById("appointmentForm").addEventListener("submit", async function (e) {
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
    symptoms,
    description: document.getElementById("description") ? document.getElementById("description").value.trim() : ""
  };

  try {
    const res = await fetch(`${API}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    });
    const data = await res.json();
    if (!res.ok) { alert(data.error); return; }
  } catch {
    // fallback to localStorage if backend not running
    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    existing.push({ ...appointment, id: Date.now(), createdAt: new Date().toISOString() });
    localStorage.setItem("appointments", JSON.stringify(existing));
  }

  document.getElementById("successMsg").classList.remove("hidden");
  this.reset();
  setTimeout(() => document.getElementById("successMsg").classList.add("hidden"), 5000);
});
