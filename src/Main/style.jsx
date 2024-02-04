import styled from "styled-components";

export const Body = styled.body`
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 0px;
margin: 0px;
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
`;

export const MenuWrapper = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
width: 100%;
`;

export const MenuContainer = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
width: 100%;
display: flex;
`;

export const BaseSideBar = styled.aside`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: fixed;
top: 0px;
left: 0px;
width: 100px;
height: 100%;
min-height: 100vh;
background: rgb(223, 223, 223);
padding-top: 20px;
z-index: 2;
`;

export const SideBarUl = styled.ul`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
list-style: none;
`;

export const SideBarFriendsMenu = styled.a`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
list-style: none;
box-sizing: border-box;
color: rgb(34, 34, 34);
text-decoration: none;
display: inline-block;
width: 100%;
pointer-events: none;
`;

export const SidebarFriendsLi = styled.li`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
pointer-events: none;
box-sizing: border-box;
margin: 0px;
list-style: none;
padding: 10px;
text-align: center;
font-size: 25px;
cursor: pointer;
position: relative;
color: black;
`;

export const FriendsIcon = styled.i`
pointer-events: none;
list-style: none;
text-align: center;
font-size: 25px;
cursor: pointer;
color: black;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-family: "Font Awesome 5 Free";
font-weight: 900;
`;

export const SideBarChatList = styled.a`
font-family: "Nanum Gothic", sans-serif;
font-size: 13px;
line-height: 1.5;
list-style: none;
box-sizing: border-box;
color: rgb(34, 34, 34);
text-decoration: none;
display: inline-block;
width: 100%;

&:hover {
    background-color: lightgray;
}

`;

export const SideBarChatLi = styled.li`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
list-style: none;
padding: 10px;
text-align: center;
font-size: 25px;
color: rgb(166, 167, 168);
cursor: pointer;
position: relative;
`;

export const SidebarChatIcon = styled.i`
list-style: none;
text-align: center;
font-size: 25px;
color: rgb(166, 167, 168);
cursor: pointer;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-family: "Font Awesome 5 Free";
font-weight: 900;
`;

export const SidebarLogout = styled.li`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
list-style: none;
padding: 10px;
text-align: center;
font-size: 25px;
color: rgb(166, 167, 168);
cursor: pointer;
`;

export const SidebarLogoutIcon = styled.i`
list-style: none;
text-align: center;
font-size: 25px;
color: rgb(166, 167, 168);
cursor: pointer;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-family: "Font Awesome 5 Free";
font-weight: 900;
`;

export const BaseMain = styled.main`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding-left: 100px;
width: 100%;
min-height: 100vh;
`;

export const MainHeaderSection = styled.section`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: fixed;
top: 0px;
left: 0px;
padding: 20px 20px 0px 120px;
width: 100%;
height: 100px;
background-color: rgb(255, 255, 255);
z-index: 1;
`;

export const TitleBlockSection = styled.section`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: relative;
`;

export const TitleBlockH2 = styled.h2`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-size: 20px;
font-weight: bold;
margin-bottom: 10px;
`;

export const TitleBlockIcon = styled.i`
color: rgb(34, 34, 34);
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-family: "Font Awesome 5 Free";
font-weight: 900;
cursor: pointer;
font-size: 20px;
position: absolute;
top: 5px;
right: 0px;
`;

export const MainContentSection = styled.section`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
position: absolute;
top: 100px;
bottom: 5px;
left: 0px;
width: 100%;
overflow: auto;
`;

export const ContentMyProfileBlock = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
position: relative;
padding: 25px 10px 25px 185px;
`;

export const ContentMyprofileImage = styled.img`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
border: 0px none;
position: absolute;
top: 18px;
left: 120px;
width: 50px;
height: 50px;
border-radius: 15px;
cursor: pointer;
`;

export const ContentMyProfileName = styled.p`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
color: rgb(112, 112, 112);
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
min-height: 19px;
font-size: 12px;
`;

export const ProfileNameBold = styled.b`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
white-space: nowrap;
box-sizing: border-box;
color: rgb(0, 0, 0);
font-weight: bold;
font-size: 14px;
`;

export const ContentFirendsBorder = styled.div`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
border-top: 0.5px solid rgb(220, 220, 220);
margin: 10px 20px 0px 120px;
padding-top: 10px;
`;

export const FriendsCount = styled.p`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
font-size: 12px;
color: rgb(180, 180, 180);
`;

export const ContentFriendsUl = styled.ul`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
padding: 0px;
margin: 0px;
list-style: none;
`;

export const ContentFriendsLi = styled.li`
font-family: "Nanum Gothic", sans-serif;
color: rgb(34, 34, 34);
font-size: 13px;
line-height: 1.5;
box-sizing: border-box;
margin: 0px;
list-style: none;
position: relative;
padding: 20px 100px 20px 180px;


`;

export const ContentFriendsName = styled.p`
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
`;

export const FriendsName = styled.b`
font-family: "Nanum Gothic", sans-serif;
line-height: 1.5;
list-style: none;
white-space: nowrap;
box-sizing: border-box;
color: rgb(0, 0, 0);
font-weight: bold;
font-size: 14px;
`;

export const FriendDeleteButton = styled.button`
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