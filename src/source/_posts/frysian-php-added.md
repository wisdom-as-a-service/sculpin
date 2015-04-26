---
title: New User Group Event: Frysian PHP
date: 2015-01-04
use: [events]
---
{% block content %}
We're excited to announce that we'll be travelling North in the Netherlands to <a href="//en.wikipedia.org/wiki/Heerenveen">
Heerenveen</a> and <a href="phpfrl.nl/">Frysian PHP</a>! I guess we'd better pack a parka!<br>
    {% for event in data.events | reverse %}
        {% if event.short == "frysianphp" %}
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