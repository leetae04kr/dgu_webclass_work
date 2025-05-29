// 파티클 설정
const particlesConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#6c63ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#6c63ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
  // 로딩 화면
  setTimeout(function() {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2500);

  // 파티클 초기화
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particlesConfig);
  }

  // AOS 애니메이션 초기화
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }

  // 커서 효과
  const cursorFollower = document.querySelector('.cursor-follower');
  const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', function(e) {
    gsap.to(cursorFollower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
  });

  document.addEventListener('mouseenter', function() {
    cursorFollower.style.opacity = '1';
    cursorDot.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function() {
    cursorFollower.style.opacity = '0';
    cursorDot.style.opacity = '0';
  });

  // 링크 및 버튼에 호버 효과
  const links = document.querySelectorAll('a, button, .btn-primary, .btn-secondary, .project-card, .icon-container');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      cursorFollower.style.width = '60px';
      cursorFollower.style.height = '60px';
      cursorFollower.style.borderColor = 'var(--secondary-color)';
      cursorDot.style.width = '12px';
      cursorDot.style.height = '12px';
      cursorDot.style.backgroundColor = 'var(--secondary-color)';
    });
    
    link.addEventListener('mouseleave', function() {
      cursorFollower.style.width = '40px';
      cursorFollower.style.height = '40px';
      cursorFollower.style.borderColor = 'var(--primary-color)';
      cursorDot.style.width = '8px';
      cursorDot.style.height = '8px';
      cursorDot.style.backgroundColor = 'var(--primary-color)';
    });
  });

  // 네비게이션 스크롤 효과
  const nav = document.querySelector('.main-nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // 햄버거 메뉴 토글
  const navToggle = document.querySelector('.nav-toggle');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  navToggle.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // 네비게이션 링크 클릭 시 메뉴 닫기
  const navLinkItems = document.querySelectorAll('.nav-link');
  
  navLinkItems.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // 히어로 섹션 텍스트 애니메이션
  const animateTexts = document.querySelectorAll('.animate-text');
  
  animateTexts.forEach((text, index) => {
    setTimeout(() => {
      text.classList.add('active');
    }, 300 * index);
  });

  // 타이핑 효과
  const typingText = document.querySelector('.typing-text');
  const texts = ['웹 개발자', '디자이너', 'UI/UX 전문가', '창의적인 문제 해결사'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 1000; // 텍스트 완성 후 대기 시간
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // 텍스트 삭제 후 대기 시간
    }

    setTimeout(typeText, typingSpeed);
  }

  setTimeout(typeText, 1000);

  // 스킬 프로그레스 바 애니메이션
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      bar.style.width = progress + '%';
    });
  }

  // 스크롤 시 스킬 바 애니메이션 트리거
  const skillsSection = document.querySelector('.skills-section');
  
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillsObserver.observe(skillsSection);

  // 카운터 애니메이션
  const counters = document.querySelectorAll('.counter');
  
  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 애니메이션 지속 시간 (ms)
      const step = target / (duration / 16); // 60fps 기준
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  }

  // 스크롤 시 카운터 애니메이션 트리거
  const aboutSection = document.querySelector('.about-section');
  
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        aboutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  aboutObserver.observe(aboutSection);

  // 프로젝트 필터링
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 활성화된 버튼 클래스 변경
      filterBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 필터 값 가져오기
      const filterValue = this.getAttribute('data-filter');
      
      // 프로젝트 카드 필터링
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 스크롤 상단 버튼
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 스크롤 트리거 애니메이션
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // 헤더 텍스트 애니메이션
    gsap.from('.hero-title', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center',
        toggleActions: 'play none none none'
      }
    });

    // 섹션 헤더 애니메이션
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    // 스킬 아이콘 애니메이션
    gsap.from('.icon-container', {
      duration: 0.8,
      scale: 0.5,
      opacity: 0,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.skills-icons',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // 프로젝트 카드 애니메이션
    gsap.from('.project-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // 3D 큐브 애니메이션
    gsap.from('.cube', {
      duration: 1,
      scale: 0,
      rotation: 720,
      opacity: 0,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: '.cube-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // 연락처 섹션 애니메이션
    gsap.from('.contact-info', {
      duration: 0.8,
      x: -50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    gsap.from('.contact-form', {
      duration: 0.8,
      x: 50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 폼 제출 이벤트
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 폼 데이터 가져오기
      const formData = new FormData(this);
      const formValues = Object.fromEntries(formData.entries());
      
      // 폼 제출 성공 메시지 (실제로는 서버에 전송해야 함)
      alert('메시지가 성공적으로 전송되었습니다!');
      this.reset();
    });
  }

  // 페이지 내 링크 스크롤 애니메이션
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3D 틸트 효과
  const tiltElements = document.querySelectorAll('.project-card, .icon-container, .stat-item');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      const rotateX = (0.5 - yPercent) * 10;
      const rotateY = (xPercent - 0.5) * 10;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // 스크롤 진행 표시기
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  scrollProgress.style.position = 'fixed';
  scrollProgress.style.top = '0';
  scrollProgress.style.left = '0';
  scrollProgress.style.height = '4px';
  scrollProgress.style.width = '0';
  scrollProgress.style.background = 'var(--gradient-primary)';
  scrollProgress.style.zIndex = '1001';
  scrollProgress.style.transition = 'width 0.1s ease';
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });

  // 페이지 로드 시 애니메이션
  window.addEventListener('load', function() {
    // 페이지 요소들 페이드인
    gsap.from('body > *:not(.loading-screen)', {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 2.5
    });
  });

  // 마우스 움직임에 따른 배경 효과
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', mouseX);
    document.documentElement.style.setProperty('--mouse-y', mouseY);
    
    // 배경 그라데이션 이동
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.querySelector('::before')) {
        const translateX = (mouseX - 0.5) * 20;
        const translateY = (mouseY - 0.5) * 20;
        section.style.backgroundPosition = `${translateX}px ${translateY}px`;
      }
    });
  });

  // 오디오 효과
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  function playSound(freq, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = freq;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  }

  // 버튼 클릭 시 사운드 효과
  const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .nav-link');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      playSound(440, 0.15); // A4 음
    });
  });

  // 스크롤 시 사운드 효과 (스로틀링 적용)
  let lastScrollTime = 0;
  
  window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastScrollTime > 500) { // 500ms마다 실행
      lastScrollTime = now;
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const freq = 220 + (scrollPercent * 880); // 220Hz ~ 1100Hz
      playSound(freq, 0.1);
    }
  });

  // 랜덤 색상 변경 효과
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // 10초마다 랜덤 색상 변경
  setInterval(function() {
    const randomColor = getRandomColor();
    document.documentElement.style.setProperty('--primary-color', randomColor);
  }, 10000);

  // 페이지 방문자 수 카운터 (가짜 데이터)
  const visitorCounter = document.createElement('div');
  visitorCounter.className = 'visitor-counter';
  visitorCounter.style.position = 'fixed';
  visitorCounter.style.bottom = '10px';
  visitorCounter.style.left = '10px';
  visitorCounter.style.background = 'rgba(0, 0, 0, 0.7)';
  visitorCounter.style.color = 'white';
  visitorCounter.style.padding = '5px 10px';
  visitorCounter.style.borderRadius = '5px';
  visitorCounter.style.fontSize = '12px';
  visitorCounter.style.zIndex = '1000';
  
  const randomVisitors = Math.floor(Math.random() * 1000) + 500;
  visitorCounter.textContent = `현재 방문자 수: ${randomVisitors}`;
  
  document.body.appendChild(visitorCounter);

  // 매 5초마다 방문자 수 업데이트
  setInterval(function() {
    const change = Math.floor(Math.random() * 10) - 5;
    const newVisitors = parseInt(visitorCounter.textContent.split(': ')[1]) + change;
    visitorCounter.textContent = `현재 방문자 수: ${newVisitors}`;
    
    // 변화에 따른 애니메이션
    if (change > 0) {
      visitorCounter.style.backgroundColor = 'rgba(46, 213, 115, 0.7)';
    } else if (change < 0) {
      visitorCounter.style.backgroundColor = 'rgba(235, 77, 75, 0.7)';
    } else {
      visitorCounter.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
    
    setTimeout(function() {
      visitorCounter.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }, 1000);
  }, 5000);

  // 날씨 위젯 (가짜 데이터)
  const weatherWidget = document.createElement('div');
  weatherWidget.className = 'weather-widget';
  weatherWidget.style.position = 'fixed';
  weatherWidget.style.top = '80px';
  weatherWidget.style.right = '10px';
  weatherWidget.style.background = 'rgba(255, 255, 255, 0.9)';
  weatherWidget.style.padding = '10px';
  weatherWidget.style.borderRadius = '5px';
  weatherWidget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  weatherWidget.style.zIndex = '1000';
  weatherWidget.style.display = 'flex';
  weatherWidget.style.alignItems = 'center';
  weatherWidget.style.fontSize = '14px';
  
  const weatherIcons = ['☀️', '⛅', '☁️', '🌧️', '⛈️', '❄️'];
  const randomIcon = weatherIcons[Math.floor(Math.random() * weatherIcons.length)];
  const randomTemp = Math.floor(Math.random() * 30) + 10;
  
  weatherWidget.innerHTML = `<span style="font-size: 20px; margin-right: 10px;">${randomIcon}</span> ${randomTemp}°C`;
  
  document.body.appendChild(weatherWidget);

  // 마우스 클릭 효과
  document.addEventListener('click', function(e) {
    const clickEffect = document.createElement('div');
    clickEffect.className = 'click-effect';
    clickEffect.style.position = 'fixed';
    clickEffect.style.width = '10px';
    clickEffect.style.height = '10px';
    clickEffect.style.borderRadius = '50%';
    clickEffect.style.backgroundColor = 'var(--primary-color)';
    clickEffect.style.top = e.clientY + 'px';
    clickEffect.style.left = e.clientX + 'px';
    clickEffect.style.transform = 'translate(-50%, -50%)';
    clickEffect.style.animation = 'click-ripple 1s ease-out forwards';
    clickEffect.style.zIndex = '9998';
    
    document.body.appendChild(clickEffect);
    
    setTimeout(function() {
      document.body.removeChild(clickEffect);
    }, 1000);
  });

  // 클릭 효과 애니메이션 스타일 추가
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes click-ripple {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(20);
      }
    }
  `;
  document.head.appendChild(styleElement);

  // 이스터 에그: 키보드 입력 감지
  let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateEasterEgg() {
    // 화면에 무지개 효과 추가
    document.body.style.animation = 'rainbow-background 5s linear infinite';
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
      @keyframes rainbow-background {
        0% { background-color: red; }
        14% { background-color: orange; }
        28% { background-color: yellow; }
        42% { background-color: green; }
        56% { background-color: blue; }
        70% { background-color: indigo; }
        84% { background-color: violet; }
        100% { background-color: red; }
      }
    `;
    document.head.appendChild(rainbowStyle);
    
    // 5초 후 효과 제거
    setTimeout(function() {
      document.body.style.animation = '';
    }, 5000);
  }

  // 마우스 트레일 효과
  const trailContainer = document.createElement('div');
  trailContainer.className = 'trail-container';
  trailContainer.style.position = 'fixed';
  trailContainer.style.top = '0';
  trailContainer.style.left = '0';
  trailContainer.style.width = '100%';
  trailContainer.style.height = '100%';
  trailContainer.style.pointerEvents = 'none';
  trailContainer.style.zIndex = '9997';
  document.body.appendChild(trailContainer);

  let trail = [];
  const trailLength = 20;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.position = 'absolute';
    dot.style.width = '5px';
    dot.style.height = '5px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'var(--primary-color)';
    dot.style.opacity = (1 - i / trailLength).toFixed(2);
    dot.style.transform = 'translate(-50%, -50%)';
    trailContainer.appendChild(dot);
    trail.push({ x: 0, y: 0, element: dot });
  }

  document.addEventListener('mousemove', function(e) {
    trail.pop();
    trail.unshift({ x: e.clientX, y: e.clientY, element: trail[0].element });
    
    for (let i = 0; i < trail.length; i++) {
      const dot = trail[i];
      dot.element.style.left = dot.x + 'px';
      dot.element.style.top = dot.y + 'px';
    }
  });

  // 페이지 로드 완료 메시지
  console.log('페이지가 성공적으로 로드되었습니다! 🚀');
});
