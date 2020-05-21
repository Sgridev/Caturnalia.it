---
title: My page
layout: default
---

<!doctype html>
<html>    
<header class="header">
        {% include nav.html %}
        <!-- Video background-->
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
       <div class="news-div"> 
<section id="news" class="news-section" data-aos="zoom-in-up"> 
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
</section>
</div>
   {% include footer.html %}


</html>
