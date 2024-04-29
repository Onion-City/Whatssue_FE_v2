// YYYY/MM/DD 요일
export function formatDate(date: Date) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = days[date.getDay()];
    return `${year}/${month}/${day} ${dayOfWeek}요일`;
}

// YYYY년 MM월 DD일 요일
export function formatDateKor(date: Date): string {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    return `${year}년 ${month < 10 ? '0' + month : month}월 ${day < 10 ? '0' + day : day}일 ${dayOfWeek}요일`;
  }
  

// 오전/오후 HH:MM
export function formatTime(date: Date) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? '오후' : '오전';
    hours %= 12;
    hours = hours || 12;
    return `${ampm} ${hours}:${minutes}`;
}

// YYYY년 M월 D일 HH:MM
export function formatDateTime(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
}