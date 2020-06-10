---
title: Caturnalia - Amici per gli scacchi
layout: default
---
<section id="videoBG" class="header">
    <a class="btnTop"></a>
    <video playsinline autoplay muted loop>
         <source type="video/mp4" src="assets/img/Chess_Video_Background_hd.mp4"/>
         <source type="video/webm" src="assets/img/Chess_Video_Background_hd.webm" />
      </video>
    <h1 class="header-main-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
        Benvenuti al <br> circolo scacchistico <br> Caturnalia
    </h1>
</section>
<section id="about" class="about-section" data-aos="fade-left" data-aos-delay="150">
    <h1>About us</h1>
    <div class="about-div">
        <section id="about-description">
            <section class="about-p" data-aos="fade-left" data-aos-delay="150">
                <p>Benvenuto nel circolo <strong>Caturnalia</strong>! Qui troverai tornei, lezioni, sfide, ma soprattutto nuovi <strong>amici</strong>!</p>
                <p>Inoltre troverai scacchiere, pezzi e orologi di qualità, un'ambiente tranquillo, informale e <strong>rilassato</strong>.</p>
                <p>Che tu sappia solo come muovere i pezzi o sia alla ricerca di una sfida per mettere alla prova le tue <strong>capacità</strong>, questo è il posto giusto per te.</p>
                <p>Ci incontriamo ogni <strong>giovedì</strong> a partire dalle 21:00 nel nuovo centro Polifunzionale di Barlassina.</p>
                <p><strong>Ti aspettiamo!</strong></p>
            </section>
        </section>
        <section class="about-logo" data-aos="fade-right" data-aos-delay="150">
            <img src="assets/img/logo.png" width="400" height="400" alt="logo">
        </section>
    </div>
</section>
<section id="news" class="news-section">
    <div class="news-div">
        <h1 class="news-title" data-aos="zoom-in" data-aos-delay="150">News</h1>
        <ul class="news-ul" data-aos="fade-zoom-in" data-aos-delay="150">
            {% for post in site.posts limit:4%}
            <li class="card-li">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="assets/img/logoTORNEO.png" alt="logo-torneo">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text">{{ post.date | date: "%b %-d, %Y" }}</p>
                        <a href="{{ post.url }}" class="btn btn-primary">{{ post.title }}</a>
                    </div>
                </div>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>
<section id="chisiamo" class="chisiamo-section">
    <div class="parallax-chisiamo">
        Chi siamo
    </div>
    <div class="chisiamo-div">
        <div class="chisiamo-card"  data-aos="fade-left"  data-aos-delay="150">
            <h1 style="color: #999999;">Gigi Sala</h1>
            <h1 style="">Presidente</h1>
            <img widht="200" height="200" src="assets/img/gigi.jpg" style="border-radius: 50%;" alt="gigi-sala">
            <p style="max-width: 20em; margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, purus sed volutpat euismod, sapien enim blandit nibh, vel mattis tellus arcu at justo. Morbi eu eros vel nisl laoreet rutrum. Nulla vel urna vulputate, faucibus lorem quis,
                mattis elit. Nullam viverra placerat dui, ac condimentum justo ultricies eu. Vivamus aliquet orci diam, sed viverra nisl pulvinar vel. Ut sit amet congue mauris. Morbi at nisi felis.</p>
        </div>
        <div class="chisiamo-card" data-aos="fade-right" data-aos-delay="150">
            <h1 style="color: #999999;">Claudio Ruzza</h1>
            <h1>Istruttore</h1>
            <img widht="200" height="200" src="assets/img/claudio.jpg" style="border-radius: 50%;" alt="claudio-ruzza">
            <p style="max-width: 20em; margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, purus sed volutpat euismod, sapien enim blandit nibh, vel mattis tellus arcu at justo. Morbi eu eros vel nisl laoreet rutrum. Nulla vel urna vulputate, faucibus lorem quis,
                mattis elit. Nullam viverra placerat dui, ac condimentum justo ultricies eu. Vivamus aliquet orci diam, sed viverra nisl pulvinar vel. Ut sit amet congue mauris. Morbi at nisi felis.</p>
        </div>
    </div>
</section>
<section id="dovesiamo" class="dovesiamo-section">
    <div class="parallax-dovesiamo">
        Dove siamo
    </div>
    <div class="dovesiamo-div" data-aos="fade-zoom-in" data-aos-delay="150">
        <div style="margin-right: 3%;">
            <h3>Ci incontriamo al Centro Polifunzionale di Barlassina</h3>
            <h4 style="margin-top: 1%; color: #999999;">Via Don Carlo Borghi, Barlassina, MB</h4>
            <p style="max-width: 30em; margin-top: 3%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, purus sed volutpat euismod, sapien enim blandit nibh, vel mattis tellus arcu at justo. Morbi eu eros vel nisl laoreet rutrum. Nulla vel urna vulputate, faucibus lorem quis,
                mattis elit. Nullam viverra placerat dui, ac condimentum justo ultricies eu. Vivamus aliquet orci diam, sed viverra nisl pulvinar vel. Ut sit amet congue mauris. Morbi at nisi felis.</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5099092558194!2d9.13480791583685!3d45.66066292833301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478697cf39b953ff%3A0x80f9e7902945a198!2sCaturnalia%20-%20Circolo%20Amici%20degli%20Scacchi!5e0!3m2!1sit!2sit!4v1590223054694!5m2!1sit!2sit"
            frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="map-iframe"></iframe>
    </div>
</section>
