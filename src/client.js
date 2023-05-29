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

