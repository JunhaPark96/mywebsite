import usersData from './usersData.js';

// 테이블 생성 함수
function createTable() {
    const table = document.getElementById("client-table");

    usersData.forEach((user) => {
        const row = table.insertRow();

        // 체크박스 셀
        const checkboxCell = row.insertCell();
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);

        // number 셀
        const numberCell = row.insertCell();
        numberCell.textContent = user.number;

        // name 셀
        const nameCell = row.insertCell();
        nameCell.textContent = user.name;

        // birthDate 셀
        const birthDateCell = row.insertCell();
        birthDateCell.textContent = user.birthDate;

        // address 셀
        const addressCell = row.insertCell();
        addressCell.textContent = user.address;

        // phoneNumber 셀
        const phoneNumberCell = row.insertCell();
        phoneNumberCell.textContent = user.phoneNumber;

        // registrationDate 셀
        const registrationDateCell = row.insertCell();
        registrationDateCell.textContent = user.registrationDate;

        // userID 셀
        const userIDCell = row.insertCell();
        userIDCell.textContent = user.userID;
    });
}

// 총 인원 수 표시 함수
function displayTotalUsers() {
    const totalUsers = usersData.length;
    const totalUsersElement = document.getElementById("total-users");
    totalUsersElement.textContent = `${totalUsers}`;
}

// 유저 생성 함수
function createUser() {
    const newUser = {
        number: usersData.length + 1,
        name: "새로운 유저",
        birthDate: "YYYY-MM-DD",
        address: "주소",
        phoneNumber: "전화번호",
        registrationDate: "YYYY-MM-DD",
        userID: "새로운 ID",
    };

    usersData.push(newUser);
    createTable();
    displayTotalUsers();
}

// 유저 삭제 함수
function deleteUser() {
    const table = document.getElementById("client-table");
    const checkboxes = table.getElementsByTagName("input");

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
            table.deleteRow(i + 1); // +1 to account for table header
            usersData.splice(i, 1);
        }
    }

    displayTotalUsers();
}

// 유저 내용 변경 함수
function updateUser() {
    const table = document.getElementById("client-table");
    const checkboxes = table.getElementsByTagName("input");

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
            const row = checkboxes[i].parentNode.parentNode;
            const cells = row.cells;

            cells[2].textContent = "변경된 이름";
            cells[3].textContent = "YYYY-MM-DD"; // 변경된 생년월일
            cells[4].textContent = "변경된 주소";
            cells[5].textContent = "변경된 전화번호";
            cells[6].textContent = "YYYY-MM-DD"; // 변경된 가입날짜
            cells[7].textContent = "변경된 ID";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createTable();
    displayTotalUsers();

    const createUserButton = document.getElementById("create-user");
    createUserButton.addEventListener("click", createUser);

    const deleteUserButton = document.getElementById("delete-user");
    deleteUserButton.addEventListener("click", deleteUser);

    const updateUserButton = document.getElementById("update-user");
    updateUserButton.addEventListener("click", updateUser);
});

// import usersData from './usersData.js';

// // 테이블 생성 함수
// function createTable() {
//   const table = document.getElementById("client-table");

//   usersData.forEach((user) => {
//     const row = table.insertRow();

//     // 체크박스 셀
//     const checkboxCell = row.insertCell();
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkboxCell.appendChild(checkbox);

//     // number 셀
//     const numberCell = row.insertCell();
//     numberCell.textContent = user.number;

//     // name 셀
//     const nameCell = row.insertCell();
//     nameCell.textContent = user.name;

//     // birthDate 셀
//     const birthDateCell = row.insertCell();
//     birthDateCell.textContent = user.birthDate;

//     // address 셀
//     const addressCell = row.insertCell();
//     addressCell.textContent = user.address;

//     // phoneNumber 셀
//     const phoneNumberCell = row.insertCell();
//     phoneNumberCell.textContent = user.phoneNumber;

//     // registrationDate 셀
//     const registrationDateCell = row.insertCell();
//     registrationDateCell.textContent = user.registrationDate;

//     // userID 셀
//     const userIDCell = row.insertCell();
//     userIDCell.textContent = user.userID;
//   });
// }

// // 총 인원 수 표시 함수
// function displayTotalUsers() {
//   const totalUsers = usersData.length;
//   const totalUsersElement = document.getElementById("total-users");
//   totalUsersElement.textContent = `총 인원 수: ${totalUsers}`;
// }

// // 유저 생성 모달
// function createUserModal() {
//   const modal = document.getElementById("modal");

//   const modalContent = document.createElement("div");
//   modalContent.className = "modal-content";

//   const closeButton = document.createElement("span");
//   closeButton.className = "close-button";
//   closeButton.innerHTML = "&times;";

//   const form = document.createElement("form");

//   const nameLabel = document.createElement("label");
//   nameLabel.textContent = "이름: ";
//   const nameInput = document.createElement("input");
//   nameInput.type = "text";
//   nameInput.required = true;

//   const birthDateLabel = document.createElement("label");
//   birthDateLabel.textContent = "생년월일: ";
//   const birthDateInput = document.createElement("input");
//   birthDateInput.type = "text";
//   birthDateInput.required = true;

//   const addressLabel = document.createElement("label");
//   addressLabel.textContent = "주소: ";
//   const addressInput = document.createElement("input");
//   addressInput.type = "text";
//   addressInput.required = true;

//   const phoneNumberLabel = document.createElement("label");
//   phoneNumberLabel.textContent = "전화번호: ";
//   const phoneNumberInput = document.createElement("input");
//   phoneNumberInput.type = "text";
//   phoneNumberInput.required = true;

//   const registrationDateLabel = document.createElement("label");
//   registrationDateLabel.textContent = "가입날짜: ";
//   const registrationDateInput = document.createElement("input");
//   registrationDateInput.type = "text";
//   registrationDateInput.required = true;

//   const userIDLabel = document.createElement("label");
//   userIDLabel.textContent = "사용자 ID: ";
//   const userIDInput = document.createElement("input");
//   userIDInput.type = "text";
//   userIDInput.required = true;

//   const submitButton = document.createElement("button");
//   submitButton.type = "submit";
//   submitButton.textContent = "생성";

//   form.appendChild(nameLabel);
//   form.appendChild(nameInput);
//   form.appendChild(birthDateLabel);
//   form.appendChild(birthDateInput);
//   form.appendChild(addressLabel);
//   form.appendChild(addressInput);
//   form.appendChild(phoneNumberLabel);
//   form.appendChild(phoneNumberInput);
//   form.appendChild(registrationDateLabel);
//   form.appendChild(registrationDateInput);
//   form.appendChild(userIDLabel);
//   form.appendChild(userIDInput);
//   form.appendChild(submitButton);

//   modalContent.appendChild(closeButton);
//   modalContent.appendChild(form);
//   modal.appendChild(modalContent);

//   closeButton.addEventListener("click", closeModal);

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = nameInput.value.trim();
//     const birthDate = birthDateInput.value.trim();
//     const address = addressInput.value.trim();
//     const phoneNumber = phoneNumberInput.value.trim();
//     const registrationDate = registrationDateInput.value.trim();
//     const userID = userIDInput.value.trim();

//     if (name !== "" && birthDate !== "" && address !== "" && phoneNumber !== "" && registrationDate !== "" && userID !== "") {
//       const table = document.getElementById("client-table");
//       const row = table.insertRow();

//       // 체크박스 셀
//       const checkboxCell = row.insertCell();
//       const checkbox = document.createElement("input");
//       checkbox.type = "checkbox";
//       checkboxCell.appendChild(checkbox);

//       // number 셀
//       const numberCell = row.insertCell();
//       numberCell.textContent = usersData.length + 1;

//       // name 셀
//       const nameCell = row.insertCell();
//       nameCell.textContent = name;

//       // birthDate 셀
//       const birthDateCell = row.insertCell();
//       birthDateCell.textContent = birthDate;

//       // address 셀
//       const addressCell = row.insertCell();
//       addressCell.textContent = address;

//       // phoneNumber 셀
//       const phoneNumberCell = row.insertCell();
//       phoneNumberCell.textContent = phoneNumber;

//       // registrationDate 셀
//       const registrationDateCell = row.insertCell();
//       registrationDateCell.textContent = registrationDate;

//       // userID 셀
//       const userIDCell = row.insertCell();
//       userIDCell.textContent = userID;

//       closeModal();
//       displayTotalUsers();
//     }
//   });
// }

// // 유저 삭제 모달
// function deleteUserModal() {
//   const modal = document.getElementById("modal");

//   const modalContent = document.createElement("div");
//   modalContent.className = "modal-content";

//   const closeButton = document.createElement("span");
//   closeButton.className = "close-button";
//   closeButton.innerHTML = "&times;";

//   const form = document.createElement("form");

//   const userIDLabel = document.createElement("label");
//   userIDLabel.textContent = "삭제할 사용자 ID: ";
//   const userIDInput = document.createElement("input");
//   userIDInput.type = "text";
//   userIDInput.required = true;

//   const submitButton = document.createElement("button");
//   submitButton.type = "submit";
//   submitButton.textContent = "삭제";

//   form.appendChild(userIDLabel);
//   form.appendChild(userIDInput);
//   form.appendChild(submitButton);

//   modalContent.appendChild(closeButton);
//   modalContent.appendChild(form);
//   modal.appendChild(modalContent);

//   closeButton.addEventListener("click", closeModal);

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const userID = userIDInput.value.trim();

//     if (userID !== "") {
//       const table = document.getElementById("client-table");
//       const rows = table.rows;

//       for (let i = 1; i < rows.length; i++) {
//         const row = rows[i];
//         const userIDCell = row.cells[7];
//         if (userIDCell.textContent === userID) {
//           table.deleteRow(i);
//           closeModal();
//           displayTotalUsers();
//           return;
//         }
//       }
//     }
//   });
// }

// // 유저 업데이트 모달
// function updateUserModal() {
//   const modal = document.getElementById("modal");

//   const modalContent = document.createElement("div");
//   modalContent.className = "modal-content";

//   const closeButton = document.createElement("span");
//   closeButton.className = "close-button";
//   closeButton.innerHTML = "&times;";

//   const form = document.createElement("form");

//   const userIDLabel = document.createElement("label");
//   userIDLabel.textContent = "업데이트할 사용자 ID: ";
//   const userIDInput = document.createElement("input");
//   userIDInput.type = "text";
//   userIDInput.required = true;

//   const nameLabel = document.createElement("label");
//   nameLabel.textContent = "이름: ";
//   const nameInput = document.createElement("input");
//   nameInput.type = "text";
//   nameInput.required = true;

//   const birthDateLabel = document.createElement("label");
//   birthDateLabel.textContent = "생년월일: ";
//   const birthDateInput = document.createElement("input");
//   birthDateInput.type = "text";
//   birthDateInput.required = true;

//   const addressLabel = document.createElement("label");
//   addressLabel.textContent = "주소: ";
//   const addressInput = document.createElement("input");
//   addressInput.type = "text";
//   addressInput.required = true;

//   const phoneNumberLabel = document.createElement("label");
//   phoneNumberLabel.textContent = "전화번호: ";
//   const phoneNumberInput = document.createElement("input");
//   phoneNumberInput.type = "text";
//   phoneNumberInput.required = true;

//   const registrationDateLabel = document.createElement("label");
//   registrationDateLabel.textContent = "가입날짜: ";
//   const registrationDateInput = document.createElement("input");
//   registrationDateInput.type = "text";
//   registrationDateInput.required = true;

//   const submitButton = document.createElement("button");
//   submitButton.type = "submit";
//   submitButton.textContent = "업데이트";

//   form.appendChild(userIDLabel);
//   form.appendChild(userIDInput);
//   form.appendChild(nameLabel);
//   form.appendChild(nameInput);
//   form.appendChild(birthDateLabel);
//   form.appendChild(birthDateInput);
//   form.appendChild(addressLabel);
//   form.appendChild(addressInput);
//   form.appendChild(phoneNumberLabel);
//   form.appendChild(phoneNumberInput);
//   form.appendChild(registrationDateLabel);
//   form.appendChild(registrationDateInput);
//   form.appendChild(submitButton);

//   modalContent.appendChild(closeButton);
//   modalContent.appendChild(form);
//   modal.appendChild(modalContent);

//   closeButton.addEventListener("click", closeModal);

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const userID = userIDInput.value.trim();
//     const name = nameInput.value.trim();
//     const birthDate = birthDateInput.value.trim();
//     const address = addressInput.value.trim();
//     const phoneNumber = phoneNumberInput.value.trim();
//     const registrationDate = registrationDateInput.value.trim();

//     if (userID !== "" && name !== "" && birthDate !== "" && address !== "" && phoneNumber !== "" && registrationDate !== "") {
//       const table = document.getElementById("client-table");
//       const rows = table.rows;

//       for (let i = 1; i < rows.length; i++) {
//         const row = rows[i];
//         const userIDCell = row.cells[7];
//         if (userIDCell.textContent === userID) {
//           row.cells[2].textContent = name;
//           row.cells[3].textContent = birthDate;
//           row.cells[4].textContent = address;
//           row.cells[5].textContent = phoneNumber;
//           row.cells[6].textContent = registrationDate;
//           closeModal();
//           return;
//         }
//       }
//     }
//   });
// }

// // 모달 닫기 함수
// function closeModal() {
//   const modal = document.getElementById("modal");
//   modal.innerHTML = "";
//   modal.style.display = "none";
// }

// // 모달 열기 함수
// function openModal() {
//   const modal = document.getElementById("modal");
//   modal.style.display = "block";
// }

// // 이벤트 리스너 등록
// document.getElementById("create-user").addEventListener("click", createUserModal);
// document.getElementById("delete-user").addEventListener("click", deleteUserModal);
// document.getElementById("update-user").addEventListener("click", updateUserModal);

// // 초기 실행
// createTable();
// displayTotalUsers();
