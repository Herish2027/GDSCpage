const button1=document.getElementById("btn1");
const button2=document.getElementById("btn2");
const block=document.getElementById("block");
const drop=document.getElementById("drop");
const ques1=document.getElementById("ques1")

document.querySelectorAll('.dropdown-toggle').forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
      const block = document.getElementById(`block${index + 1}`);
      const icon = document.getElementById(`icon${index + 1}`);
      
      if (block.style.display === "none" || block.style.display === "") {
        block.style.display = "block";
        icon.textContent = "arrow_drop_up";
      } else {
        block.style.display = "none";
        icon.textContent = "arrow_drop_down";
      }
    });
  });
