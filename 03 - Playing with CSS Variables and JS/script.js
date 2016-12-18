const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (e) => {
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
