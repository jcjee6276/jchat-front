import React from 'react';
import { FriednsAddButton, FriendNickName, FriendProfileBlock, FriendProfileImg, FriendWindowMenu, ModalCloseH4, ModalCloseIcon, ModalWrapper } from './addFriednsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSignOutAlt, faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
    //친구 추가 모달
const AddFriendsModal = () => {
    
    return(
        <ModalWrapper>
            <FriendWindowMenu>
                <ModalCloseIcon>
                    <FontAwesomeIcon icon={faTimes}/>
                </ModalCloseIcon>
                <ModalCloseH4>친구 추가</ModalCloseH4>
                <FriendProfileBlock>
                    <FriendProfileImg src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                    <FriendNickName>닉네임</FriendNickName>
                    <FriednsAddButton>친구 추가</FriednsAddButton>
                </FriendProfileBlock>
            </FriendWindowMenu>
        </ModalWrapper>
    )
}

export default AddFriendsModal;