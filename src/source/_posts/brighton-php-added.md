---
title: New User Group Event: Brighton PHP
date: 
draft: true
use: [events]
---
{% block content %}
    {% for event in data.events | reverse %}
        {% if event.short == "brightonphp" %}
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