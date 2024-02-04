import { React, useCallback, useEffect, useRef, useState } from 'react';
import { BaseDiv, BeforeButton, BeforeIcon, Body, CanSubmitButton, CannotSubmitButton, ChatBlockChatWrapper, ChatDiv, ChatRightBlock, ChatText, ChattingRommContainer, ContentWrapper, EnterBlock, EnterSpan, FooterForm, FooterWrapper, HeaderWrapper, LeftChatBlock, LeftMessageBlock, LeftMessageWrapper, LeftNameBlock, LeftProfileImg, LeftTimeSpan, NicknameSpan, ReadCount, TimeSpan } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import io from 'socket.io-client';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import getNowTime from '../utils/getNowTiem';
import { useLocation, useNavigate } from 'react-router-dom';

const Chat = () => {
    const {data = []} = useSWR('/get-session', fetcher);
    const socket = io(`http://13.125.40.120/:5001`);
    const [sendMessage, setSendMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [receiveMessage , setReceiveMessage] = useState('');
    const [enterUser , setEnterUser] = useState('');
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const roomName = location.state.room;

    //socket에 전달할 룸 번호, 닉네임
    let room = {roomName: roomName, nickname: data[0]?.nickname}
    // console.log(`${process.env.REACT_APP_NODE_URL}`)

    // 입력한 text changeMessage 변수에 할당
    const onChangeMessage = useCallback((e)=> {
        setSendMessage(e.target.value);
    })

    //룸 입장
    useEffect(() => {
        socket.emit('join_room', room);

        // return() => {
        //     socket.emit('leave_room', room);
        // }
    })
    
    // 메세지 보내기 핸들러 
    const sendHandler = async (e) => {
        const messageData = {
            id: data[0]?.id,
            message: sendMessage,
            nickname: data[0]?.nickname,
            room: roomName,
            time: getNowTime(),
        }
        if( !e.shiftKey && e.key ==="Enter") {
            await socket.emit('sendMessage', messageData);
            setSendMessage('');
            setReceiveMessage('');
            e.preventDefault();
        }
    }

    // 메세지 박스가 화면에 벗어나지 않게 스크롤 고정
    const scrollToBottom = () => {
        if(scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }

    //server로 보낸 메세지 받아서 receiveMessage로 할당
    useEffect(()=> {
        const handleReceiveMessage = (data) => {
            setReceiveMessage(data);
        }
        socket.on('receiveMessage', handleReceiveMessage);
        scrollToBottom();

        return() => {
            socket.off('receiveMessage', handleReceiveMessage);
        };
    }, [messageList])

    //유저 입장 시 room번호와 닉네임 전달
    useEffect(()=> {
        socket.emit('userEnter', room);
    }, [data])


    //server로 보낸 입장한 nicname 받아서 setEnterUser로 할당
    useEffect(()=> {
        const handleEnterUser = (data) => {
            setEnterUser(data);
        }
        socket.on('userEnterNickname', handleEnterUser);
        return() => {
            socket.off('userEnterNickname', handleEnterUser);
        }
    }, [messageList])


    //room에 입장하면 nickname messageList에 추가하여 메세지 순서대로 출력
    useEffect(()=> {
        if(enterUser){
            setMessageList((userNickname)=>[...userNickname, enterUser]);
            setEnterUser('');
        }
    })



    //서버로 부터 받은 메세지 화면에 출력하기 위해 messageList에 할당
    useEffect(()=> {
        if(receiveMessage){
            setMessageList((emessageList)=>[...emessageList, receiveMessage]);
            setReceiveMessage('');
        }
    }, [receiveMessage])
    return(
        <Body>
            <BaseDiv>
                <ChattingRommContainer>
                    <HeaderWrapper>
                        {/* 뒤로 가기 버튼 클릭시 채팅 목록으로  */}
                        <BeforeButton onClick={()=>{
                            navigate('/chatlist')
                        }}>
                            <BeforeIcon>
                            <FontAwesomeIcon icon={faArrowLeft} />
                                
                            </BeforeIcon>
                            
                        </BeforeButton>

                        <NicknameSpan>번방</NicknameSpan>
                
                    </HeaderWrapper>

                        {/* 스크롤 범위 지정 */}
                    <ContentWrapper id='scrollRef' ref={scrollRef}>
                        {/* 채팅 박스 */}
                        {messageList.map((item) => {
                            if(!item.id) {
                                return (
                                    <EnterBlock>
                                        <EnterSpan>{item} 님이 입장하셨습니다.</EnterSpan>
                                    </EnterBlock>
                                )
                            } else
                            if(data[0]?.id !== item.id) {return(
                                <LeftChatBlock>
                                    <LeftProfileImg src={process.env.PUBLIC_URL+'/img/base_profile.jpg'}/>
                                        <LeftNameBlock>{item.nickname}</LeftNameBlock>
                                            <LeftMessageBlock>
                                        <LeftMessageWrapper>{item.message}
                                            <LeftTimeSpan>{item.time}</LeftTimeSpan>
                                        </LeftMessageWrapper>
                                    </LeftMessageBlock>
                                </LeftChatBlock>
                            )}
                            
                            return(
                            // 채팅 박스 컴포넌트
                            <ChatRightBlock>
                                <ChatDiv>
                                    <ChatBlockChatWrapper>
                                            {item.message}
                                        <TimeSpan>
                                            {item.time}
                                        </TimeSpan>
                                    </ChatBlockChatWrapper>
                                </ChatDiv>
                            </ChatRightBlock>
                            )
                        })}
                            
                    </ContentWrapper>

                    {/* 채팅 입력 및 전송창 */}
                    <FooterWrapper>
                        <FooterForm>
                            <ChatText value={sendMessage} onChange={onChangeMessage} onKeyPress={sendHandler}/>
                            <CanSubmitButton onClick={sendHandler}>전송</CanSubmitButton>
                        </FooterForm>
                    </FooterWrapper>


                </ChattingRommContainer>
            </BaseDiv>
            

        </Body>
        
    )
}

export default Chat;