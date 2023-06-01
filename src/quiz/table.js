const itemsPerPage = 10; // 페이지당 표시할 항목 수
let currentPage = 1; // 현재 페이지
let selectedRows = []; // 선택된 행의 인덱스를 저장할 배열
let draggedElement = null;
let prevIndex = null;

fetch("forum.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);

        const tableContainer = document.getElementById("tableContainer");
        const paginationContainer = document.getElementById("paginationContainer");
        const totalPages = Math.ceil(data.length / itemsPerPage); // 총 페이지 수

        // 테이블 생성
        function createTable(pageData) {
            const table = document.createElement("table");
            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");

            const headerRow = document.createElement("tr");
            const headerCheckbox = document.createElement("th");
            const headerID = document.createElement("th");
            const headerTitle = document.createElement("th");
            headerCheckbox.innerHTML = '<input type="checkbox" id="checkAll">';
            headerID.textContent = "ID";
            headerTitle.textContent = "Title";

            headerCheckbox.addEventListener("change", () => {
                const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = headerCheckbox.checked;
                    toggleRowSelection(checkbox);
                });

                if (headerCheckbox.checked) {
                    table.classList.add("all-selected");
                } else {
                    table.classList.remove("all-selected");
                }
            });

            headerRow.appendChild(headerCheckbox);
            headerRow.appendChild(headerID);
            headerRow.appendChild(headerTitle);
            thead.appendChild(headerRow);

            for (let i = 0; i < pageData.length; i++) {
                const row = document.createElement("tr");
                const item = pageData[i];
                const checkboxCell = document.createElement("td");
                const idCell = document.createElement("td");
                const titleCell = document.createElement("td");
                checkboxCell.innerHTML = `<input type="checkbox" class="rowCheckbox">`;
                idCell.textContent = item.id;
                titleCell.textContent = item.title;

                checkboxCell.addEventListener("change", (event) => {
                    toggleRowSelection(event.target);

                    const allCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
                    const isAllChecked = Array.from(allCheckboxes).every((cb) => cb.checked);

                    if (isAllChecked) {
                        table.classList.add("all-selected");
                    } else {
                        table.classList.remove("all-selected");
                    }
                });

                row.appendChild(checkboxCell);
                row.appendChild(idCell);
                row.appendChild(titleCell);
                tbody.appendChild(row);
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            tableContainer.innerHTML = ""; // 기존 테이블 초기화
            tableContainer.appendChild(table);
        }

        // 페이지 버튼 생성
        function createPagination() {
            paginationContainer.innerHTML = ""; // 기존 페이지 버튼 초기화

            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement("button");
                button.textContent = i;

                // 현재 페이지 버튼 표시
                if (i === currentPage) {
                    button.disabled = true;
                }

                button.addEventListener("click", () => {
                    currentPage = i;
                    const startIndex = (currentPage - 1) * itemsPerPage;
                    const endIndex = startIndex + itemsPerPage;
                    const pageData = data.slice(startIndex, endIndex);
                    createTable(pageData);
                    createPagination();
                });

                paginationContainer.appendChild(button);
            }
        }

        // 초기 페이지 표시
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = data.slice(startIndex, endIndex);
        createTable(pageData);
        createPagination();

        // 전체 선택 체크박스 이벤트 처리
        const checkAllCheckbox = document.getElementById("checkAll");
        checkAllCheckbox.addEventListener("change", () => {
            const checkboxes = document.querySelectorAll(".rowCheckbox");
            checkboxes.forEach((checkbox) => {
                checkbox.checked = checkAllCheckbox.checked;
                toggleRowSelection(checkbox);
            });

            if (checkAllCheckbox.checked) {
                tableContainer.querySelector("table").classList.add("all-selected");
            } else {
                tableContainer.querySelector("table").classList.remove("all-selected");
            }
        });

        // 행의 체크박스 클릭 이벤트 처리
        function toggleRowSelection(checkbox) {
            const row = checkbox.parentNode.parentNode;
            const rowIndex = Array.from(row.parentNode.children).indexOf(row);

            if (checkbox.checked) {
                row.classList.add("selected");
                selectedRows.push(rowIndex);
            } else {
                row.classList.remove("selected");
                const index = selectedRows.indexOf(rowIndex);
                if (index > -1) {
                    selectedRows.splice(index, 1);
                }
            }

            if (selectedRows.length === data.length) {
                checkAllCheckbox.checked = true;
            } else {
                checkAllCheckbox.checked = false;
            }
        }

        // 드래그 시작
        function dragStart(event) {
            if (selectedRows.length === 0) {
                event.preventDefault();
                return;
            }

            draggedElement = event.target.closest("tr");
            prevIndex = Array.from(draggedElement.parentNode.children).indexOf(draggedElement);
            event.dataTransfer.effectAllowed = "move";
        }

        // 드래그 중
        function dragOver(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
            const targetElement = event.target.closest("tr");
            if (targetElement && targetElement != draggedElement) {
                const currentIndex = Array.from(targetElement.parentNode.children).indexOf(targetElement);
                if (currentIndex > prevIndex) {
                    targetElement.parentNode.insertBefore(draggedElement, targetElement.nextSibling);
                } else {
                    targetElement.parentNode.insertBefore(draggedElement, targetElement);
                }
                prevIndex = currentIndex;
            }
        }

        // 드래그 종료
        function dragEnd(event) {
            draggedElement = null;
            prevIndex = null;
        }

        // 테이블에 드래그 이벤트 리스너 추가
        const table = tableContainer.querySelector("table");
        table.addEventListener("dragstart", dragStart);
        table.addEventListener("dragover", dragOver);
        table.addEventListener("dragend", dragEnd);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
