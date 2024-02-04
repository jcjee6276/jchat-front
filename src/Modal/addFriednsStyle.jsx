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
height: 300px;
border: 1px solid rgb(100, 100, 100);
margin: auto;
color: rgb(0, 0, 0);
background: rgb(255, 255, 255);
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

export const FriendProfileBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
padding: 0px;
margin: 0px;
margin-top: 10px;
`;

export const FriendProfileImg = styled.img`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
border: 0px none;
display: block;
width: 90px;
height: 90px;
border-radius: 35px;
margin: auto;
`;

export const FriendNickName = styled.p`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
color: rgb(0, 0, 0);
box-sizing: border-box;
padding: 0px;
margin: 0px;
text-align: center;
padding-top: 10px;
`;

export const FriednsAddButton = styled.button`
box-sizing: border-box;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
border: none;
outline: none;
position: absolute;
bottom: 20px;
right: 20px;
display: inline-block;
padding: 10px;
background: rgb(254, 229, 0);
cursor: pointer;
`;