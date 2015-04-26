---
title: New User Group Event: Symfony Cologne
date: 2014-12-28
type: text
draft: false
use:
    - events
---
{% block content %}
The Tour is going to Germany! We've got a special guest for this one, too - Jeremy Mikola.<br>
    {% for event in data.events | reverse %}
        {% if event.short == "colognesymfony" %}
            <div class="row appearance" style="font-size:20px; margin-left:-100px">
                <div class="col-md-3 text-right appearance-date">
                    {{ event.date|date('F j, Y') }}
                </div>
                <div class="col-md-9 appearance-details">
                    {% if event.appearance_url %}
                        <a href="{{ event.appearance_url }}">
                    {% endif %}
                    <p class="appearance-details__event">{{ event.event }}
                    {% if event.appearance_url %}
                        </a>
                    {% endif %}
                    <div class="appearance-details__location">{{ event.location }}</div>
                    <p class="appearance-details__title">{{ event.title|raw }}</p>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}