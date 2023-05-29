import { loanData } from './loanData.js';

function createTable() {
    const tableBody = document.querySelector('#loan-table tbody');
    let selectedRow = null; // 선택된 행을 저장할 변수
    loanData.forEach((data, index) => {
        const row = document.createElement('tr');
        row.addEventListener('click', () => {
            // 클릭 시 선택된 행과 다른 행의 처리
            if (selectedRow === row) {
                // 이미 선택된 행을 다시 클릭한 경우, 배경색 초기화 및 대출 정보 숨기기
                row.style.backgroundColor = 'initial';
                selectedRow = null;
                hideLoanInfo();
            } else {
                // 다른 행을 클릭한 경우, 선택된 행 변경 및 배경색 설정, 대출 정보 업데이트
                if (selectedRow) {
                    selectedRow.style.backgroundColor = 'initial';
                }
                row.style.backgroundColor = 'lightblue';
                selectedRow = row;
                displayLoanInfo(data); // 클릭된 행의 정보 표시
            }
        });
        row.style.cursor = 'pointer'; // 커서를 손가락 모양으로 변경

        const loanNumberCell = document.createElement('td');
        loanNumberCell.textContent = index + 1;
        row.appendChild(loanNumberCell);

        const registrationNumberCell = document.createElement('td');
        registrationNumberCell.textContent = data.등록번호;
        row.appendChild(registrationNumberCell);

        const titleCell = document.createElement('td');
        titleCell.textContent = data.도서명;
        row.appendChild(titleCell);

        const volumeCell = document.createElement('td');
        volumeCell.textContent = data.도서권수;
        row.appendChild(volumeCell);

        const loanDateCell = document.createElement('td');
        loanDateCell.textContent = data.대출일;
        row.appendChild(loanDateCell);

        const returnDateCell = document.createElement('td');
        returnDateCell.textContent = data.반납예정일;
        row.appendChild(returnDateCell);

        const reservationCountCell = document.createElement('td');
        reservationCountCell.textContent = data.예약건수;
        row.appendChild(reservationCountCell);

        const extensionCountCell = document.createElement('td');
        extensionCountCell.textContent = data.연장횟수;
        row.appendChild(extensionCountCell);

        tableBody.appendChild(row);
    });
}

function displayLoanInfo(loan) {
    const loanUserSpan = document.querySelector('#loan-user');
    const loanGroupSpan = document.querySelector('#loan-group');
    const loanMaxCountSpan = document.querySelector('#loan-max-count');
    const loanCurrentCountSpan = document.querySelector('#loan-current-count');
    const loanOverdueCountSpan = document.querySelector('#loan-overdue-count');

    // 이용자 정보 표시
    loanUserSpan.textContent = '박준하';
    loanGroupSpan.textContent = '데이터분석과, 학생';

    // 대출 정보 업데이트
    loanMaxCountSpan.textContent = getMaxLoanCount();
    loanCurrentCountSpan.textContent = getCurrentLoanCount(loan.이용자ID);
    loanOverdueCountSpan.textContent = getOverdueLoanCount(loan.이용자ID);

    // 대출 정보 표시
    const loanInfoWrapper = document.querySelector('.loan-info-wrapper');
    loanInfoWrapper.style.display = 'block';
}

function hideLoanInfo() {
    const loanInfoWrapper = document.querySelector('.loan-info-wrapper');
    loanInfoWrapper.style.display = 'none';
}

// 대출 정보 계산 함수들
function getMaxLoanCount() {
    return 10; // 최대 대출 건수를 반환하는 로직을 구현해야 합니다.
}

function getCurrentLoanCount(userId) {
    return 5; // 현재 대출 건수를 반환하는 로직을 구현해야 합니다.
}

function getOverdueLoanCount(userId) {
    return 2; // 연체 대출 건수를 반환하는 로직을 구현해야 합니다.
}

export { createTable };
