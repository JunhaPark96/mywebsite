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

document.addEventListener("DOMContentLoaded", function () {
    createTable();
});
