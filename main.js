// Переводы
const translations = {
    ru: {
        about: 'Обо мне',
        tech: 'Мой стек',
        experience: 'Опыт работы',
        projects: 'Проекты',
        contacts: 'Контакты',
        heroDescription: 'Разрабатываю надежные и масштабируемые решения на платформе .NET с фокусом на производительность и безопасность',
        myProjects: 'Мои проекты',
        contact: 'Связаться',
        location: 'Россия, удалённая работа',
        experienceYears: 'Опыт работы: 2+ года',
        aboutMe: 'Кто я',
        tools: 'Инструменты',
        career: 'Карьера',
        portfolio: 'Портфолио',
        connection: 'Связь',
        allProjects: 'Все',
        apiProjects: 'API',
        microservices: 'Микросервисы',
        blockchain: 'Блокчейн',
        desktop: 'Десктоп',
        contactText: 'Всегда открыт для обсуждения интересных проектов и предложений о сотрудничестве. Не стесняйтесь связаться со мной любым удобным способом:',
        writeTo: 'Написать мне',
        yourName: 'Ваше имя',
        message: 'Сообщение',
        send: 'Отправить',
        allCategories: 'Все',
        languages: 'Языки',
        frameworks: 'Фреймворки',
        databases: 'Базы данных',
        devops: 'DevOps'
    },
    en: {
        about: 'About',
        tech: 'My Stack',
        experience: 'Experience',
        projects: 'Projects',
        contacts: 'Contacts',
        heroDescription: 'I develop reliable and scalable solutions on the .NET platform with focus on performance and security',
        myProjects: 'My Projects',
        contact: 'Contact Me',
        location: 'Russia, remote work',
        experienceYears: 'Experience: 2+ years',
        aboutMe: 'Who I am',
        tools: 'Tools',
        career: 'Career',
        portfolio: 'Portfolio',
        connection: 'Connection',
        allProjects: 'All',
        apiProjects: 'API',
        microservices: 'Microservices',
        blockchain: 'Blockchain',
        desktop: 'Desktop',
        contactText: 'Always open to discussing interesting projects and collaboration offers. Feel free to contact me in any convenient way:',
        writeTo: 'Write to me',
        yourName: 'Your Name',
        message: 'Message',
        send: 'Send',
        allCategories: 'All',
        languages: 'Languages',
        frameworks: 'Frameworks',
        databases: 'Databases',
        devops: 'DevOps'
    }
};

let currentLang = 'ru';

function setLang(lang) {
    currentLang = lang;
    
    // Заголовки секций
    document.getElementById('about-title').textContent = translations[lang].about;
    document.getElementById('tech-title').textContent = translations[lang].tech;
    document.getElementById('experience-title').textContent = translations[lang].experience;
    document.getElementById('projects-title').textContent = translations[lang].projects;
    document.getElementById('contacts-title').textContent = translations[lang].contacts;
    
    // Hero секция
    document.querySelector('.hero-description').textContent = translations[lang].heroDescription;
    document.querySelector('.hero-actions .btn-primary span').textContent = translations[lang].myProjects;
    document.querySelector('.hero-actions .btn-outline span').textContent = translations[lang].contact;
    document.querySelector('.badge:nth-child(1) span').textContent = translations[lang].location;
    document.querySelector('.badge:nth-child(2) span').textContent = translations[lang].experienceYears;
    
    // Теги секций
    document.querySelector('.about-section .section-tag').textContent = translations[lang].aboutMe;
    document.querySelector('.tech-section .section-tag').textContent = translations[lang].tools;
    document.querySelector('.experience-section .section-tag').textContent = translations[lang].career;
    document.querySelector('.projects-section .section-tag').textContent = translations[lang].portfolio;
    document.querySelector('.contacts-section .section-tag').textContent = translations[lang].connection;
    
    // Фильтры проектов
    document.querySelector('.project-filter:nth-child(1)').textContent = translations[lang].allProjects;
    document.querySelector('.project-filter:nth-child(2)').textContent = translations[lang].apiProjects;
    document.querySelector('.project-filter:nth-child(3)').textContent = translations[lang].microservices;
    document.querySelector('.project-filter:nth-child(4)').textContent = translations[lang].blockchain;
    document.querySelector('.project-filter:nth-child(5)').textContent = translations[lang].desktop;
    
    // Контактная информация
    document.querySelector('.contact-info p').textContent = translations[lang].contactText;
    document.querySelector('.contact-action .btn-primary span').textContent = translations[lang].writeTo;
    document.querySelector('label[for="name"]').textContent = translations[lang].yourName;
    document.querySelector('label[for="email"]').textContent = 'Email';
    document.querySelector('label[for="message"]').textContent = translations[lang].message;
    document.querySelector('.form-submit span').textContent = translations[lang].send;
    
    // Фильтры технологий
    document.querySelector('.tech-tab[data-category="all"]').textContent = translations[lang].allCategories;
    document.querySelector('.tech-tab[data-category="langs"]').textContent = translations[lang].languages;
    document.querySelector('.tech-tab[data-category="frameworks"]').textContent = translations[lang].frameworks;
    document.querySelector('.tech-tab[data-category="db"]').textContent = translations[lang].databases;
    document.querySelector('.tech-tab[data-category="devops"]').textContent = translations[lang].devops;
    
    // Навигация
    document.querySelectorAll('.nav-link')[0].textContent = translations[lang].about;
    document.querySelectorAll('.nav-link')[1].textContent = translations[lang].tech;
    document.querySelectorAll('.nav-link')[2].textContent = translations[lang].experience;
    document.querySelectorAll('.nav-link')[3].textContent = translations[lang].projects;
    document.querySelectorAll('.nav-link')[4].textContent = translations[lang].contacts;
    
    // Мобильная навигация
    document.querySelectorAll('.mobile-nav-link')[0].textContent = translations[lang].about;
    document.querySelectorAll('.mobile-nav-link')[1].textContent = translations[lang].tech;
    document.querySelectorAll('.mobile-nav-link')[2].textContent = translations[lang].experience;
    document.querySelectorAll('.mobile-nav-link')[3].textContent = translations[lang].projects;
    document.querySelectorAll('.mobile-nav-link')[4].textContent = translations[lang].contacts;
    
    // Переключатели языка
    document.getElementById('lang-toggle').textContent = lang === 'ru' ? 'EN' : 'RU';
    document.getElementById('mobile-lang-toggle').textContent = lang === 'ru' ? 'EN' : 'RU';
    
    // Обновляем проекты с новыми переводами
    loadProjects();
}

// Переключение темы
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-theme');
    
    // Обновляем иконку в соответствии с текущей темой
    const themeIcons = document.querySelectorAll('.theme-toggle i');
    themeIcons.forEach(icon => {
        if (isDarkMode) {
            icon.classList.remove('ri-moon-line');
            icon.classList.add('ri-sun-line');
        } else {
            icon.classList.remove('ri-sun-line');
            icon.classList.add('ri-moon-line');
        }
    });
    
    // Сохраняем предпочтение пользователя
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Инициализация темы при загрузке страницы
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        const themeIcons = document.querySelectorAll('.theme-toggle i');
        themeIcons.forEach(icon => {
            icon.classList.remove('ri-moon-line');
            icon.classList.add('ri-sun-line');
        });
    }
}

// Мобильное меню
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    
    mobileMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    // Блокируем/разблокируем прокрутку страницы
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Закрытие мобильного меню при клике на ссылку
function setupMobileMenuLinks() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });
}

// Изменение стиля шапки при прокрутке
function handleScroll() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Подсветка текущего пункта меню
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
    
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Фильтрация технологий
function setupTechFilters() {
    const techTabs = document.querySelectorAll('.tech-tab');
    const techCategories = document.querySelectorAll('.tech-category');
    
    techTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Удаляем активный класс у всех табов
            techTabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс текущему табу
            tab.classList.add('active');
            
            // Получаем категорию из атрибута data-category
            const category = tab.getAttribute('data-category');
            
            // Показываем/скрываем категории
            techCategories.forEach(cat => {
                if (category === 'all' || cat.getAttribute('data-category') === category) {
                    cat.classList.remove('hidden');
                } else {
                    cat.classList.add('hidden');
                }
            });
        });
    });
}

// Фильтрация проектов
function setupProjectFilters() {
    const projectFilters = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    projectFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Удаляем активный класс у всех фильтров
            projectFilters.forEach(f => f.classList.remove('active'));
            
            // Добавляем активный класс текущему фильтру
            filter.classList.add('active');
            
            // Получаем фильтр из атрибута data-filter
            const filterValue = filter.getAttribute('data-filter');
            
            // Показываем/скрываем проекты
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-tags').includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Загрузка проектов из JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        
        const projectsContainer = document.getElementById('projects-container');
        const template = document.getElementById('project-card-template');
        
        // Очищаем контейнер перед добавлением проектов
        projectsContainer.innerHTML = '';
        
        projects.forEach(project => {
            // Создаем клон шаблона
            const projectCard = document.importNode(template.content, true);
            
            // Добавляем теги для фильтрации
            const tags = project.tags.map(tag => tag.toLowerCase())
                .map(tag => {
                    if (tag.includes('api')) return 'api';
                    if (tag.includes('микросерв') || tag.includes('microserv')) return 'microservices';
                    if (tag.includes('блокчейн') || tag.includes('blockchain') || tag.includes('ethereum') || tag.includes('nethereum')) return 'blockchain';
                    if (tag.includes('maui') || tag.includes('десктоп') || tag.includes('desktop')) return 'desktop';
                    return '';
                })
                .filter(tag => tag !== '');
            
            // Устанавливаем data-tags атрибут
            projectCard.querySelector('.project-card').setAttribute('data-tags', tags.join(' '));
            
            // Заполняем данные проекта
            projectCard.querySelector('.project-title').textContent = project.title;
            projectCard.querySelector('.project-description').textContent = project.description;
            projectCard.querySelector('.project-link').href = project.link;
            
            // Устанавливаем изображение с проверкой на дефолтное
            const img = project.img || 'project-default.png';
            projectCard.querySelector('.project-image img').src = img;
            projectCard.querySelector('.project-image img').alt = project.title;
            
            // Добавляем теги
            const tagsContainer = projectCard.querySelector('.project-tags');
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
            
            // Добавляем карточку проекта в контейнер
            projectsContainer.appendChild(projectCard);
        });
        
        // Инициализируем фильтрацию проектов
        setupProjectFilters();
    } catch (error) {
        console.error('Ошибка загрузки проектов:', error);
    }
}

// Обработка отправки формы
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        
        // Базовая валидация формы
        if (!nameField.value || !emailField.value || !messageField.value) {
            alert('Пожалуйста, заполните все поля формы');
            return;
        }
        
        // В реальном проекте здесь будет отправка формы на сервер
        // Для демонстрации просто очищаем форму и показываем сообщение об успехе
        alert('Сообщение отправлено!');
        contactForm.reset();
    });
}

// Функция для оптимизации мобильной прокрутки при клике на ссылки
function setupSmoothScrolling() {
    const allLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Учитываем высоту шапки при прокрутке (мобильная версия имеет высоту 70px)
                const headerHeight = window.innerWidth <= 768 ? 70 : 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Оптимизация прокрутки на мобильных устройствах (предотвращение инерционной прокрутки)
function optimizeMobileScroll() {
    if ('ontouchstart' in window) {
        const scrollableElements = document.querySelectorAll('.tech-tabs, .project-filters');
        
        scrollableElements.forEach(element => {
            let isScrolling = false;
            let startX, startY;
            
            element.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isScrolling = true;
            });
            
            element.addEventListener('touchmove', (e) => {
                if (!isScrolling) return;
                
                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                
                const diffX = startX - currentX;
                const diffY = startY - currentY;
                
                // Если горизонтальная прокрутка больше вертикальной, предотвращаем прокрутку страницы
                if (Math.abs(diffX) > Math.abs(diffY)) {
                    e.preventDefault();
                }
            }, { passive: false });
            
            element.addEventListener('touchend', () => {
                isScrolling = false;
            });
        });
    }
}

// Оптимизация загрузки изображений для мобильных устройств
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    if (image.dataset.src) {
                        image.src = image.dataset.src;
                        image.removeAttribute('data-src');
                    }
                    observer.unobserve(image);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Запасной вариант для браузеров без поддержки IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Оптимизация производительности для мобильных устройств
function optimizeMobilePerformance() {
    // Определяем, является ли устройство мобильным
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Упрощаем некоторые анимации для мобильных устройств
        document.querySelectorAll('.avatar-container, .tech-badge').forEach(el => {
            el.style.animation = 'none';
        });
        
        // Снижаем частоту обновления событий прокрутки для экономии ресурсов
        let scrollTimeout;
        const originalScrollHandler = window.onscroll;
        
        window.onscroll = function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                handleScroll();
                setActiveNavLink();
            }, 100);
        };
    }
}

// Инициализация всех функций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация темы
    initTheme();
    
    // Загрузка проектов
    loadProjects();
    
    // Установка языка
    setLang(currentLang);
    
    // Настройка фильтров технологий
    setupTechFilters();
    
    // Настройка мобильного меню
    setupMobileMenuLinks();
    
    // Настройка формы контактов
    setupContactForm();
    
    // Обработчики событий
    window.addEventListener('scroll', () => {
        handleScroll();
        setActiveNavLink();
    });
    
    // Вызываем функции сразу после загрузки
    handleScroll();
    setActiveNavLink();
    
    // Обработчики клика для переключения темы
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('mobile-theme-toggle').addEventListener('click', toggleTheme);
    
    // Обработчики клика для переключения языка
    document.getElementById('lang-toggle').addEventListener('click', () => {
        setLang(currentLang === 'ru' ? 'en' : 'ru');
    });
    document.getElementById('mobile-lang-toggle').addEventListener('click', () => {
        setLang(currentLang === 'ru' ? 'en' : 'ru');
    });
    
    // Обработчик клика для мобильного меню
    document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);
    
    // Добавляем новые функции для мобильной оптимизации
    setupSmoothScrolling();
    optimizeMobileScroll();
    lazyLoadImages();
    optimizeMobilePerformance();
    
    // Обработчик изменения размера экрана
    window.addEventListener('resize', function() {
        optimizeMobilePerformance();
    });
});
