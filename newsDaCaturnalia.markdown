---
title: News da Caturnalia
layout: default
---
<!doctype html>
<section class="newsCat-section">
   <h1 class="newsCat-title">News da Caturnalia</h1>
   <div class="newsCat-div">
       <ul class="newsCat-ul">
            {% for post in site.posts%}
            <li class="newsCat-li">
               <a class="newsCat-a" href="{{ post.url }}">•{{ post.title }} - {{ post.date | date: "%b %-d, %Y" }}</a>
            </li>
            {% endfor %}
       </ul>
       </div>
<section>
