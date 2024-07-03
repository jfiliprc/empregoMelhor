document.addEventListener("DOMContentLoaded", function () {
  const driverRadio = document.getElementById("driver");
  const companyRadio = document.getElementById("company");
  const driverFields = document.getElementById("driverFields");
  const companyFields = document.getElementById("companyFields");

  function toggleFields() {
    if (driverRadio.checked) {
      driverFields.classList.remove("hidden");
      companyFields.classList.add("hidden");
    } else {
      driverFields.classList.add("hidden");
      companyFields.classList.remove("hidden");
    }
  }

  driverRadio.addEventListener("change", toggleFields);
  companyRadio.addEventListener("change", toggleFields);

  toggleFields(); // Inicializa o estado correto dos campos
});
