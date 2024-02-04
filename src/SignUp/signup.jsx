import React, { useCallback, useEffect, useState } from 'react';
import { Body, ContentWrapperMain, DontSignupButton, NicknameLable, PasswordCheckLabel, PasswordH3, PasswordInput, PasswordLabel, PasswordSpan, RedCaution, SignupButton, SignupContainger, SignupH2, SignupHeader, SignupWrapper, SingupHeaderName, UseridH3, UseridInput, UseridLable, UseridSpan } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [id, setId] = useState('');
    const [passwd, setPasswd] = useState('');
    const [passwordCheck, setPasswordCheck ] = useState('');
    const [nickname, setNickname] = useState('');
    const [enableId, setEnableId] = useState(false);
    const [enableNickname, setEnableNickname] = useState(false);
    const [enableSubmit, setEnableSubmit] = useState(false);
    const navigate = useNavigate();

    //아이디 입력 상태, 비밀번호와 비밀번호 체크란이 동일하고 닉네임을 입력하고 아이디와 닉네임이 중복되지 않으면 상태 변경
    useEffect(()=>{
        if(id && passwd === passwordCheck && nickname && !enableId && !enableNickname){
            setEnableSubmit(true);
        } else {
            setEnableSubmit(false);
        }
    }, [id, passwd, passwordCheck, nickname, enableId, enableNickname])

    //화면에 입력한 비밀번호 value 값 저장
    const onChangePassword = useCallback((event)=>{
        setPasswd(event.target.value);
    }, [passwd])
    //화면에 입력한 비밀번호 체크 value 값 저장
    const onChangePasswordCheck = useCallback((event)=>{
        setPasswordCheck(event.target.value);
    }, [passwordCheck])
    //화면에 입력한 닉네임 value 값 저장
    const onChangeNickname = useCallback((event)=>{
        setNickname(event.target.value);
    }, [nickname])

    //아이디 중복체크 onBlur 사용하여 아이디 입력 후 focus가 벗어나면 서버로 중복체크 요청
    const idCheckDuplicate = async(data) => {
        await axios.get('/signup/checkduplicate', {params: {id: data}})
        .then((response)=> {
            setEnableId(response.data);
        })
    }
    //닉네임 중복체크 onBlur 사용하여 닉네임 입력 후 focus가 벗어나면 서버로 중복체크 요청
    const nicknameCheckDuplicate = async(data) => {
        await axios.get('/signup/checkduplicate', {params: {nickname: data}})
        .then((response)=> {
            console.log(response.data);
            setEnableNickname(response.data);
        })
    }

    //서버로 입력한 정보 전달
    const onSubmit = () =>{
        if(id && passwd && nickname){
            axios.post('/signup',{id, passwd, nickname})
            alert("회원가입 되셨습니다.")
            navigate("/");
        } else {
            alert("필수 정보를 입력해주세요.")
        }
        
    }

    const handleInputIdChange = (e) => {
        const value = e.target.value;
        setId(value);
    }
    


    return(
        <Body>
            <SignupWrapper>
                <SignupContainger>
                    {/* 로고 */}
                    <SignupHeader>
                        <SignupH2>
                            <SingupHeaderName href='/'>JCHAT</SingupHeaderName>
                        </SignupH2>
                    </SignupHeader>
                    {/* 가입 정보 입력 */}
                    <ContentWrapperMain>
                        {/* 아이디 입력폼 */}
                        <UseridLable>
                            <UseridH3>아이디</UseridH3>
                            <UseridSpan>
                                <UseridInput onFocus={()=>setEnableId(false)} onBlur={()=>idCheckDuplicate(id)} onChange={handleInputIdChange}/>
                            </UseridSpan>
                            {!id ? 
                            <RedCaution>필수 정보 입니다.</RedCaution>
                            :
                            <p></p>
                            } {enableId ? <RedCaution>이미 존재하는 ID입니다.</RedCaution> : <p></p>}
                        </UseridLable>
                        {/* 비밀번호 입력 폼 */}
                        <PasswordLabel>
                            <PasswordH3>비밀번호</PasswordH3>
                            <PasswordSpan>
                                <PasswordInput value={passwd} onChange={onChangePassword} type='password'/>
                            </PasswordSpan>
                            {!passwd ? 
                            <RedCaution>필수 정보 입니다.</RedCaution>
                            :
                            <p></p>
                            } 
                        </PasswordLabel>
                        {/* 비밀번호 확인 폼 */}
                        <PasswordCheckLabel>
                            <PasswordH3>비밀번호 재확인</PasswordH3>
                            <PasswordSpan>
                                <PasswordInput value={passwordCheck} onChange={onChangePasswordCheck} type='password'/>
                            </PasswordSpan>
                            {passwd !== passwordCheck ? 
                            <RedCaution>비밀번호가 다릅니다.</RedCaution>
                            :
                            <p></p>
                            }
                        </PasswordCheckLabel>
                        {/* 닉네임 입력 폼 */}
                        <NicknameLable>
                            <UseridH3>닉네임</UseridH3>
                            <UseridSpan>
                                <UseridInput onFocus={()=>setEnableNickname(false)} onBlur={()=>nicknameCheckDuplicate(nickname)} onChange={onChangeNickname}/>
                            </UseridSpan>
                            {!nickname ? 
                            <RedCaution>필수 정보 입니다.</RedCaution>
                            :
                            <p></p>
                            } {enableNickname ? <RedCaution>이미 존재하는 닉네임입니다.</RedCaution> : <p></p>}
                        </NicknameLable>
                        {/* 가입하기 버튼 */}
                        {enableSubmit && <SignupButton onClick={onSubmit} >가입하기</SignupButton>}
                        {!enableSubmit &&<DontSignupButton>가입하기</DontSignupButton>}

                    </ContentWrapperMain>
                </SignupContainger>
            </SignupWrapper>
        </Body>
    )
}

export default Signup;