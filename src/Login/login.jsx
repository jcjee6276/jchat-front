import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { Body, CanLoginButton, CanLoginSpan, ContentWrapper, FooterHeader, FooterLi, FooterUl, KakaoImage, LoginButton, LoginContainer, LoginForm, LoginHeader, LoginId, LoginPw, LoginSpan, LoginWrapper, SignUp } from './style';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';


const Login = () => {
    const [id, setId] = useState('');
    const [passwd, setPasswd] = useState('');
    const [buttonChange, setButtonChange] = useState(false);
    const {data = [], revalidate} = useSWR('/get-session', fetcher);
    const navigate = useNavigate();

    //아이디 입력 input에 입력 시 data 변수에 담기 위한 함수
    const onChangeUserId = useCallback((event) => {
        setId(event.target.value);
    }, [id]);
    //비밀번호 입력 시 변수 담기
    const onChangeUserPw = useCallback((event) => {
        setPasswd(event.target.value);
    }, [passwd])

    //로그인 성공 시 server로 부터 세션 할당된 유저 정보 받아와 상태 관리
    useEffect(()=>{
        if(data[0] !== undefined) {
            navigate('/Main');
        }
    }, [data, revalidate]);
    
    
    //비밀번호 4자리 이상 입력 시 버튼 활성화
    useEffect(()=>{
        if(id && passwd.length===4){
            setButtonChange(true)
        }
        if(!id || passwd.length < 4){
            setButtonChange(false);
        }
    }, [id, passwd]);

    //서버로 로그인 정보 전송
    const onSubmit = ()=> {
        axios.post('/login', {
            id, passwd
        }, 
        ).then((response)=>{
            console.log(response.data);
        })
    }

    

    return(
        <Body>
            <LoginWrapper>
                <LoginContainer>
                    {/* 로고 및 배경  */}
                    <LoginHeader>
                        <KakaoImage src={process.env.PUBLIC_URL+'/img/kakao_logo.png'}/>
                    </LoginHeader>
                    {/* 로그인 폼 및 버튼 */}
                    <ContentWrapper>
                        <LoginForm onSubmit={onSubmit}>
                            <LoginId value={id} onChange={onChangeUserId} placeholder='아이디'/>
                            <LoginPw type='password' value={passwd} onChange={onChangeUserPw} placeholder='비밀번호'/>

                            {buttonChange === false ?
                            <LoginButton>
                                <LoginSpan>로그인</LoginSpan>
                            </LoginButton>

                            :

                            <CanLoginButton>
                                <CanLoginSpan>로그인</CanLoginSpan>
                            </CanLoginButton>
                            }

                        </LoginForm>
                    </ContentWrapper>
                    
                    {/* 회원가입 */}
                    <FooterHeader>
                        <FooterUl>
                            <FooterLi>
                                <SignUp href='/signupPage'>회원가입</SignUp>
                            </FooterLi>
                        </FooterUl>
                    </FooterHeader>

                </LoginContainer>
            </LoginWrapper>
        </Body>
        
    )
}

export default Login;