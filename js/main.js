(function () {
    const spanEl = document.querySelector('main h2 span')
    const txt = ['안녕하세요 ']
    let index = 0;
    let currentTxt = txt[index].split('')

    function writeTxt() {
        spanEl.textContent += currentTxt.shift()
        // 배열요소를 앞에서 부터 하나씩 출력
        // shift( ): 배열 맨 앞요소를 추출하고 추출한 요소를 원본배열에서 삭제

        if(currentTxt.length !== 0){
            // length: 길이 ==같다 !==같지 않다
            // 아직 출력할게 남아있다.
            setTimeout(writeTxt, Math.floor(Math.random() *100))
        }else{
            // 배열에 있는 모든 요소들이 전부 출력이 되었다.=> 지우는 함수실행
            currentTxt= spanEl.textContent.split()

            setTimeout(deleteTxt,3000) 
            // deletetxt 함수를 3초후에 실행해줘
        }
    }
    writeTxt()
    
    function deleteTxt(){
        currentTxt.pop()
        // pop():배열 요소를 끝에서부터 삭제

        spanEl.textContent = currentTxt.join('')

        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, math.floor(Math.random()*100))
        }else{
            // 다음문장으로 넘어가기
        index =(index+1) %txt.length
        currentTxt = txt[index].split('')
        writeTxt()
        }
    }
})()

const headerEl =document.querySelector('header')

window.addEventListener('scroll', function(){
    // 실행
    requestAnimationFrame(sc)
})

function sc(){
    let bs = window.scrollY
    if(bs>0){s
        headerEl.classList.add('on')
    }else{
        headerEl.classList.remove('on')
    }
}

const animationmove = function(selector){
    const targetEl = document.querySelector(selector)
    const bs = window.scrollY
    const targetscrollY = targetEl .getBoundingClientRect().top +bs
    window.scrollTo({
        top : targetscrollY, behavior : 'smooth'
    })

}

const scrollmove = document .querySelectorAll ('[data-animation-scroll="true"]')

// for(초기값,범위;증감식){
//     반복값
// }
for(let i = 0; i < scrollmove.length; i++){
    scrollmove[i].addEventListener('click',function(){
        const target = this.dataset.target;
        animationmove(target)
    })
}

// portfolio

// 모든 포트폴리오 이미지를 가져오기.
const portfolioImages = document.querySelectorAll('.portfolio-image');

// 팝업 요소와 닫기 버튼을 가져오기.
const popup = document.getElementById('popup');
const popupImage = document.querySelector('.popup-image');
const closeBtn = document.querySelector('.close-btn');

// 이미지 클릭 시 팝업 열기
portfolioImages.forEach(image => {
    image.addEventListener('click', function() {
        popup.style.display = 'flex'; // 팝업을 표시
        popupImage.src = this.src; // 클릭한 이미지의 경로를 팝업 이미지로 설정
    });
});

// 닫기 버튼 클릭 시 팝업 닫기
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// 팝업 외부를 클릭하면 팝업 닫기
popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// 비디오
    const items = document.querySelectorAll('.gallery-collection li')
    const gallerypopup = document.querySelector('.gallerypopup')
    const close = document.querySelector('button')

    items.forEach((el, index) => {
        el.addEventListener('mouseenter', function () {
            el.querySelector('video').play()
        })
        el.addEventListener('mouseleave', function () {
            el.querySelector('video').pause()
            el.querySelector('video').currentTime = 0
        })
        el.addEventListener('click', function () {
            let title = el.querySelector('h3').innerText
            let text = el.querySelector('p').innerText
            let videosrc = el.querySelector('video').getAttribute('src')

            popup.querySelector('.txt h2').innerText = title
            popup.querySelector('.txt p').innerText = text
            popup.querySelector('video').setAttribute('src', videosrc)
            popup.classList.add('on')
            popup.querySelector('video').play()

        })
    })

    close.addEventListener('click', function(){
        popup.classList.remove('on')
        popup.querySelector('video').pause()
    })