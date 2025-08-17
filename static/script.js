  function openModal() {
    document.getElementById('stylesModal').style.display = 'flex';
  }
  function closeModal() {
    document.getElementById('stylesModal').style.display = 'none';
  }
  function copyLink() {
    const codeText = document.getElementById("cssLinkCode").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
      alert("Link copied to clipboard!");
    });
  }
// Non related to the hundred styles main code
