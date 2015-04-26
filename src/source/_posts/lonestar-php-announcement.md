---
title: New Conference Event: LoneStar PHP
date: 2014-12-29 00:00
use: [events]
---
{% block content %}
<p>We are thrilled to announce that both a talk and a tutorial have been selected for <a href="//lonestarphp.com/">LoneStar 
2015</a>! This is especially exciting, as <a href="/speakers/jeff-carouth">Jeff Carouth</a> will be joining the Tour for the first time!</p>
Hear that, Texas User Groups? The Tour is comin' to town! We'll start booking Tour stops in the region of the conference 
immediately.
<br>
    {% for event in data.events | reverse %}
        {% if event.short == "lonestar" %}
            <div class="row appearance" style="font-size:20px; margin-left:-100px">
                <div class="col-md-3 text-right appearance-date">
                        {{ event.date|date('F j, Y') }}
                </div>
                <div class="col-md-9 appearance-details">
                    {% if event.appearance_url %}<a href="{{ event.appearance_url }}">{% endif %}
                    <p class="appearance-details__event">{{ event.event }}
                    {% if event.appearance_url %}</a>{% endif %}  
                    <div class="appearance-details__location">{{ event.location }}</div>
                    <p class="appearance-details__title">{{ event.title|raw }}</p>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}