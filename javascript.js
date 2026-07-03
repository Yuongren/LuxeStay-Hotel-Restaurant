
(function () {
    // ----- DATA -----
    const rooms = [
        { name: 'Deluxe Room', price: '$120 / Night', desc: 'King bed, WiFi, breakfast included', amenities: ['King Bed', 'WiFi', 'Breakfast'], img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZGVkZWQiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM3Nzc3NzciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wnI2kIERlbHV4ZTwvdGV4dD48L3N2Zz4=' },
        { name: 'Suite', price: '$180 / Night', desc: 'Spacious suite with ocean view', amenities: ['Ocean View', 'Jacuzzi', 'WiFi'], img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNkY2RjZGMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wnI6kIFN1aXRlPC90ZXh0Pjwvc3ZnPg==' },
        { name: 'Executive Room', price: '$150 / Night', desc: 'Business ready with workspace', amenities: ['Work Desk', 'WiFi', 'Mini Bar'], img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzAwIDIwMCI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM1NTU1NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wnI6rIEV4ZWN1dGl2ZTwvdGV4dD48L3N2Zz4=' }
    ];
    const galleryImages = ['Lobby', 'Room', 'Restaurant', 'Pool', 'Gym', 'Garden', 'Reception', 'Dining'].map((label, i) =>
        `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTUwIDE1MCI+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNlZGVkZWQiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM1NTU1NTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4ke2xhYmVsfTwvdGV4dD48L3N2Zz4=`
    );
    const testimonials = [
        { stars: '★★★★★', text: 'The best hotel I\'ve visited. Impeccable service.', author: '- James' },
        { stars: '★★★★★', text: 'A dream stay. The restaurant is world-class.', author: '- Emma' },
        { stars: '★★★★★', text: 'Luxury and comfort in every detail. Highly recommend.', author: '- Michael' }
    ];

    // Render rooms
    const roomGrid = document.getElementById('roomGrid');
    rooms.forEach(r => {
        const card = document.createElement('div');
        card.className = 'room-card';
        card.innerHTML = `
          <img src="${r.img}" alt="${r.name}">
          <div class="content">
            <h3>${r.name}</h3>
            <div class="price">${r.price}</div>
            <p>${r.desc}</p>
            <div class="amenities">${r.amenities.map(a => `<span><i class="fas fa-check-circle"></i> ${a}</span>`).join('')}</div>
            <button class="btn bookBtn" style="width:100%;">Book Now</button>
          </div>
        `;
        roomGrid.appendChild(card);
    });

    // Render gallery
    const galleryGrid = document.getElementById('galleryGrid');
    galleryImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'gallery';
        galleryGrid.appendChild(img);
    });

    // Render testimonials
    const carousel = document.getElementById('testimonialCarousel');
    testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `<div class="stars">${t.stars}</div><p>${t.text}</p><h4>${t.author}</h4>`;
        carousel.appendChild(card);
    });

    // ----- HAMBURGER -----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

    // ----- MODAL -----
    const modal = document.getElementById('bookingModal');
    const openModal = () => modal.style.display = 'flex';
    const closeModal = () => modal.style.display = 'none';
    document.getElementById('bookNowNav').addEventListener('click', e => { e.preventDefault(); openModal(); });
    document.getElementById('bookNowHero').addEventListener('click', e => { e.preventDefault(); openModal(); });
    document.querySelectorAll('.bookBtn').forEach(btn => btn.addEventListener('click', openModal));
    document.getElementById('modalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

    // ----- BACK TO TOP -----
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
        backTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ----- DARK MODE (simple) -----
    const darkToggle = document.getElementById('darkToggle');
    let dark = false;
    darkToggle.addEventListener('click', () => {
        dark = !dark;
        document.body.style.background = dark ? '#0F172A' : '#fff';
        document.body.style.color = dark ? '#eee' : '#0F172A';
        document.querySelectorAll('.room-card, .food-card, .testimonial-card, .amenity-item, .resto-preview, #about div, #contact div').forEach(el => {
            el.style.background = dark ? '#1e293b' : '';
            el.style.color = dark ? '#eee' : '';
        });
        darkToggle.innerHTML = dark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Contact form validation
    document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! We will get back soon.');
    });

    // Smooth scrolling for nav (basic)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
})();