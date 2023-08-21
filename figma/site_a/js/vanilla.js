        // 자바 쓰는 곳
        const depth1=document.querySelector('.depth1');
        depth1.addEventListener('mouseover',function(){
        depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='block'})
        document.querySelector('header').classList.add('on');
        });

        depth1.addEventListener('mouseout',function(){
        depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='none'})
        document.querySelector('header').classList.remove('on');
        });
        
        // 순수한 자바스크립트를 vanilla라고 한다.