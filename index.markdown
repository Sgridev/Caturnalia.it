---
title: My page
layout: default
---
<!doctype html>
<html>
   <header class="header">
      {% include nav.html %}
      <video id="videoBG" playsinline autoplay muted loop>
         <source type="video/mp4" src="assets/img/Chess_Video_Background_hd.mp4" />
         <source type="video/webm" src="assets/img/Chess_Video_Background_hd.webm" />
      </video>
      <!-- Main Text-->
      <h1 class="header-main-text" data-aos="fade-zoom-in"
         data-aos-easing="ease-in-back"
         data-aos-delay="100"
         data-aos-offset="0">
         Benvenuti al <br> circolo scacchistico <br> Caturnalia
      </h1>
   </header>
   <div class="loader-wrapper">
      <img src="assets/img/pawnloading.png" class="loader" width="50" height="50">
   </div>
   <section id="about" class="about-section" data-aos="fade-left">
      <h1>About us</h1>
      <div class="about-div">
         <section id ="about-description">
            <section class="about-p" data-aos="fade-left">
               <p>Benvenuto nel circolo <strong>Caturnalia</strong>! Qui troverai tornei, lezioni, sfide, ma soprattutto nuovi <strong>amici</strong>!</p>
               <p>Inoltre troverai scacchiere, pezzi e orologi di qualità, un'ambiente tranquillo, informale e <strong>rilassato</strong>.</p>
               <p>Che tu sappia solo come muovere i pezzi o sia alla ricerca di una sfida per mettere alla prova le tue <strong>capacità</strong>, questo è il posto giusto per te.</p>
               <p>Ci incontriamo ogni <strong>giovedì</strong> a partire dalle 21:00 nel nuovo centro Polifunzionale di Barlassina.</p>
               <p><strong>Ti aspettiamo!</strong></p>
            </section>
         </section>
         <section class="about-logo" data-aos="fade-right">
            <img src="assets/img/logo.png" width="400" height="400">
         </section>
      </div>
   </section>
   <section id="news" class="news-section">
      <div class="news-div" data-aos="zoom-in">
         <h1 class="news-title">News</h1>
         <ul class="news-ul">
            {% for post in site.posts limit:4%}
            <li class="card-li">
               <div class="card" style="width: 18rem;">
                  <img class="card-img-top" src="assets/img/logoTORNEO.png" alt="Caturnalia">
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
   <div class="parallax">
        Chi siamo
   </div>
   <div class="chisiamo-div">
   <div class="gigisala-div" style="align-self: center;">
   <h1 style="color: #999999;">Gigi Sala</h1>
   <h1 style="">Presidente</h1>
   <img widht="200" height="200" src="assets/img/gigi.jpg" style="border-radius: 50%;">
   <p style="width: 20em; margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, purus sed volutpat euismod, sapien enim blandit nibh, vel mattis tellus arcu at justo. Morbi eu eros vel nisl laoreet rutrum. Nulla vel urna vulputate, faucibus lorem quis, mattis elit. Nullam viverra placerat dui, ac condimentum justo ultricies eu. Vivamus aliquet orci diam, sed viverra nisl pulvinar vel. Ut sit amet congue mauris. Morbi at nisi felis.</p>
   </div>
   <div class="claudioruzza-div" style="align-self: center;">
   <h1 style="color: #999999;">Claudio Ruzza</h1>
   <h1>Istruttore</h1>
   <img widht="200" height="200" src="assets/img/claudio.jpg" style="border-radius: 50%;">
    <p style="width: 20em; margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, purus sed volutpat euismod, sapien enim blandit nibh, vel mattis tellus arcu at justo. Morbi eu eros vel nisl laoreet rutrum. Nulla vel urna vulputate, faucibus lorem quis, mattis elit. Nullam viverra placerat dui, ac condimentum justo ultricies eu. Vivamus aliquet orci diam, sed viverra nisl pulvinar vel. Ut sit amet congue mauris. Morbi at nisi felis.</p>
   </div>
   </div>
   </section>
   {% include footer.html %}
</html>