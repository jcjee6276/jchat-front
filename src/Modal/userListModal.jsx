import React, {useEffect, useRef, useState} from 'react'
import { MenuFriendList, FriendWindowMenu, MenuSelectBlock, MenuUserList, ModalCloseH4, ModalCloseIcon, ModalWrapper, UserListForm, UserListSection, UserListUl, UserProfileB, UserProfileImg, UserProfileLable, UserProfileLi, UserProfileP, UserCount, UserListFooterBlock, MenuClose, BackgroundDiv, FriendAddButton, DeActiveMenuUserList, DeActiveMenuFriendList, AcceptButton, RefuseButton } from './userListModalStyle';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
    //친구 추가 목록 모달
const UserListModal = ({onClose, setOnClose})=> {
    const modalRef = useRef(null);
    const {data = [], revalidate} = useSWR('/get-session', fetcher);
    const [userList, setUserList] = useState([]);
    const [userBox, setUserBox] = useState(true);
    const [reqBox, setReqBox] = useState(false);
    const [responseBoxList, setResponseBoxList] = useState([]);
    const id = data[0]?.id;
    const renderUserCount = userList.length > 1 && userList[1][0]?.count != null && userList[0] != null;

    //서버로 부터 친구 추가 가능한 목록을 받아온다.
    useEffect(()=> {
        axios.get('/friend/add/list', {params: {id}})
        .then((response)=> {
            setUserList(response.data);
            console.log(response.data);
        })
    }, [id, data])
    
    //모달 범위 밖을 누르면 부모 props에게 useState set값 false로 바꿔 모달창 Close
    useEffect(() => {
        const handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOnClose(false); 
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [onClose]);

    //유저 목록 클릭시
    const onClickUserBox = () => {
        setReqBox(false);
        setUserBox(true);
    }

    //수신함 목록 클릭시
    const onClickRequestBox = () => {
        setUserBox(false);
        setReqBox(true);
        
    }

    //서버로 부터 친구 요청 정보를 보낸다.
    const RequestFriendAdd = async (e,res_user) => {
        e.preventDefault();
        await axios.post('/friend/request', {
            req_user: id,
            res_user: res_user
        })
        
    }

    //수신함 setReqBox(true) 상태일 때 서버로부터 친구 요청 받은 리스트들을 출력
    useEffect(()=> {
        axios.post('/friend/response', {
            res_user: id
        })
        .then((response) => {
            console.log(response.data);
            setResponseBoxList(response.data);
        })
    }, [reqBox])

    
    // 수락 요청 서버로 전달
    const AcceptClick = async (e, reqUser) => {
        e.preventDefault();
        console.log(reqUser);
        await axios.post('/friend/accept', {
            req_user: reqUser,
            res_user: id
        })
    }
    // 거절 요청 서버로 전달
    const RefuseClick = async (e, reqUser) => {
        e.preventDefault();
        await axios.post('/friend/refuse', {
            req_user: reqUser,
            res_user: id
        })
    }

    

    return(
    <body>
        <BackgroundDiv></BackgroundDiv>
        <ModalWrapper ref={modalRef}>
            <FriendWindowMenu>

                <ModalCloseH4>친구 추가 목록</ModalCloseH4>
                
                <MenuSelectBlock>
                    {userBox ? 
                    <MenuUserList onClick={onClickUserBox}>
                        유저 목록
                    </MenuUserList>
                    :
                    <DeActiveMenuUserList onClick={onClickUserBox}>
                        유저 목록
                    </DeActiveMenuUserList>
                    }
                    {reqBox ? 
                    <MenuFriendList onClick={onClickRequestBox}>
                        수신함
                    </MenuFriendList>
                    :
                    <DeActiveMenuFriendList onClick={onClickRequestBox}>
                        수신함
                    </DeActiveMenuFriendList>
                    }
                    
                    
                </MenuSelectBlock>
                {renderUserCount && (
                    <UserCount>
                    전체회원 {userList[0]?.length}
                    </UserCount>
                )}
                

                <UserListSection>
                    <UserListForm>
                        <UserListUl>


                        {userBox && userList[0]?.map((item)=> {
                            console.log()
                            return(
                                <UserProfileLable>
                            <UserProfileLi>
                                <UserProfileImg src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                <UserProfileP>
                                    <UserProfileB>{item.nickname}</UserProfileB>
                                </UserProfileP>
                                
                                <FriendAddButton onClick={(e)=>{RequestFriendAdd(e, item.id); setOnClose(false)}}>추가</FriendAddButton>
                                
                            </UserProfileLi>
                        </UserProfileLable>
                            )
                        
                        })}

                        {!userBox && responseBoxList.map((item) => {
                            return(
                            <UserProfileLable>
                            <UserProfileLi>
                                <UserProfileImg src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                <UserProfileP>
                                    <UserProfileB>{item.nickname}</UserProfileB>
                                </UserProfileP>
                                
                                <AcceptButton onClick={(e)=>{AcceptClick(e, item.req_user); setOnClose(false);}}>수락</AcceptButton>
                                <RefuseButton onClick={(e)=>{RefuseClick(e, item.req_user); setOnClose(false);}}>거절</RefuseButton>
                                
                                
                            </UserProfileLi>
                        </UserProfileLable>
                            )
                        })}
                            
                            
                        </UserListUl>
                    </UserListForm>
                </UserListSection>

                <UserListFooterBlock>
                    <MenuClose onClick={()=>setOnClose(false)}>
                        닫기
                    </MenuClose>
                </UserListFooterBlock>

            </FriendWindowMenu>
        </ModalWrapper>
    </body>
    )

}

export default UserListModal;