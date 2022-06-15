// const template = `
// <div class="modal">
// <div class="modal-content">
//   <i class="fa fa-times modal-close"></i>
//   <div class="modal-desc">
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
//     provident! Cupiditate placeat ea optio a perferendis hic quisquam
//     reiciendis aliquid odio? Reprehenderit mollitia tenetur quam
//     perferendis quas a culpa id!
//     <div class="modal-action">
//       <button class="modal-confirm">Confirm</button>
//       <button class="modal-cancel">Cancel</button>
//     </div>
//   </div>
// </div>
// </div>
// `;

const body = document.body;

const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);

const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil ut esse, sapiente tempore asperiores minus tenetur at expedita delectus officiis enim architecto id labore quae obcaecati, a officia sit.";
modalContent.appendChild(modalDesc);

const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");

const modalConfirn = document.createElement("button");
modalConfirn.className = "modal-confirm";
modalConfirn.textContent = "Confirm";
const modalCancel = document.createElement("button");
modalCancel.className = "modal-cancel";
modalCancel.textContent = "Cancel";

modalAction.appendChild(modalConfirn);
modalAction.appendChild(modalCancel);

modalContent.appendChild(modalAction);

body.appendChild(modal);

if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
