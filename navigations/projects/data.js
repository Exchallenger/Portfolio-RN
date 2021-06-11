export const projectData = 
    {
    Rproject:['CardMaker','Youtube'],
    RNproject:['Weather','Movie','Pet','SI계산기'],
    JSproject:['Portfoilo','BugGame'],
    TSproject:[],
    Nodeproject:[]
    };


export const Allnum = (projectData.JSproject.length + projectData.Rproject.length +
    projectData.RNproject.length + projectData.TSproject.length
    + projectData.Nodeproject.length
    );

export const rnum = projectData.Rproject.length + projectData.RNproject.length;

export const sources = [
    {src:require('../../images/Card.png'),
    name:'Business\nCard Maker',type:'React',exp:'명함을 세가지 테마로 꾸밀 수 있게 제작하였습니다. Firebase를 이용하여 로그인과 저장기능을 구현하였고, 바로바로 적용되는 리얼타임으로 구현해보았습니다.',
    title:'Business Card Maker',date:133,qr:null,
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'react',color:"rgb(94,205,242)",skill:'React',
    Iname2:'firebase',color2:"rgb(234,166,62)",skill2:'Firebase'},

    {src:require('../../images/YouTube.png'),
    name:'YouTube \n Clone',type:'React',exp:'유튜브 API를 이용하여 인기있는 비디오 불러오기, 검색, 동영상 재생기능과 Context-api를 이용하여 다크모드를 구현했습니다.',
    title:'YouTube Clone',date:133,qr:null,
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'react',color:"rgb(94,205,242)",skill:'React'},

    {src:require('../../images/wea1.png'),src2:require('../../images/wea2.png'),
    name:'Weather\nApp',type:'RN',exp:'리액트 네이티브를 이용한 첫 어플입니다. expo-location을 이용하여 현재 위치를 받아오고, Weather api를 이용하여 현재 날씨를 알려줍니다.',
    title:'Weather App',date:133,qr:1,
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'react',color:"rgb(94,205,242)",skill:'React-Native'},

    {src:require('../../images/Movie.png'),src2:require('../../images/MV2.png'),
    name:'Movie\nApp',type:'RN',exp:'TheMovie api를 이용하여 여러 데이터들을 얻어와서 검색, 비슷한 영화, 유명한 영화나 TV프로그램을 찾아주는 어플입니다.',
    title:'Movie App',date:133,qr:require('../../images/MvQR.png'),
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'react',color:"rgb(94,205,242)",skill:'React-Native'},

    {src:require('../../images/Port.png'),
    name:'Portfolio',type:'JS',exp:'JavaScript를 이용한 첫 프로젝트입니다. 반응형, 애니메이션등을 이용하여 만들었습니다.',
    title:'Portfolio',date:133,qr:null,
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'language-javascript',color:"rgb(235,217,78)",skill:'JavaScript',},

    // {src:require('../../images/Habit.png'),
    // name:'Habit\nTracker',type:'React',exp:'리액트를 이용한 첫 프로젝트입니다. 습관들을 관리 할 수 있습니다.',
    // title:'Habit Tracker',date:133,qr:null,
    // link:'https://github.com/Exchallenger/HabitTracker-React',
    // Iname:'react',color:"rgb(94,205,242)",skill:'React'},

    {src:require('../../images/pet1.png'), src2:(require('../../images/pet2.png')),
    name:'Pet\nApp',type:'RN',exp:'Google Map api와 expo-location을 이용하여 현재위치를 받아와서 지도에 내 위치를 표시하고, 주변의 동물병원, 산책로, 펫샾등을 보여주고, 펫과 자신의 프로필을 만들 수 있습니다. 또한, 카카오 맵과 연동하여 길안내도 가능합니다.',
    title:'Pet App',date:133,qr:1,
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'react',color:"rgb(94,205,242)",skill:'React-Native'},

    // {src:require('../../images/pro2.jpeg'),
    // name:'BlockChain',type:'TS',exp:'This is good project haha',
    // title:'BlockChain',date:133,qr:null,
    // link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    // Iname:'language-typescript',color:"rgb(66,114,186)",skill:'TypeScript'},

    {src:require('../../images/Bug.png'),
    name:'BugGame',type:'JS',exp:'게임을 시작하면 랜덤한 위치에 당근과 벌레가 나옵니다. 제한시간안에 당근을 다 클릭하지 못하거나 벌레를 클릭하면 게임을 실패하게 됩니다.',
    title:'BugGame',date:133,qr:null,
    link:'https://github.com/Exchallenger/CardMaker-RN-FB',
    Iname:'language-javascript',color:"rgb(235,217,78)",skill:'JavaScript'},

    {src:require('../../images/cal1.png'),src2:require('../../images/cal2.png'),
    name:'SI 계산기',type:'RN',exp:'주식투자자들을 위한 계산기입니다. 현재 play store에 출시되어 있습니다.',
    title:'SI 계산기',date:133,qr:1,
    link:'https://github.com/Exchallenger/SICalculator-RN',
    Iname:'react',color:"rgb(94,205,242)",skill:'React-Native'},

];

const icon = [
    {name:'language-html5',key:1,data:'HTML',color:"rgb(204,87,52)"},
    {name:'language-css3',key:2,data:'CSS',color:"rgb(47,74,213)"},
    {name:'react',key:3,data:'React',color:"rgb(94,205,242)"},
    {name:'react',key:4,data:'React-Native',color:"rgb(94,205,242)"},
    {name:'nodejs',key:5,data:'Node.js',color:"rgb(110,151,101)"},
    {name:'language-typescript',key:6,data:'TypeScript',color:'rgb(66,114,186)' },
    {name:'language-javascript',key:7,data:'JavaScript',color:"rgb(235,217,78)"},
    {name:'firebase',key:8,data:'Firebase',color:"rgb(234,166,62)"},
]