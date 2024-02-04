import axios from 'axios';
//상태관리 library인 swr에 로그인한 회원 정보를 서버로 부터 받아오기 위한 module
const fetcher = (url) => {
return(
    axios.get(url).then((response)=> {
        const datalist = response.data;
        return datalist;
    })
)
}
export default fetcher;