const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output');

const updateOutput = () => {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}</script>`;

  const combinedCode = `
    <html>
    <head>${css}</head>
    <body>${html}${js}</body>
    </html>
  `;

  output.srcdoc = combinedCode;
};

// Initial update on page load
updateOutput();

// Run button event listener
document.querySelector('.run-button').addEventListener('click', updateOutput);

// Update output on textarea input changes
htmlCode.addEventListener('input', updateOutput);
cssCode.addEventListener('input', updateOutput);
jsCode.addEventListener('input', updateOutput);
