import react, { useState } from 'react';
import { BaseMain, BaseSideBar, Body, ChatRoomB, ChatRoomCount, ChatRoomImg, ChatRoomLi, ChatRoomName, FriendsIcon, MainContentSection, MainHeaderSection, MenuContainer, MenuWrapper, SideBarChatLi, SideBarChatList, SideBarFriendsMenu, SideBarUl, SidebarChatIcon, SidebarFriendsLi, SidebarLogout, SidebarLogoutIcon, TitleBlockH2, TitleBlockSection } from './chatlistStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainChatList = () => {
    const navigate = useNavigate();
    //더블 클릭시 해당 채팅방으로 이동한다.
    const handleChattingRoom = (roomNumber)=> {
        navigate(`/chat`, {
            state: {
                room: roomNumber
            }
        })
    }

    //로그아웃
    const logoutClick = async() => {
        const shouldLogout = window.confirm('로그아웃하시겠습니까?');
        if(shouldLogout) {
            await axios('/logout');
            navigate('/');
        }
    }

    return(
        <Body>
            <MenuWrapper>
                <MenuContainer>
                    {/* 좌측 사이드바 */}
                    <BaseSideBar>
                        <SideBarUl>
                            {/* 친구 목록 아이콘 */}
                            <SideBarFriendsMenu onClick={()=>navigate('/main')}>
                                <SidebarFriendsLi >
                                    <FriendsIcon>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </FriendsIcon>
                                </SidebarFriendsLi>
                            </SideBarFriendsMenu>
                            {/* 채팅 리스트 아이콘 */}
                            <SideBarChatList>
                                <SideBarChatLi>
                                    <SidebarChatIcon>
                                         <FontAwesomeIcon icon={faComment}/>
                                    </SidebarChatIcon>
                                </SideBarChatLi>
                            </SideBarChatList>
                            {/* 로그아웃 아이콘 */}
                            <SidebarLogout onClick={logoutClick}>
                                <SidebarLogoutIcon>
                                    <FontAwesomeIcon icon={faSignOutAlt}/>
                                </SidebarLogoutIcon>
                            </SidebarLogout>
                        </SideBarUl>
                    </BaseSideBar>
                    {/* 채팅 목록 */}
                    <BaseMain>
                        <MainHeaderSection>
                            <TitleBlockSection>
                                <TitleBlockSection>
                                    <TitleBlockH2>채팅 목록</TitleBlockH2>
                                </TitleBlockSection>
                            </TitleBlockSection>
                        </MainHeaderSection>
                        {/* 채팅 방 컴포넌트 */}
                        <MainContentSection>
                            <ChatRoomLi onDoubleClick={()=>handleChattingRoom(1)}>
                                <ChatRoomImg src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                <ChatRoomName>
                                    <ChatRoomB>1번방</ChatRoomB>
                                </ChatRoomName>
                                <ChatRoomCount>참여인원 수: 3</ChatRoomCount>
                            </ChatRoomLi>

                            <ChatRoomLi onDoubleClick={()=>handleChattingRoom(2)}>
                                <ChatRoomImg src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                <ChatRoomName>
                                    <ChatRoomB>2번방</ChatRoomB>
                                </ChatRoomName>
                                <ChatRoomCount>참여인원 수: 3</ChatRoomCount>
                            </ChatRoomLi>
                        </MainContentSection>
                    </BaseMain>

                </MenuContainer>
            </MenuWrapper>
        </Body>
    )
}

export default MainChatList;