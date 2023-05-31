fetch('./usersData.json') // usersData.json 파일을 가져옴
  .then(response => response.json()) // JSON 형식으로 변환
  .then(usersData => {
    // 테이블 생성 함수
    function createTable() {
      const tableBody = document.getElementById("client-table-body"); // tbody 요소 선택

      // 기존의 tbody 내용 제거
      while (tableBody.firstChild) {
        tableBody.firstChild.remove();
      }

      usersData.forEach((user) => {
        const row = document.createElement("tr");

        // 체크박스 셀
        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // 번호 셀
        const numberCell = document.createElement("td");
        numberCell.textContent = user.number;
        row.appendChild(numberCell);

        // 이름 셀
        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        // 생년월일 셀
        const birthDateCell = document.createElement("td");
        birthDateCell.textContent = user.birthDate;
        row.appendChild(birthDateCell);

        // 주소 셀
        const addressCell = document.createElement("td");
        addressCell.textContent = user.address;
        row.appendChild(addressCell);

        // 전화번호 셀
        const phoneNumberCell = document.createElement("td");
        phoneNumberCell.textContent = user.phoneNumber;
        row.appendChild(phoneNumberCell);

        // 등록일 셀
        const registrationDateCell = document.createElement("td");
        registrationDateCell.textContent = user.registrationDate;
        row.appendChild(registrationDateCell);

        // 사용자 ID 셀
        const userIDCell = document.createElement("td");
        userIDCell.textContent = user.userID;
        row.appendChild(userIDCell);

        tableBody.appendChild(row); // tbody에 행 추가
      });
    }

    // 전체 사용자 수 표시 함수
    function displayTotalUsers() {
      const totalUsers = usersData.length;
      const totalUsersElement = document.getElementById("total-users");
      totalUsersElement.textContent = `${totalUsers}`;
    }

    // 사용자 생성 함수
    function createUser() {
      const newUser = {
        number: usersData.length + 1,
        name: "새 사용자",
        birthDate: "YYYY-MM-DD",
        address: "주소",
        phoneNumber: "전화번호",
        registrationDate: "YYYY-MM-DD",
        userID: "새 ID",
      };

      usersData.push(newUser);
      createTable();
      displayTotalUsers();
    }

    // 사용자 삭제 함수
    function deleteUser() {
      const table = document.getElementById("client-table");
      const checkboxes = table.getElementsByTagName("input");

      for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
          table.deleteRow(i + 1); // 테이블 헤더를 고려하여 +1
          usersData.splice(i, 1);
        }
      }

      displayTotalUsers();
    }

    // 사용자 업데이트 함수
    function updateUser() {
      const table = document.getElementById("client-table");
      const checkboxes = table.getElementsByTagName("input");

      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
          const row = checkboxes[i].parentNode.parentNode;
          const cells = row.cells;

          cells[2].textContent = "수정된 이름";
          cells[3].textContent = "YYYY-MM-DD"; // 수정된 생년월일
          cells[4].textContent = "수정된 주소";
          cells[5].textContent = "수정된 전화번호";
          cells[6].textContent = "YYYY-MM-DD"; // 수정된 등록일
          cells[7].textContent = "수정된 ID";

          checkboxes[i].checked = false;
        }
      }
    }

    // 사용자 생성, 삭제, 업데이트 버튼에 이벤트 리스너 등록
    document.getElementById("create-user-btn").addEventListener("click", createUser);
    document.getElementById("delete-user-btn").addEventListener("click", deleteUser);
    document.getElementById("update-user-btn").addEventListener("click", updateUser);

    // 테이블과 전체 사용자 수 초기화
    createTable();
    displayTotalUsers();
  })
  .catch(error => {
    console.error('Error:', error);
  });
