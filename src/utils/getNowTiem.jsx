//채팅방에서 채팅이 출력될 때 메시지 박스 옆에 붙는 시간을 구현하기 위한 module
const getNowTime = () => {
    let hours = new Date(Date.now()).getHours();
    let minutes = new Date(Date.now()).getMinutes();
    // 오전/오후 구분
    const ampm = hours >= 12 ? '오후' : '오전';

    // 12시간제로 변경
    hours = hours % 12;
    hours = hours || 12; // 0시일 경우 12로 표시

    // 분이 한 자리 수일 경우 앞에 0을 추가
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // 포맷된 시간 문자열 반환
    return `${ampm} ${hours}:${minutes}`;
}

export default getNowTime;