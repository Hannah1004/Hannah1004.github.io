const email_copy = document.getElementById("email");
const email_text = document.getElementById("emailText").innerText;

email_copy.addEventListener('click', () => {
    navigator.clipboard.writeText(email_text);
    alert("클립보드에 복사되었습니다.");
});