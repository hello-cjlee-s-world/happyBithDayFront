const confirmBox = document.getElementById('confirmBox');
const brickContainer = document.querySelector('#brickContainer');
const mainContainer = document.querySelector('#mainContainer');
const faceBox = document.querySelector('#faceBox');
window.onload = () => {
    confirmBox.style.top = '30%';
    document.querySelector('#faceImg').style.animationPlayState = 'paused';
}

const button = document.querySelector('#confirmButton');
// 버튼 클릭시
button.addEventListener('click', ()=>{
    document.title = 'Happy Birthday!!';
    button.style.transform='scale(1.3)';
    setTimeout(() => {
        confirmBox.style.transition = '1s';
        confirmBox.style.transform = 'scale(9) rotateX(720deg) rotateY(600deg) rotateZ(840deg)';
        confirmBox.style.boxShadow='1px 1px 500px 1px lightgrey';
    }, 50);
    setTimeout(() => {
        confirmBox.style.opacity='0';
        // 벽돌 나오기
        madeWall();
        // 충격파 생성
        setTimeout(() => {
            const shock = document.createElement('div');
            shock.classList.add('shock');
            document.body.appendChild(shock);
        },5600)
        // 벽돌 위로 올라감
        setTimeout(() => {
            brickContainer.style.borderBottom = '3px solid black';
            brickContainer.style.transform = 'translateY(-200%)';
        }, 5700);
    }, 400);
    setTimeout(()=>{
        brickContainer.style.display = 'none';
        confirmBox.style.display = 'none';
        brickContainer.style.display = 'none';
        document.querySelector('.shock').style.display = 'none';

        mainContainer.style.display = 'block';
        lastCelebration();
    }, 7700);
});

// 벽돌 생성
const madeWall = () => {
    brickContainer.style.display = 'block';
    let zTop = 300;
    let zBottom = 300;
    const topWallMadeInterval = setInterval(() => {
        const topBrickContainer = document.querySelector('#topBrickContainer');
        const wallSrc = './public/img/brick.png';
        let piece = document.createElement('img');
        piece.classList.add('wallPiece');
        piece.style.zIndex = String(zTop);
        topBrickContainer.appendChild(piece);
        const changeList = ['color2', 'color3', 'pixel1', 'brick']
        let num = 0;
        const changeBrick = setInterval(() => {
            piece.src='./public/img/' + changeList[num] + '.png';
            if(num >= 3) {
                clearInterval(changeBrick)
            }
            num++;
        }, 10);
        zTop--;
    }, 40);
    const bottomWallMadeInterval = setInterval(() => {
        const bottomBrickContainer = document.querySelector('#bottomBrickContainer');
        const wallSrc = './public/img/brick.png';
        let piece = document.createElement('img');
        piece.classList.add('wallPiece');
        piece.style.zIndex = String(zBottom);
        bottomBrickContainer.appendChild(piece);
        const changeList = ['color2', 'color3', 'pixel1', 'brick']
        let num = 0;
        const changeBrick = setInterval(() => {
            piece.src='./public/img/' + changeList[num] + '.png';
            if(num >= 3) {
                clearInterval(changeBrick)
            }
            num++;
        }, 10);
        zBottom--;
    }, 40);
    setTimeout(() => {
       clearInterval(topWallMadeInterval); 
       clearInterval(bottomWallMadeInterval); 
    }, 5000);
}
    
const lastCelebration = () => {
    let colorNum = 0;
    document.querySelector('#faceImg').style.animationPlayState = 'running';
    colorCount = Math.floor(Math.random() * 5 + 7);
    let width = 28;
    let zValue = 100;
    setTimeout(() => {
        for(let i=0; i < colorCount; i++){
            setTimeout(() => {
                colorBallParade(width, zValue);
                width*=1.15;
                zValue-=1;
            }, i*150)
        }    
    }, 800);
    setTimeout(() => {
        pollenScatters();
        alphabetDancing();
    }, 800)
}

const colorBallParade = (width, zValue) => {
    const ball = document.createElement('div');
    c1 = Math.floor(Math.random() * 125 + 130).toString(16);
    c2 = Math.floor(Math.random() * 125 + 130).toString(16);
    c3 = Math.floor(Math.random() * 125 + 130).toString(16);
    ball.style.backgroundColor = '#'+c1+c2+c3;
    ball.style.width = String(width) + '%';
    ball.style.height = String(width) + 'vw';
    ball.style.zIndex = zValue;
    ball.classList.add('colorBall');
    ball.style.animationPlayState = 'running';
    faceBox.appendChild(ball);
}

const pollenScatters = () => {
    setInterval(() => {
        for(let i=0; i<(Math.random() * 400 + 150); i++){
            const pollenDiv = document.createElement('div');
            const pollen = document.createElement('img');
            pollenDiv.classList.add('pollenDiv');
            pollen.classList.add('pollen');
            pollenDiv.transition = String(Math.random() * 1 + 0.5);
            pollenDiv.style.width = String(Math.random() * 4 + 2) + '%';
            pollenDiv.style.opacity = `${Math.random() + 0.5}`;
            pollenDiv.style.zIndex = 1100;
            pollen.style.zIndex = 1100;
            pollen.src = './public/img/flowerPowder/' + 'flowerPowder' + String(Math.floor(Math.random() * 15 +1)) + '.png';
            pollenDiv.append(pollen);
            faceBox.append(pollenDiv);
            setTimeout(() => {
                faceBox.removeChild(pollenDiv);
            }, 2000);
        }
        // 꽃가루 애니메이션
        document.querySelectorAll('.pollenDiv').forEach(p => {
            p.animate([
                {transform: `translate(-50%, -50%)` },
                {transform: `translate(${Math.random() * (-1000) + 500}px,
                                       ${Math.random() * (-1000) + 500}px) 
                            rotateX(${Math.random() * 120 + 120}deg) 
                            rotateY(${Math.random() * 120 + 120}deg) 
                            rotateZ(${Math.random() * 120 + 120}deg)`, 
                opacity:0}
            ],
            {
               duration: 2000
            });
        });
        let pollens = document.querySelectorAll('.pollen');
    }, 2000);

    // 배경 색상 변경
    const bd = document.body;
    let c1 = Math.floor(Math.random() * 155 + 100).toString(16);
    let c2 = Math.floor(Math.random() * 155 + 100).toString(16);
    let c3 = Math.floor(Math.random() * 155 + 100).toString(16);
    bd.style.backgroundColor = '#'+c1+c2+c3;
    bd.style.transition = '0.9s';
    setInterval(() => {
        c1 = Math.floor(Math.random() * 155 + 100).toString(16);
        c2 = Math.floor(Math.random() * 155 + 100).toString(16);
        c3 = Math.floor(Math.random() * 155 + 100).toString(16);
        bd.style.backgroundColor = '#'+c1+c2+c3;
    }, 1000);   
}

const alphabetDancing = () => {
    const happyBox = document.querySelector('#happyBox');
    const birthdayBox = document.querySelector('#birthdayBox');
    alpahbetList1 = ['h1','a1','p1','p2','y1'];
    alpahbetList2 = ['b','i','r','t','h2','d','a2','y2'];
    alpahbetNum1 = 0;
    alpahbetNum2 = 0;
    setInterval(() => {
        let dancingNum = Math.floor(Math.random() * 5 + 1);
        dancings[dancingNum](document.querySelector(`#${alpahbetList1[alpahbetNum1]}`));
        alpahbetNum1++
        if(alpahbetNum1>=5) alpahbetNum1 = 0;
    }, 1800);
    setInterval(() => {
        let dancingNum = Math.floor(Math.random() * 5 + 1);
        dancings[dancingNum](document.querySelector(`#${alpahbetList2[alpahbetNum2]}`));
        alpahbetNum2++
        if(alpahbetNum2>=8) alpahbetNum2 = 0;
    }, 1800);
}
const dance1 = (o) => {
    o.animate([
        {transform: 'translateY(-50%) rotateY(720deg)'},
    ],{
        duration: 700,
        easing: "ease-in-out",
        iterations: 2,
        fill: "backwards",
        endDelay: 500,
        direction: 'alternate'
    })
}
const dance2 = (o) => {
    o.animate([
        {transform: 'rotateZ(540deg)'},
    ],{
        duration: 700,
        easing: "ease-in-out",
        iterations: 2,
        fill: "backwards",
        endDelay: 500,
        direction: 'alternate'
    })
}
const dance3 = (o) => {
    o.animate([
        {transform: 'translateX(10%)'},
        {transform: 'translateX(-9%)'},
        {transform: 'translateX(8%)'},
        {transform: 'translateX(-7%)'},
        {transform: 'translateX(6%)'},
        {transform: 'translateX(-5%)'},
        {transform: 'translateX(4%)'},
        {transform: 'translateX(-3%)'},
        {transform: 'translateX(2%)'},
        {transform: 'translateX(-1%)'},
    ],{
        duration: 700,
        easing: "ease-in-out",
        iterations: 2,
        fill: "backwards",
        endDelay: 500,
        direction: 'alternate'
    })
}
const dance4 = (o) => {
    o.animate([
        {transform: 'scale(0.5)'},
        {transform: 'scale(3)'},
        {transform: 'scale(2.8)'},
        {transform: 'scale(3.1)'},
        {transform: 'scale(2.9)'},
        {transform: 'scale(3.05)'},
        {transform: 'scale(2.95)'},
        {transform: 'scale(3)'},
    ],{
        duration: 700,
        easing: "ease-in-out",
        iterations: 2,
        fill: "backwards",
        endDelay: 500,
        direction: 'alternate'
    })
}
const dance5 = (o) => {
    o.animate([
        {opacity:0},
        {opacity:0.8},
        {opacity:0.4},
        {opacity:0.7},
        {opacity:0.3},
        {opacity:0.1},
        {opacity:1},
    ],{
        duration: 700,
        easing: "ease-in-out",
        iterations: 2,
        fill: "backwards",
        endDelay: 500,
        direction: 'alternate'
    })
}
const dancings = {
    1:dance1,
    2:dance2,
    3:dance3,
    4:dance4,
    5:dance5
}
