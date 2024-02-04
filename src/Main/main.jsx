import React, { useEffect, useState } from 'react';
import { BaseMain, BaseSideBar, Body, ContentFirendsBorder, ContentFriendsLi, ContentFriendsName, ContentFriendsUl, ContentMyProfileBlock, ContentMyProfileName, ContentMyprofileImage, FriendDeleteButton, FriendsCount, FriendsIcon, FriendsName, MainContentSection, MainHeaderSection, MenuContainer, MenuWrapper, ProfileNameBold, SideBarChatLi, SideBarChatList, SideBarFriendsMenu, SideBarUl, SidebarChatIcon, SidebarFriendsLi, SidebarLogout, SidebarLogoutIcon, TitleBlockH2, TitleBlockIcon, TitleBlockSection } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserListModal from '../Modal/userListModal';

const Main = () => {
    const {data = [], revalidate} = useSWR('/get-session', fetcher);
    const navigate = useNavigate();
    const [friendList, setFriendList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const id = data[0]?.id;

    //친구 추가 목록 모달로 props 넘겨준다.  의도 : 모달창 범위 밖을 클릭시 모달 창이 꺼지게 하기 위함
    const openModal = () => {
        setIsOpen(true);
    }

    //친구 삭제 함수 클릭시 서버로 로그인한 회원 id와 삭제할 회원 id 정보 넘겨준다.
    const friendDeleteClick = async(user) => {
        const deleteFriend = window.confirm(user+'님을 친구 목록에서 삭제하시겠습니까?');
        if(deleteFriend){
            await axios.post('/friend/delete', {
                req_user: id,
                res_user: user
            }).then((response)=> {
                console.log(response.data);
            })
        }
        
    }

    //로그아웃
    const logoutClick = async() => {
        const shouldLogout = window.confirm('로그아웃하시겠습니까?');
        if(shouldLogout) {
            await axios('/logout');
            navigate('/');
        }
    }

    //초기에 서버로 부터 친구 목록을 받아와 출력
    useEffect(()=>{
        axios.get('/friend/active/list', {params: {id}})
        .then((response) => {
            setFriendList(response.data);
        })
    })

    //로그인하지 않은 상태면 로그인 화면으로 이동
    if(!data[0]){
        navigate('/');
    }

    return(
        <Body>
            <MenuWrapper>
                <MenuContainer>
                    {/* 좌측 사이드바 */}
                    <BaseSideBar>
                        <SideBarUl>
                            {/* 친구 목록 아이콘 */}
                            <SideBarFriendsMenu>
                                <SidebarFriendsLi>
                                    <FriendsIcon>
                                        <FontAwesomeIcon icon={faUser} />
                                    </FriendsIcon>
                                </SidebarFriendsLi>
                            </SideBarFriendsMenu>
                            {/* 채팅 리스트 아이콘 */}
                            <SideBarChatList onClick={()=>navigate('/chatlist')}>
                                <SideBarChatLi>
                                    <SidebarChatIcon>
                                        <FontAwesomeIcon icon={faComment}/>
                                    </SidebarChatIcon>
                                </SideBarChatLi>
                            </SideBarChatList>
                            {/* 로그아웃 아이콘 */}
                            <SidebarLogout onClick={logoutClick}>
                                <SidebarLogoutIcon>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </SidebarLogoutIcon>
                            </SidebarLogout>
                        </SideBarUl>
                    </BaseSideBar>
                    {/* 메인 친구 목록 및 프로필 */}
                    <BaseMain>
                        <MainHeaderSection>
                            <TitleBlockSection>
                                <TitleBlockH2>친구 목록</TitleBlockH2>
                                {/* 친구 추가 목록 모달  */}
                                <TitleBlockIcon onClick={openModal}>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </TitleBlockIcon>
                                {isOpen && <UserListModal onClose={isOpen} setOnClose={setIsOpen} />}
                            </TitleBlockSection>
                        </MainHeaderSection>
                        <MainContentSection>
                            {/* 내 프로필 정보 */}
                            <ContentMyProfileBlock>
                                <ContentMyprofileImage src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                <ContentMyProfileName>
                                    <ProfileNameBold>{data[0]?.nickname}</ProfileNameBold>
                                </ContentMyProfileName>
                            </ContentMyProfileBlock>
                            {/* 친구 수 */}
                            <ContentFirendsBorder>
                                <FriendsCount>친구 {friendList.length}</FriendsCount>
                            </ContentFirendsBorder>
                            {/* 친구 리스트 */}
                            <ContentFriendsUl>
                                {friendList.map((item, key)=> {
                                    return(
                                        <ContentFriendsLi>
                                             <ContentMyprofileImage src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                            <ContentFriendsName>
                                                <FriendsName>{item.nickname}</FriendsName>
                                                
                                            </ContentFriendsName>
                                            <p></p>
                                            <FriendDeleteButton onClick={()=>friendDeleteClick(item.user)}>친구 삭제</FriendDeleteButton>
                                         </ContentFriendsLi>
                                    )
                                })}
                                
                            </ContentFriendsUl>
                        </MainContentSection>
                    </BaseMain>
                </MenuContainer>
            </MenuWrapper>
        </Body>
    )
}

export default Main;