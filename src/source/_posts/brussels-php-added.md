---
title: New User Group Event: Brussels PHP
date: 2014-12-31
use: [events]
---
{% block content %}
We're a thrilled to be joining the newly formed <a href="//twitter.com/brusselsphp">Brussels PHP</a> for their 
<a href="//www.meetup.com/Brussels-PHP-Meetup">first meeting</a>! It's not every day that a new 
User Group launches and we are going to be there! Awesome!<br> 
    {% for event in data.events | reverse %}
        {% if event.short == "brusselsphp" %}
            <div class="row appearance" style="font-size:20px; margin-left:-100px">
                <div class="col-md-3 text-right appearance-date">
                    {{ event.date|date('F j, Y') }}
                </div>
                <div class="col-md-9 appearance-details">
                    {% if event.event_url %}
                        <a href="//{{ event.event_url }}">
                    {% endif %}
                    <p class="appearance-details__event">{{ event.event }}
                    {% if event.event_url %}
                        </a>
                    {% endif %}
                    <div class="appearance-details__location">{{ event.location }}</div>
                    <p class="appearance-details__title">{{ event.title|raw }}</p>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}