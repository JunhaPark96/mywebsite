// side- ul 연도 관리
function timeline_list() {
  let i = 1994;
  let now = new Date();
  while (i <= now.getFullYear()) {
    document.write(`<li><span>${i}</span></li>`);
    i += 1;
  }
}

// 테이블 생성 함수
function createBooksTable() {
  // total records 출력
  const totalRecords = document.createElement("div");
  totalRecords.textContent = "total records: ";
  document.getElementById("books-contents").appendChild(totalRecords);

  const table = document.createElement("table");
  table.classList.add("books-table");

  // 테이블 헤더 생성
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const columns = [
    "", "#", "서명", "저자명", "출판사", "출판년도", "ISBN", "정가",
    "이용자ID", "신청일"
  ];

  // 헤더의 각 컬럼 추가
  columns.forEach(column => {
    const th = document.createElement("th");
    th.textContent = column;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // 테이블 바디 생성
  const tbody = document.createElement("tbody");

  // JSON 데이터 가져오기
  fetch('booksData.json')
    .then(response => response.json())
    .then(data => {
      // total records 업데이트
      totalRecords.textContent += data.length;

      // 도서 데이터를 순회하며 각 행 생성
      data.forEach((book, index) => {
        const row = document.createElement("tr");

        // 각 행에 border-bottom 스타일 추가
        row.style.borderBottom = "1px solid #ddd";

        // 체크박스 열 추가
        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        // 번호 컬럼 추가
        const indexCell = document.createElement("td");
        indexCell.textContent = index + 1;
        row.appendChild(indexCell);

        // 나머지 컬럼
        columns.slice(2).forEach(column => {
          const cell = document.createElement("td");
          cell.textContent = book[column];
          row.appendChild(cell);
        });

        tbody.appendChild(row);
      });

      // 테이블 완성
      table.appendChild(tbody);
      document.getElementById("books-contents").appendChild(table);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
