import styled from "styled-components";


export const ModalWrapper = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 100;
`;

export const FriendWindowMenu = styled.div`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
width: 360px;
height: 550px;
border: 1px solid rgb(100, 100, 100);
margin: auto;
color: rgb(0, 0, 0);
background: rgb(255, 255, 255);
`;

export const ModalCloseH4 = styled.h4`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
margin: 0px;
padding: 25px 20px;
font-size: 18px;
font-weight: 600;
`;

export const ModalCloseIcon =styled.i`
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-family: "Font Awesome 5 Free";
font-weight: 900;
position: absolute;
top: 15px;
right: 15px;
font-size: 15px;
color: rgb(0, 0, 0);
z-index: 100;
cursor: pointer;
`;

export const UserListModal = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 100;
`;

export const UserListSection =styled.section`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
position: absolute;
margin: 0px;
inset: 150px 0px 80px;
width: 100%;
overflow: auto;
`;

export const UserListForm = styled.form`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
padding: 0px;
margin: 0px;
`
export const UserListUl = styled.ul`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
padding: 0px;
margin: 0px;
list-style: none;
`
export const UserProfileLable = styled.label`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
list-style: none;
box-sizing: border-box;
position: relative;
display: block;
width: 100%;
`
export const UserProfileLi = styled.li`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
margin: 0px;
list-style: none;
position: relative;
padding: 20px 100px 20px 180px;
padding-left: 80px;
`

export const UserProfileImg = styled.img`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
list-style: none;
box-sizing: border-box;
border: 0px none;
position: absolute;
width: 45px;
height: 45px;
border-radius: 15px;
left: 20px;
top: 10px;
cursor: auto;
`
export const UserProfileP = styled.p`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
list-style: none;
box-sizing: border-box;
padding: 0px;
margin: 0px;
color: rgb(112, 112, 112);
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
min-height: 19px;
font-size: 12px;
`

export const UserProfileB = styled.b`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
list-style: none;
white-space: nowrap;
box-sizing: border-box;
color: rgb(0, 0, 0);
font-weight: bold;
font-size: 14px;
`

export const UserProfileInput = styled.input`
list-style: none;
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
position: absolute;
top: 25px;
right: 15px;
`

export const UserListFooterBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: fixed;
bottom: 0px;
left: 0px;
width: 100%;
height: 80px;
border-top: 1px solid rgb(220, 220, 220);
text-align: right;
`;

export const MenuSelectBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
margin: 0px;
padding: 0px 20px;
border-bottom: 1px solid rgb(220, 220, 220);
`;

export const MenuUserList = styled.span`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
display: inline-block;
font-size: 13px;
font-weight: bold;
border-bottom: 1px solid rgb(0, 0, 0);
padding: 10px 0px;
cursor: pointer;
`;

export const DeActiveMenuUserList = styled.span`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
color: gray;
box-sizing: border-box;
display: inline-block;
font-size: 13px;
font-weight: bold;
border-bottom: 0px solid rgb(0, 0, 0);
padding: 10px 0px;
cursor: pointer;
`;

export const MenuFriendList = styled.span`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
display: inline-block;
font-size: 13px;
font-weight: bold;
border-bottom: 1px solid rgb(0, 0, 0);
padding: 10px 0px;
padding-left: 15px;
cursor: pointer;
`;

export const DeActiveMenuFriendList = styled.span`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
color: gray;
box-sizing: border-box;
display: inline-block;
font-size: 13px;
font-weight: bold;
border-bottom: 0px solid rgb(0, 0, 0);
padding: 10px 0px;
padding-left: 15px;
cursor: pointer;
`;

export const UserCount = styled.h3`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
font-weight: normal;
font-size: 12px;
color: rgb(180, 180, 180);
padding: 10px 20px;
`;

export const MenuClose = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
outline: none;
position: relative;
transform: translateY(50%);
border: 1px solid rgb(220, 220, 220);
background: rgb(255, 255, 255);
padding: 10px 25px;
margin-right: 10px;
cursor: pointer;
`

export const BackgroundDiv = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
position: fixed;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
min-height: 100vh;
background: rgb(200, 200, 200);
opacity: 0.5;
z-index: 99;
overflow: hidden;
`;

export const FriendAddButton = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
border: none;
outline: none;
position: absolute;
bottom: 10px;
right: 20px;
display: inline-block;
padding: 10px;
background: rgb(254, 229, 0);
cursor: pointer;
`;

export const RefuseButton = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
border: 1px solid #ddd;
outline: none;
position: absolute;
bottom: 10px;
right: 20px;
display: inline-block;
padding: 10px;
background: rgb(255, 255, 255);
cursor: pointer;
`;

export const AcceptButton = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
border: 1px solid #ddd;
outline: none;
position: absolute;
bottom: 10px;
right: 80px;
display: inline-block;
padding: 10px;
background: rgb(254, 229, 0);
cursor: pointer;
`;