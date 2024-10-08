/* eslint-disable */

export const hideAlert = () => {
  const el = document.querySelector(".wrapp-alert");
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
export const showAlert = (type, msg) => {
  hideAlert();
  const markup = `
    <div class="wrapp-alert">
      <div class="alert alert--${type}">${msg}</div>
    </div>  
  `;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 3000);
};
